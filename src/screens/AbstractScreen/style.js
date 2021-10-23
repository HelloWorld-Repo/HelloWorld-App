import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: theme.fonts.size.titlesScreen,
    fontFamily: theme.fonts.titleShadow,
    color: theme.colors.accent,
    marginVertical: theme.spacing(2),
  },

  abstractContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(2)
  },

  abstractTitle: {
    fontFamily: theme.fonts.titleSolidBlack,
    fontSize: theme.fonts.size.bigLogo,
    color: theme.colors.textSecondary
  },

  abstractGroup: {
    marginHorizontal: theme.spacing(3),
    alignItems: 'center'
  },
  label: {
    fontFamily: theme.fonts.titleSolidLight,
    fontSize: theme.fonts.size.small,
    color: theme.colors.textSecondary

  }
});

export default styles;
