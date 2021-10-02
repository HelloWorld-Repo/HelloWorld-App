import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  modalTitle: {
    textAlign: 'center',
    paddingVertical: theme.spacing(3),
    fontFamily: theme.fonts.titleSolidBlack,
    color: theme.colors.primary,
    fontSize: theme.fonts.size.title,
  },
  houseStyle: {
    width: 37.2,
    height: 30,
  },
  questionsStyile: {
    width: 24.65,
    height: 30,
  },
  graphStyles: {
    width: 44.37,
    height: 30,
  },
  personStyles: {
    width: 23.51,
    height: 30,
  },
  bar: {
    backgroundColor: theme.colors.background,
    height: 70,
    justifyContent: 'center'
  },
  header: {
    backgroundColor: theme.colors.background,
    height: 70
  },
  headerContent: {
    paddingVertical: theme.spacing(4),
    paddingHorizontal: theme.spacing(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  logo: {
    flexGrow: 1
  }
});

export default styles;
