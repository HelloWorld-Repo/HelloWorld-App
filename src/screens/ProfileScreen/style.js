import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({

  title: {
    alignSelf: 'center',
    fontSize: theme.fonts.size.titlesScreen,
    fontFamily: theme.fonts.titleShadow,
    color: theme.colors.accent,
    marginVertical: theme.spacing(2)
  },
  container: {
    paddingHorizontal: theme.spacing(3),
    paddingVertical: theme.spacing(1),
    justifyContent: "space-around",
    flex: 1
  }

});

export default styles;