import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import Markdown from 'react-native-simple-markdown';
import { useNavigation } from '@react-navigation/native';

import { Button, SafeAreaAndroid, Toast } from '../../components';
import styles from './index.style';
import QuestionService from '../../services/QuestionService';

const ExplanationScreen = ({ route }) => {
  const [error, setError] = useState(null);

  const { chapter } = route.params;
  const theme = useTheme();
  const navigation = useNavigation();

  const markdownStyles = {
    heading1: {
      fontSize: theme.fonts.size.subtitle,
      color: theme.colors.secondary,
      fontFamily: theme.fonts.titleSolidBlack,
      marginVertical: theme.spacing(3),
    },
    heading2: {
      fontSize: theme.fonts.size.text,
      color: theme.colors.secondary,
      fontFamily: theme.fonts.titleSolidBlack,
      marginVertical: theme.spacing(3),
    },
    link: {
      color: theme.colors.accent,
    },
    mailTo: {
      color: theme.colors.accent,
    },
    text: {
      color: theme.colors.textSecondary,
      fontFamily: theme.fonts.sampleText,
      fontSize: theme.fonts.size.small,
    },
    strong: {
      fontFamily: theme.fonts.sampleText,
      fontWeight: 'bold',
    },
  };

  const handleOnPress = async () => {
    try {
      const questions = await QuestionService.getQuestionsFromChapter(
        chapter.id
      );

      if (questions.length === 0) {
        setError('Ainda não foram cadastradas questões para esse capítulo');
      } else {
        navigation.push('Question', {
          questions: questions,
          index: 0,
          answers: [],
        });
      }
    } catch (error) {
      console.error(error?.message);
    }
  };

  return (
    <SafeAreaAndroid>
      <ScrollView style={styles.container}>
        <Toast
          message={error}
          visible={!!error}
          onDismiss={() => setError(null)}
        />
        <Markdown styles={markdownStyles}>{chapter.explanation}</Markdown>
        <Button
          text="Entendi"
          full
          containerStyles={{ marginTop: theme.spacing(3) }}
          onPress={handleOnPress}
        ></Button>
      </ScrollView>
    </SafeAreaAndroid>
  );
};

export default ExplanationScreen;
