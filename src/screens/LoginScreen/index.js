import React, { useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { ActivityIndicator, Paragraph, useTheme } from 'react-native-paper';
import * as Yup from 'yup';

import { SafeAreaAndroid, Toast } from '../../components';
import styles from './index.style';
import LoginForm from './components/LoginForm';
import AuthService from '../../services/AuthService';
import { useApplicationProvider } from '../../providers/ApplicationProvider';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Escolha uma senha de, no mínimo 8 caracteres')
    .max(20, 'Escolha uma senha de, no máximo 20 caracteres')
    .required('Preencha a senha'),
  email: Yup.string().email('E-mail inválido').required('Preencha o e-mail'),
});

const LoginScreen = ({ navigation }) => {
  const { context, setContext } = useApplicationProvider();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const onSubmitLogin = async (credentials) => {
    try {
      await setLoading(true);
      const response = await AuthService.login(credentials);

      const { user, token } = response;

      await setContext({
        ...context,
        user,
        token,
      });
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Tabs' }],
      });

      // TODO: Guardar token em um estado
    } catch (error) {
      setError(error?.message || 'Ops, aconteceu um erro, tente novamente');
      setLoading(false);
    }
  };

  return (
    <SafeAreaAndroid styleSafeArea={styles.safeArea}>
      {loading && (
        <ActivityIndicator animating={true} color={theme.colors.primary} />
      )}
      <View style={styles.container}>
        {/* <TitleText type="big" spacing={10}/> */}
        <View style={{ width: '100%' }}>
          <Paragraph style={styles.text}>
            Olá novamente! digite seu login para continuar
          </Paragraph>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => onSubmitLogin(values)}
            validationSchema={LoginSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <LoginForm
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                values={values}
                errors={errors}
                touched={touched}
              />
            )}
          </Formik>
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

export default LoginScreen;
