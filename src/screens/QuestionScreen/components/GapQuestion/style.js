import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fonts.size.text,
    lineHeight: 40,
  },
  container: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
});

export default styles;
