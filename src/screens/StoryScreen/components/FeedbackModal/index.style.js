import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: theme.fonts.size.titlesScreen,
    fontFamily: theme.fonts.titleShadow,
    color: theme.colors.accent,
    marginVertical: theme.spacing(2),
  },
  container: {},
  question: {
    fontFamily: theme.fonts.titleSolidBlack,
    fontSize: theme.fonts.size.text,
    color: theme.colors.textSecondary,
    alignSelf: 'center',
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: theme.spacing(4),
  },
  contentModal: {
    paddingHorizontal: theme.spacing(5),

    // alignItems: 'center',
    // justifyContent:
  },
  icons: {
    width: 80,
    height: 80,
    marginHorizontal: theme.spacing(2),
  },
  optionsContent: {
    alignItems: 'center',
  },
  textArea: {
    backgroundColor: theme.colors.background,
  },
  negativeOption: {
    // backgroundColor: 'red'
  },
  positiveOption: {
    // backgroundColor: 'blue'
  },
});

export default styles;
