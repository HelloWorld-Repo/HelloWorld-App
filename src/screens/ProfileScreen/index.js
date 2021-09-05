import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import { useTheme } from 'react-native-paper';
import * as Yup from 'yup';
import _ from 'underscore';

import styles from './style';
import ProfileForm from './components/ProfileForm';
import { useApplicationProvider } from '../../providers/ApplicationProvider';
import { SafeAreaAndroid, Button } from '../../components';

const ProfileScreen = ({ navigation }) => {
  const theme = useTheme();

  const { signOut, user } = useApplicationProvider();

  const initialValues = {
    name: user.name,
    email: user.email,
    birthday: user.birthday,
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

  return (
    <SafeAreaAndroid>
      <ScrollView>
        <Text style={styles.title}>Meu Perfil</Text>
        <View style={styles.container}>
          <Formik
            initialValues={initialValues}
            validationSchema={ProfileSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <>
                <ProfileForm
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  handleSubmit={handleSubmit}
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />
                <View style={{marginTop: 50 }}>
                  <Button
                    onPress={signOut}
                    text="Salvar"
                    full
                    disabled={_.size(errors) > 0 || _.size(touched) == 0}
                  />
                </View>
              </>
            )}
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
    </SafeAreaAndroid>
  );
};

export default ProfileScreen;
