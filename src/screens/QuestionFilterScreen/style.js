import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: theme.fonts.size.titlesScreen,
    fontFamily: theme.fonts.titleShadow,
    color: theme.colors.accent,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  placeholder: {
    fontSize: theme.fonts.size.text,
    fontFamily: theme.fonts.titleShadow,
    color: theme.colors.accent
  },
  select: {
    paddingHorizontal: theme.spacing(2),
    borderRadius: 5,
    borderColor: theme.colors.disabledShadow,
    borderWidth: 1,
    marginBottom: theme.spacing(3),
    flex: 1,
    width: '100%',
    height: 60,
    color: theme.colors.secondary,
    textTransform: 'uppercase',
  },
  container: {
    paddingHorizontal: theme.spacing(3),
    paddingVertical: theme.spacing(1),
    flex: 1,
  },
  icon: {
    fontSize: 20,
    color: theme.colors.accent,
    top: 20,
    right: 20,
  },
  button: {
    marginTop: theme.spacing(5),
  },
});

export default styles;
