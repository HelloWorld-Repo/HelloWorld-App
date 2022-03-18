import React, { useState } from 'react';
import { Text, useTheme, ActivityIndicator } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { StackActions } from '@react-navigation/routers';

import { Button, Toast } from '../../components';
import QuestionService from '../../services/QuestionService';
import ChapterService from '../../services/ChapterService';
import styles from './style';
import Option from './components/Option';
import GapQuestion from './components/GapQuestion';
import { useApplicationProvider } from '../../providers/ApplicationProvider';

const QuestionScreen = ({ route, navigation }) => {
  const { questions, index, answers, query, type } = route.params;
  const { increaseUserLevel } = useApplicationProvider();

  const [selecteds, setSelecteds] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const question = questions[index];
  const options = question?.options || [];
  const corrects = options?.filter((option) => option.isRight) || [];
  const correctLength = corrects.length;

  const isLast = index >= questions.length - 1;
  const theme = useTheme();

  const handleAnswerClick = (option) => {
    setSelecteds([...selecteds, option.id]);
  };

  const areAllCorrect = () => {
    var ret = true;

    corrects.forEach((item) => {
      if (!selecteds.includes(item.id)) {
        ret = false;
      }
    });

    return ret;
  };

  const majorityIsCorrect = () => {
    const corrects = answers.filter((answer) => answer.correctedAnswer).length;

    return corrects / answers.length > 0.5;
  };

  const handleNextClick = async () => {
    if (answers.filter((item) => item.questionId === question.id).length === 0)
      answers.push({
        questionId: question.id,
        correctedAnswer: areAllCorrect(),
      });

    if (isLast) {
      setLoading(true);
      try {
        await QuestionService.sendAnswers(answers);
        const completedChapter = majorityIsCorrect();
        if (completedChapter) {
          await ChapterService.saveChapterDone(question.chapterId);
          await increaseUserLevel();
        }
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Tabs',
              params: {
                completedChapter: completedChapter ? 'success' : 'failure',
              },
            },
          ],
        });
      } catch (error) {
        console.error(error);
        setError('Erro ao salvar resposta, tente novamente mais tarde');
      }
      setLoading(false);
      return;
    }
    navigation.dispatch(
      StackActions.replace('Question', { questions, index: index + 1, answers })
    );
  };

  const handleNextClickRandom = async () => {
    setLoading(true);
    try {
      await QuestionService.sendAnswers([
        {
          questionId: question.id,
          correctedAnswer: areAllCorrect(),
        },
      ]);

      const findedQuestion = await QuestionService.getQuestionsFromChapter(
        query?.chapterId,
        query?.type,
        1
      );

      navigation.dispatch(
        StackActions.replace('Question', {
          questions: findedQuestion,
          index: 0,
          answers: [],
          query,
          type,
        })
      );
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError('Erro ao salvar resposta, tente novamente mais tarde');
    }
  };

  return loading ? (
    <ActivityIndicator
      animating={true}
      color={theme.colors.primary}
      style={styles.loading}
    />
  ) : (
    <>
      <Toast
        message={error}
        visible={!!error}
        onDismiss={() => setError(null)}
      />
      <ScrollView>
        <Text style={styles.title}>HORA DA PRÁTICA</Text>
        <View style={styles.containerDescription}>
          {parseInt(question.type) === 2 ? (
            <GapQuestion
              partsOfDescription={question.description.split('_')}
            ></GapQuestion>
          ) : (
            <Text style={styles.questionDescription}>
              {question.description}
            </Text>
          )}
        </View>
        <Text style={styles.qttText}>{`Escolha ${correctLength} ${
          correctLength !== 1 ? 'opções' : 'opção'
        }:`}</Text>

        {options.map((option) => (
          <View style={styles.option} key={option.id}>
            <Option
              option={option}
              isSelected={selecteds.includes(option.id)}
              onSelect={(option) => handleAnswerClick(option)}
              disabled={selecteds.length >= correctLength}
            ></Option>
          </View>
        ))}
        {selecteds.length >= correctLength && (
          <Button
            containerStyles={styles.submit}
            text={isLast && type !== 'random' ? 'Concluir' : 'Próxima'}
            width={250}
            onPress={
              type !== 'random' ? handleNextClick : handleNextClickRandom
            }
          />
        )}
      </ScrollView>
    </>
  );
};

export default QuestionScreen;
