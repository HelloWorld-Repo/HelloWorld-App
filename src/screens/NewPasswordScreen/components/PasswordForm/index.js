import React from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '../../../../components';
import styles from './index.style';

const PasswordForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { password: '', confirmPassword: '' },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(8, 'Sua senha deve ter 8 ou mais caracteres')
        .max(20, 'Sua senha tem, no máximo, 20 caracteres')
        .required('Preencha a senha'),
      confirmPassword: Yup.string()
        .required('Confirme a sua senha')
        .oneOf([Yup.ref('password'), null], 'A senhas estão diferentes'),
    }),
    onSubmit,
  });

  return (
    <>
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

      <Button
        full
        containerStyles={styles.containerButton}
        text="Enviar"
        onPress={formik.handleSubmit}
        disabled={!formik?.isValid && !formik.dirty}
      />
    </>
  );
};

PasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PasswordForm;
