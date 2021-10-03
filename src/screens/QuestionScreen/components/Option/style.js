import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  selectedText: {
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.text,
    color: theme.colors.textSecondary,
  },
  buttonSelected: (isRight) => ({
    backgroundColor: isRight ? theme.colors.success
      : theme.colors.secondaryError,
    paddingVertical: theme.spacing(1),
    borderRadius: 15,
  }),
});

export default styles;
