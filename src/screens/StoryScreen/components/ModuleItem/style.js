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
    marginHorizontal: theme.spacing(2),
    textAlign: 'center',
    width: 'auto',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  list: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3) // The chapter item there is margin botton, then this value is result of 6(required margin) - 3(chapter item margin)
  }
});

export default styles;
