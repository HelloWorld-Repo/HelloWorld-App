import React, { useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { ActivityIndicator, Paragraph, useTheme } from 'react-native-paper';
import * as Yup from 'yup';

import { SafeAreaAndroid, Toast } from '../../components';
import styles from './index.style';
import RegisterForm from './components/RegisterForm';
import UserService from '../../services/UserService';
import { useApplicationProvider } from '../../providers/ApplicationProvider';

const initialValues = {
  name: '',
  birthday: new Date(),
  email: '',
  isStudent: false,
  isFirstContact: false,
  password: '',
  confirmPassword: ''
}

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Você esqueceu de preencher seu nome'),
  birthday: Yup.date().required(
    'Você esqueceu de preencher sua data de nascimento'
  ),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Você esqueceu de preencher o e-mail'),
  isFirstContact: Yup.bool().required(),
  isStudent: Yup.bool().required(),
  password: Yup.string()
    .min(8, 'Escolha uma senha de, no mínimo 8 caracteres')
    .max(20, 'Escolha uma senha de, no máximo 20 caracteres')
    .required('Você esqueceu de preencher a senha'),
  confirmPassword: Yup.string()
    .required('Você esqueceu de preencher a confirmação da senha')
    .oneOf([Yup.ref('password'), null], 'A senhas etão diferentes')
});

const RegisterScreen = ({ navigation }) => {
  const { context, setContext } = useApplicationProvider();
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const onSubmitRegister = async (userData) => {
    try {
      await setLoading(true);
      const user = await UserService.registerUser(userData);
      await setContext({
        ...context,
        user,
      });
      
      //TODO: Fazer Login do usuário cadastrado
      //TODO: Enviar e-mail de confirmação para o usuário

      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Onboarding' }],
      });
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
            Que bom que decidiu se juntar a nós! Precisamos de algumas informações para continuar
          </Paragraph>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => onSubmitRegister(values)}
            validationSchema={RegisterSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue
            }) => (
              <RegisterForm
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                values={values}
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
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

export default RegisterScreen;
