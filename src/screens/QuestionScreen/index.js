import React, { useState } from 'react';
import {
  Text,
  useTheme,
  Button as PaperButton,
  ActivityIndicator,
} from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { StackActions } from '@react-navigation/routers';

import { Button, Toast } from '../../components';
import QuestionService from '../../services/QuestionService';
import ChapterService from '../../services/ChapterService';
import styles from './style';

const QuestionScreen = ({ route, navigation }) => {
  const { questions, index, answers } = route.params;

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
        if (majorityIsCorrect())
          await ChapterService.saveChapterDone(question.chapterId);

        navigation.reset({
          index: 0,
          routes: [{ name: 'Tabs', params: { completedChapter: true } }],
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

  const renderOption = (option) => {
    const isSelected = selecteds.includes(option.id);

    return (
      <View>
        {isSelected && (
          <PaperButton
            disabled
            uppercase={false}
            style={{
              backgroundColor: option.isRight
                ? theme.colors.success
                : theme.colors.secondaryError,
              paddingVertical: theme.spacing(1),
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontFamily: theme.fonts.sampleText,
                fontSize: theme.fonts.size.text,
                color: theme.colors.textSecondary,
              }}
            >
              {option.text}
            </Text>
          </PaperButton>
        )}
        {!isSelected && (
          <Button
            text={option.text}
            backgroundColor={theme.colors.background}
            backgroundDarker={theme.colors.disabled}
            textColor={theme.colors.textSecondary}
            full
            onPress={() => handleAnswerClick(option)}
            raiseLevel={2}
            disabled={selecteds.length >= correctLength}
          />
        )}
      </View>
    );
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
        <Text style={styles.questionDescription}>{question.description}</Text>
        <Text style={styles.qttText}>{`Escolha ${correctLength} opção:`}</Text>

        {options.map((option) => (
          <View style={styles.option} key={option.id}>
            {renderOption(option)}
          </View>
        ))}
        {selecteds.length >= correctLength && (
          <Button
            containerStyles={styles.submit}
            text={isLast ? 'Concluir' : 'Próxima'}
            width={250}
            onPress={handleNextClick}
          />
        )}
      </ScrollView>
    </>
  );
};

export default QuestionScreen;
