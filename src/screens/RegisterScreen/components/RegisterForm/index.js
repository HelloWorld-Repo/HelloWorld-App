import React, { useState } from 'react';
import { TextInput, HelperText, Switch, useTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, DateField, SwitchGroup } from '../../../../components';
import { formatCustomDate } from '../../../../utils';
import styles from './index.style';

const RegisterForm = ({ onSubmit }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: '',
      birthday: new Date(),
      email: '',
      researchParticipant: true,
      isFirstContact: false,
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Você esqueceu de preencher seu nome'),
      birthday: Yup.date().required(
        'Você esqueceu de preencher sua data de nascimento'
      ),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Você esqueceu de preencher o e-mail'),
      isFirstContact: Yup.bool().required(),
      researchParticipant: Yup.bool().required(),
      password: Yup.string()
        .min(8, 'Escolha uma senha de no mínimo 8 caracteres')
        .max(20, 'Escolha uma senha de no máximo 20 caracteres')
        .required('Você esqueceu de preencher a senha'),
      confirmPassword: Yup.string()
        .required('Você esqueceu de preencher a confirmação da senha')
        .oneOf([Yup.ref('password'), null], 'A senhas estão diferentes'),
    }),
    onSubmit: onSubmit,
  });

  const onChangeHandler = (date) => {
    setShowDatePicker(false);
    formik.setFieldValue('birthday', moment(date).toDate());
  };

  return (
    <>
      <TextInput
        label="Nome Completo"
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
        value={formik.values.name}
        type="flat"
        style={styles.input}
      />
      <HelperText
        type="error"
        visible={!!formik.errors?.name && !!formik.touched?.name}
      >
        {formik.errors.name}
      </HelperText>

      <TextInput
        label="E-mail"
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        value={formik.values.email}
        type="flat"
        style={styles.input}
      />
      <HelperText
        type="error"
        visible={!!formik.errors?.email && !!formik.touched?.email}
      >
        {formik.errors.email}
      </HelperText>

      <DateField
        value={formatCustomDate(formik.values.birthday)}
        onPress={() => setShowDatePicker(true)}
        label="Data de Nascimento"
      ></DateField>
      {showDatePicker && (
        <DateTimePicker
          value={formik.values.birthday}
          mode="date"
          maximumDate={new Date()}
          onChange={(event, date) => onChangeHandler(date)}
        />
      )}

      <HelperText
        type="error"
        visible={!!formik.errors?.birthday && !!formik.touched?.birthday}
      >
        {formik.errors.birthday}
      </HelperText>

      <TextInput
        label="Senha"
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        value={formik.values.password}
        type="flat"
        secureTextEntry
        style={styles.input}
      />
      <HelperText
        type="error"
        visible={!!formik.errors?.password && !!formik.touched?.password}
      >
        {formik.errors.password}
      </HelperText>

      <TextInput
        label="Confirmação de Senha"
        onChangeText={formik.handleChange('confirmPassword')}
        onBlur={formik.handleBlur('confirmPassword')}
        value={formik.values.confirmPassword}
        type="flat"
        secureTextEntry
        style={styles.input}
      />
      <HelperText
        type="error"
        visible={
          !!formik.errors?.confirmPassword && !!formik.touched?.confirmPassword
        }
      >
        {formik.errors.confirmPassword}
      </HelperText>

      <SwitchGroup
        value={formik.values.isFirstContact}
        onValueChange={(value) => formik.setFieldValue('isFirstContact', value)}
        color={theme.colors.accent}
        label="É o meu primeiro contato com programação"
      />

      <SwitchGroup
        value={formik.values.researchParticipant}
        onValueChange={(value) =>
          formik.setFieldValue('researchParticipant', value)
        }
        color={theme.colors.accent}
        label="Desejo ajudar em pesquisas, fornecendo meus dados para serem analisados anonimamente"
      />

      <Button
        containerStyles={styles.containerButton}
        full
        text="Continuar"
        onPress={formik.handleSubmit}
        disabled={!formik.isValid || !formik.dirty}
      />
    </>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
