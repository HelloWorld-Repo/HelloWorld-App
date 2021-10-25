import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: 50,
    justifyContent: 'space-evenly',
    paddingVertical: theme.spacing(5),
  },
  welcomeText: {
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.title,
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
  },
  image: { 
    flex: 1, 
    width: '100%', 
    height: null, 
    resizeMode: 'contain' 
  },
});

export default styles;
