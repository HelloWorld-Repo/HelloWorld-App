import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper';


import theme from './src/styles/theme';

import App from './src/App';

const Main = () => {
  
  let [dataLoaded] = useFonts({
    'londrinaOutline-regular': require('./assets/fonts/LondrinaOutline-Regular.ttf'),
    'londrinaShadow-Regular': require('./assets/fonts/LondrinaShadow-Regular.ttf'),
    'londrinaSketch-Regular': require('./assets/fonts/LondrinaSketch-Regular.ttf'),
    'londrinaSolid-Black': require('./assets/fonts/LondrinaSolid-Black.ttf'),
    'londrinaSolid-Light': require('./assets/fonts/LondrinaSolid-Light.ttf'),
    'londrinaSolid-Regular': require('./assets/fonts/LondrinaSolid-Regular.ttf'),
    'londrinaSolid-Thin': require('./assets/fonts/LondrinaSolid-Thin.ttf'),
    'textMeOne': require('./assets/fonts/TextMeOne-Regular.ttf'),
  });
  
  if(!dataLoaded){
    return <AppLoading/>;
  }

  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

export default Main;