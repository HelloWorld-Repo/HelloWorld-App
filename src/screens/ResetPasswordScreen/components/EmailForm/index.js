import React from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '../../../../components';
import styles from './index.style';

const EmailForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('E-mail inválido')
        .required('Preencha o seu e-mail'),
    }),
    onSubmit,
  });

  return (
    <>
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

      <Button
        full
        containerStyles={styles.containerButton}
        text="Enviar"
        onPress={formik?.handleSubmit}
        disabled={!formik?.errors && formik.dirty}
      />
    </>
  );
};

EmailForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EmailForm;
