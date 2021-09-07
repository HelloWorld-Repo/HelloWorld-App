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
  },
  cancelButton: {
    marginTop: theme.spacing(2)
  },
  modal: {
    paddingHorizontal: theme.spacing(5),
    paddingVertical: theme.spacing(3)
  },
  modalText: {
    alignSelf: 'center',
    fontSize: theme.fonts.size.text,
    fontFamily: theme.fonts.sampleText,
    color: theme.colors.textSecondary,
    marginVertical: theme.spacing(2)
  }

});

export default styles;