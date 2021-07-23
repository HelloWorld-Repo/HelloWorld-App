import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  spacing: (mult) => 8 * mult,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00DFC0',
    secondary: '#202020',
    error: '#ff5b5b',
    background: '#ffffff',
    textPrimary: '#ffffff',
    buttonShadow: '#00c6a9'
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
      title: 40,
      subtitle: 30,
      text: 20,
      headerTitle: 25,
      bigLogo: 70
    }
  },
};

export default theme;