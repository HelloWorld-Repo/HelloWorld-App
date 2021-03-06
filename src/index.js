import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useApplicationProvider } from './providers/ApplicationProvider';
import AuthRoutes from './routes/AuthRoutes';
import AppRoutes from './routes/AppRoutes';
import api from './services/api';
import { Toast } from './components';

const App = () => {
  const { isSigned, signOut } = useApplicationProvider();
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    api.interceptors.response.use(
      function (response) {
        return response?.data?.data;
      },
      function (error) {
        if (error?.response?.status === 401) {
          setToastVisible(true);
          signOut();
        } else {
          return Promise.reject(error?.response?.data);
        }
      }
    );
  }, []);

  return (
    <NavigationContainer>
      {isSigned ? <AppRoutes /> : <AuthRoutes />}
      <Toast
        visible={toastVisible}
        type="error"
        message="Seu acesso expirou, faça login novamente"
        onDismiss={() => setToastVisible(false)}
      ></Toast>
    </NavigationContainer>
  );
};

export default App;
