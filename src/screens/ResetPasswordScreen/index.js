import React, { useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Paragraph, useTheme } from 'react-native-paper';

import { SafeAreaAndroid, Toast } from '../../components';
import styles from './index.style';
import EmailForm from './components/EmailForm';
import UserService from '../../services/UserService';

const ResetPasswordScreen = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const onSubmitLogin = async ({ email }) => {
    try {
      setLoading(true);

      const response = await UserService.resetPassword(email);
      setMessage({
        message:
          'Se você está registrado, um e-mail de recuperação de senha foi enviado para você',
        type: 'success',
      });
    } catch (error) {
      setMessage({
        message: error?.message || 'Ops, aconteceu um erro, tente novamente',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast
        message={message?.message}
        visible={!!message?.message}
        onDismiss={() => setMessage(null)}
        type={message?.type}
      />
      <SafeAreaAndroid styleSafeArea={styles.safeArea}>
        {loading && (
          <ActivityIndicator
            animating={true}
            color={theme.colors.primary}
            style={styles.loading}
          />
        )}

        <View style={{ width: '100%' }}>
          <Paragraph style={styles.text}>
            Por favor, nos informe o seu e-mail
          </Paragraph>
          <EmailForm onSubmit={onSubmitLogin} />
        </View>
      </SafeAreaAndroid>
    </>
  );
};

export default ResetPasswordScreen;
