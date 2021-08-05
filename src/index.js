import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useApplicationProvider } from './providers/ApplicationProvider';
import AuthRoutes from './routes/AuthRoutes';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const { isSigned } = useApplicationProvider();

  return (
    <NavigationContainer>
      {isSigned ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default App;
