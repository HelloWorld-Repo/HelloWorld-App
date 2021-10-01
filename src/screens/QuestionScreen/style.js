import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fonts.size.title,
    color: theme.colors.textSecondary,
    fontFamily: theme.fonts.titleSolidBlack,
    marginVertical: theme.spacing(4),
    textAlign: 'center',
  },

  questionDescription: {
    backgroundColor: theme.colors.disabled,
    paddingVertical: theme.spacing(4),
    paddingHorizontal: theme.spacing(2),
    fontSize: theme.fonts.size.text,
  },

  qttText: {
    marginVertical: theme.spacing(3),
    paddingHorizontal: theme.spacing(2),
  },

  option: {
    marginBottom: theme.spacing(3),
    paddingHorizontal: theme.spacing(2),
  },

  submit: {
    marginTop: theme.spacing(4),
    alignSelf: 'center'
  },
});

export default styles;
