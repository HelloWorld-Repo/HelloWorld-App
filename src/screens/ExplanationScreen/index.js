import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import Markdown from 'react-native-simple-markdown';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components';
import styles from './index.style';

const ExplanationScreen = ({ route }) => {
  const { chapter } = route.params;
  const theme = useTheme();
  const navigation = useNavigation();

  const markdownStyles = {
    heading1: {
      fontSize: theme.fonts.size.title,
      color: theme.colors.secondary,
      fontFamily: theme.fonts.titleSolidBlack,
      marginBottom: theme.spacing(3),
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
      fontSize: theme.fonts.size.text,
    },
  };

  const handleOnPress = () => {
    navigation.push('Question', { questions: chapter?.questions, index: 0, answers: [] });
  };

  return (
    <ScrollView style={styles.container}>
      <Markdown styles={markdownStyles}>{chapter.explanation}</Markdown>
      <Button
        text="Entendi"
        full
        containerStyles={{ marginTop: theme.spacing(3) }}
        onPress={handleOnPress}
      ></Button>
    </ScrollView>
  );
};

export default ExplanationScreen;
