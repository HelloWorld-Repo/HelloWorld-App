import React, { useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Paragraph, useTheme } from 'react-native-paper';

import { SafeAreaAndroid, Toast } from '../../components';
import styles from './index.style';
import CompleteRegisterForm from './components/CompleteRegisterForm';
import UserService from '../../services/UserService';
import { useApplicationProvider } from '../../providers/ApplicationProvider';
import { useNavigation } from '@react-navigation/native';

const CompleteRegisterScreen = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const { signIn } = useApplicationProvider();

  const theme = useTheme();

  const onSubmitRegister = async (user) => {
    try {
      setLoading(true);
      await UserService.updateUser({ ...user, resetPassword: false });
      setMessage({
        message: 'Usuário cadastrado com sucesso!',
        type: 'success',
      });
      await signIn(user?.email, user?.password);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Onboarding' }],
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
            Antes de continuar, complete seu cadastro e escolha sua nova senha:
          </Paragraph>
          <CompleteRegisterForm onSubmit={onSubmitRegister} />
        </View>
      </SafeAreaAndroid>
    </>
  );
};

export default CompleteRegisterScreen;
