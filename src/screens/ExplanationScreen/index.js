import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import Markdown from 'react-native-simple-markdown';

import styles from './index.style';

const ExplanationScreen = (props) => {
  const { chapter } = props.route.params;
  const theme = useTheme();

  const markdownStyles = {
    heading1: {
      fontSize: theme.fonts.size.title,
      color: theme.colors.secondary,
      fontFamily: theme.fonts.titleSolidBlack,
      marginBottom: theme.spacing(3)
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
      fontSize: theme.fonts.size.text
    },
  }

  return (
    <ScrollView style={styles.container}>
      <Markdown styles={markdownStyles}>
        {chapter.explanation}
      </Markdown>
    </ScrollView>
  );
};

export default ExplanationScreen;
