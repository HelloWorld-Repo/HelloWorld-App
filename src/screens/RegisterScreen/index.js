import React, { useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Paragraph, useTheme } from 'react-native-paper';

import { SafeAreaAndroid, Toast } from '../../components';
import styles from './index.style';
import RegisterForm from './components/RegisterForm';
import UserService from '../../services/UserService';
import { useApplicationProvider } from '../../providers/ApplicationProvider';

const RegisterScreen = ({ navigation }) => {
  const { signIn } = useApplicationProvider();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const onSubmitRegister = async (user) => {
    try {
      setLoading(true);
      await UserService.registerUser(user);

      await signIn(user.email, user.password);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Onboarding' }],
      });
    } catch (error) {
      setError(error?.message || 'Ops, aconteceu um erro, tente novamente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaAndroid styleSafeArea={styles.safeArea}>
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          {loading && (
            <ActivityIndicator animating={true} color={theme.colors.primary} />
          )}
          <Paragraph style={styles.text}>
            Que bom que decidiu se juntar a nós! Precisamos de algumas
            informações para continuar
          </Paragraph>
          <RegisterForm onSubmit={onSubmitRegister} />
        </View>
      </View>
      <Toast
        message={error}
        visible={!!error}
        onDismiss={() => setError(null)}
      />
    </SafeAreaAndroid>
  );
};

export default RegisterScreen;
