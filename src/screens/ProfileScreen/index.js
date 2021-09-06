import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import * as Yup from 'yup';
import _ from 'underscore';

import styles from './style';
import ProfileForm from './components/ProfileForm';
import { useApplicationProvider } from '../../providers/ApplicationProvider';
import { SafeAreaAndroid, Button, Toast } from '../../components';
import { stringToDate } from '../../utils';
import UserService from '../../services/UserService';

const ProfileScreen = ({ navigation }) => {
  const theme = useTheme();
  const { signOut, user, updateUser } = useApplicationProvider();

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    type: null,
    message: null,
  });

  const initialValues = {
    name: user.name,
    email: user.email,
    birthday: stringToDate(user.birthday),
  };

  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Você esqueceu de preencher seu nome'),
    birthday: Yup.date().required(
      'Você esqueceu de preencher sua data de nascimento'
    ),
    email: Yup.string()
      .email('E-mail inválido')
      .required('Você esqueceu de preencher o e-mail'),
  });

  const onSubmitUpdate = async (data) => {
    try {
      setLoading(true);
      const { user } = await UserService.updateUser(data);
      setLoading(false);

      await updateUser(user);

      setToast({
        message: 'Usuário atualizado com sucesso!',
        visible: true,
        type: 'success',
      });
    } catch (error) {
      setToast({
        message: error?.message || 'Ops, aconteceu um erro, tente novamente',
        visible: true,
        type: 'error',
      });
      setLoading(false);
    }
  };

  const FormikForm = ({
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  }) => (
    <>
      <ProfileForm
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
      />
      <View style={{ marginTop: 50 }}>
        <Button
          onPress={handleSubmit}
          text="Salvar"
          full
          disabled={_.size(errors) > 0 || _.size(touched) == 0 || loading}
        />
      </View>
    </>
  );

  return (
    <SafeAreaAndroid>
      {loading && (
        <ActivityIndicator animating={true} color={theme.colors.primary} />
      )}
      <ScrollView>
        <Text style={styles.title}>Meu Perfil</Text>
        <View style={styles.container}>
          <Formik
            initialValues={initialValues}
            validationSchema={ProfileSchema}
            onSubmit={onSubmitUpdate}
          >
            {FormikForm}
          </Formik>
        </View>
        <View style={styles.container}>
          <Button
            onPress={signOut}
            text="Sair"
            full
            backgroundColor={theme.colors.error}
          />
        </View>
      </ScrollView>
      <Toast
        message={toast.message}
        visible={!!toast.visible}
        onDismiss={() => setToast({ visible: false })}
        type={toast.type}
      />
    </SafeAreaAndroid>
  );
};

export default ProfileScreen;
