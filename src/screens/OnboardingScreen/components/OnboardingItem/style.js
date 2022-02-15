import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing(6),
  },
  welcomeText: {
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.title,
    paddingTop: theme.spacing(10)
  },
  logoText: {
    fontFamily: theme.fonts.titleSolidRegular,
    color: theme.colors.accent,
    fontSize: theme.fonts.size.title,
  },
  firstText: {
    color: theme.colors.secondary,
    fontSize: theme.fonts.size.subtitle,
    textAlign: 'center',
    flex: 1
  },
  image: { 
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain' 
  },
});

export default styles;
