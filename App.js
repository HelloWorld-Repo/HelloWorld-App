import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import theme from './src/styles/theme';

export default function Main() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
}