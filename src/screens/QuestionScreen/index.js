import React, { useState } from 'react';
import { Text, useTheme, Button as PaperButton } from 'react-native-paper';

import styles from './style';
import { Button } from '../../components';
import { ScrollView, View } from 'react-native';

const QuestionScreen = ({ route, navigation }) => {
  const { questions, index, answers } = route.params;

  const [selecteds, setSelecteds] = useState([]);

  const question = questions[index];
  const options = question?.options;
  const corrects = options.filter((option) => option.isRight);
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

  const handleNextClick = () => {
    answers.push({ questionId: question.id, isRight: areAllCorrect() });

    if (isLast) {
      return navigation.navigate('Tabs');
    }
    navigation.push('Question', { questions, index: index + 1, answers });
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

  return (
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
  );
};

export default QuestionScreen;
