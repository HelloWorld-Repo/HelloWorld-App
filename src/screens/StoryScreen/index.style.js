import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({

  title: {
    alignSelf: 'center',
    fontSize: theme.fonts.size.titlesScreen,
    fontFamily: theme.fonts.titleShadow,
    color: theme.colors.accent,
    marginVertical: theme.spacing(2)
  }

});

export default styles;
