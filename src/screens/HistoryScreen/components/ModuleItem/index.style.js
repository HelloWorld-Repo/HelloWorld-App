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
    textAlign: 'center'
  }
});

export default styles;
