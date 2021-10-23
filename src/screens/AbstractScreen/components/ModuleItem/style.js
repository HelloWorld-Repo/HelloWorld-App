import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.titleSolidRegular,
    color: theme.colors.textSecondary,
    fontSize: theme.fonts.size.text,
    backgroundColor: theme.colors.backgroundTitles,
    paddingVertical: theme.spacing(3),
    marginVertical: theme.spacing(1),
    textAlign: 'center',
    width: 'auto',
  },
  abstractContainer: {
    marginBottom: theme.spacing(2),
    marginHorizontal: theme.spacing(2),
  },
  abstractRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    fontSize: theme.fonts.size.small,
  },
  result: {
    fontFamily: theme.fonts.titleSolidRegular,
    fontSize: theme.fonts.size.subtitle,
    color: theme.colors.textSecondary
  },
  correct: {
    color: theme.colors.accent
  },
  wrong: {
    color: theme.colors.error
  },
});

export default styles;
