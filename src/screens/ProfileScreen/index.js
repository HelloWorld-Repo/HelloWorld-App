import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import {
  ActivityIndicator,
  useTheme,
  Button as ButtonPaper,
} from 'react-native-paper';
import * as Yup from 'yup';
import _ from 'underscore';

import styles from './style';
import ProfileForm from './components/ProfileForm';
import { useApplicationProvider } from '../../providers/ApplicationProvider';
import { SafeAreaAndroid, Button, Toast, Modal } from '../../components';
import { stringToDate } from '../../utils';
import UserService from '../../services/UserService';

const ProfileScreen = () => {
  const theme = useTheme();
  const { signOut, user, updateUser } = useApplicationProvider();

  const [loading, setLoading] = useState(false);
  const [deleteUserConfirmation, setDeleteUserConfirmation] = useState(false);

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

  const handleRemoveAccount = async () => {
    try {
      setLoading(true);
      await UserService.deleteUser();
      await signOut();
      setDeleteUserConfirmation(false);
      setToast({
        message: 'Usuário removido com sucesso',
        visible: true,
        type: 'success',
      });
    } catch (error) {
      setToast({
        message: error?.message || 'Ops, aconteceu um erro, tente novamente',
        visible: true,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

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
          <ButtonPaper
            onPress={() => setDeleteUserConfirmation(true)}
            type="text"
            color={theme.colors.textSecondary}
          >
            Excluir Conta
          </ButtonPaper>
          <ButtonPaper onPress={signOut} type="text" color={theme.colors.error}>
            Sair
          </ButtonPaper>
        </View>
      </ScrollView>
      <Toast
        message={toast.message}
        visible={!!toast.visible}
        onDismiss={() => setToast({ visible: false })}
        type={toast.type}
      />
      <Modal
        contentStyle={styles.modal}
        visible={deleteUserConfirmation}
        onDismiss={() => setDeleteUserConfirmation(false)}
      >
        <Text style={styles.modalTitle}>Confirmação de Exclusão</Text>
        <Text style={styles.modalText}>
          Você tem certeza que deseja excluir essa conta e todos os dados
          relacionados à ela?
        </Text>
        <Button
          full
          text="Não, cancelar"
          onPress={() => setDeleteUserConfirmation(false)}
        />
        <ButtonPaper onPress={handleRemoveAccount} type="text">
          Sim, tenho certeza
        </ButtonPaper>
      </Modal>
    </SafeAreaAndroid>
  );
};

export default ProfileScreen;
