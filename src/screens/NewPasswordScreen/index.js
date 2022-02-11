import React, { useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Paragraph, useTheme } from 'react-native-paper';

import { SafeAreaAndroid, Toast } from '../../components';
import styles from './index.style';
import PasswordForm from './components/PasswordForm';
import UserService from '../../services/UserService';
import { useApplicationProvider } from '../../providers/ApplicationProvider';

const NewPasswordScreen = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { resetPasswordSuccess } = useApplicationProvider();

  const theme = useTheme();

  const onSubmitLogin = async ({ password }) => {
    try {
      setLoading(true);
      await UserService.newPassword(password);
      setMessage({
        message: 'Senha alterada com sucesso',
        type: 'success',
      });
      await resetPasswordSuccess();
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
            Antes de continuar, cadastre a sua nova senha de acesso:
          </Paragraph>
          <PasswordForm onSubmit={onSubmitLogin} />
        </View>
      </SafeAreaAndroid>
    </>
  );
};

export default NewPasswordScreen;
