import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  selectedText: {
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.text,
    color: theme.colors.textSecondary
  },
  feedbackText: (isRight) => ({
    color: isRight ? theme.colors.primary : theme.colors.error,
  }),
  buttonUnselected: {
    paddingHorizontal: theme.spacing(3),
    paddingVertical: theme.spacing(2),
    backgroundColor: theme.colors.background,
    borderRadius: 15,
  },
  buttonSelected: (isRight) => ({
    backgroundColor: isRight
      ? theme.colors.success
      : theme.colors.secondaryError,
    paddingVertical: theme.spacing(1),
    borderRadius: 15,
  }),
});

export default styles;
