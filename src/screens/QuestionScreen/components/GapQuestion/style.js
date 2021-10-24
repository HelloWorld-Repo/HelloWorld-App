import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  gap: {
    backgroundColor: theme.colors.background,
    height: 30,
    width: 50,
    borderRadius: 8,
  },
  text: {
    fontSize: theme.fonts.size.text,
    lineHeight: 40,
  },
  container: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  gapContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
});

export default styles;
