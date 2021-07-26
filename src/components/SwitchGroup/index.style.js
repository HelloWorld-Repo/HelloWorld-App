import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  label: {
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.small,
    color: theme.colors.disabledShadow,
    flex:1
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: theme.spacing(2)
  },
});

export default styles;
