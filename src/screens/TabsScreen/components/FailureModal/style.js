import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  modalTitle: {
    textAlign: 'center',
    paddingVertical: theme.spacing(3),
    fontFamily: theme.fonts.titleSolidBlack,
    color: theme.colors.primary,
    fontSize: theme.fonts.size.title,
  },
  failureImage: {
    width: 'auto',
    height: 350,
    alignSelf: 'stretch',
  },
  modalText: {
    marginVertical: theme.spacing(4),
    fontSize: theme.fonts.size.text,
    textAlign: 'center',
  },
});

export default styles;
