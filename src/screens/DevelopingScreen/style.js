import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';


const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    marginVertical: theme.spacing(4),
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  text: {
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.text,
    textAlign: 'center',
    lineHeight: 40,
    marginHorizontal: theme.spacing(5),
    backgroundColor: theme.colors.backgroundTitles,
    borderRadius: 100,
    padding: theme.spacing(3)
  },
  title: {
    fontFamily: theme.fonts.titleSketch,
    fontSize: theme.fonts.size.title,
    color: theme.colors.primary,
    textAlign: 'center',
    lineHeight: theme.fonts.size.title,
  },
  container: {
    marginVertical: theme.spacing(5),
  }
});

export default styles;
