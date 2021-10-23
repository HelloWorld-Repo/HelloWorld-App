import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    paddingHorizontal: theme.spacing(4),
  },
  label: {
    fontFamily: theme.fonts.titleSolidBlack,
    color: theme.colors.accent,
    fontSize: theme.fonts.size.bigLogo,
  },
  labelCompleted: {
    fontFamily: theme.fonts.titleSolidBlack,
    color: theme.colors.textPrimary,
    fontSize: theme.fonts.size.bigLogo,
  },
  starIcon: {
    height: 25,
    width: 25,
    marginLeft: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(1),
    flexWrap: 'wrap',
    textAlign: 'center',
    textDecorationColor: theme.colors.primary
  },
});

export default styles;
