import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  spacing: (mult) => 8 * mult,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00DFC0',
    secondary: '#202020',
    error: '#ff7575',
    background: '#FFFFFF',
    buttonShadow: '#00C6A9',
    disabled: '#B9B9B9',
    disabledShadow: '#A3A3A3',
    textPrimary: '#FFFFFF',
  },
  fonts: {
    titleOutline: 'londrinaOutline-regular',
    titleShadow: 'londrinaShadow-Regular',
    titleSketch: 'londrinaSketch-Regular',
    titleSolidBlack: 'londrinaSolid-Black',
    titleSolidLight: 'londrinaSolid-Light',
    titleSolidRegular: 'londrinaSolid-Regular',
    titleSolidThin: 'londrinaSolid-Thin',
    sampleText: 'textMeOne',
    size: {
      title: 35,
      subtitle: 25,
      text: 20,
      bigLogo: 45,
      small: 15
    }
  },
};

export default theme;