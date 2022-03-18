import React, { useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import {
  ActivityIndicator,
  Button,
  Paragraph,
  useTheme,
} from 'react-native-paper';
import * as Yup from 'yup';

import { SafeAreaAndroid, Toast } from '../../components';
import styles from './index.style';
import LoginForm from './components/LoginForm';
import { useApplicationProvider } from '../../providers/ApplicationProvider';

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Preencha a senha'),
  email: Yup.string()
    .trim()
    .email('E-mail inválido')
    .required('Preencha o e-mail'),
});

const LoginScreen = ({ navigation }) => {
  const { signIn } = useApplicationProvider();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const onSubmitLogin = async ({ email, password }) => {
    try {
      setLoading(true);
      await signIn(email, password);
    } catch (error) {
      console.error(error);
      setError(error?.message || 'Ops, aconteceu um erro, tente novamente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast
        message={error}
        visible={!!error}
        onDismiss={() => setError(null)}
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
            Olá novamente! digite seu login para continuar
          </Paragraph>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) =>
              onSubmitLogin({ ...values, email: values.email.trim() })
            }
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
                navigation={navigation}
              />
            )}
          </Formik>
        </View>
      </SafeAreaAndroid>
    </>
  );
};

export default LoginScreen;
