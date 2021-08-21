import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing(5),
  },

  
});

export default styles;
