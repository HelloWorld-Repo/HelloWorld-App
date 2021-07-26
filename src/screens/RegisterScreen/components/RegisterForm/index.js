import React, { useState } from 'react';
import { TextInput, HelperText, Switch, useTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import _ from 'underscore';
import moment from 'moment';

import { Button, DateField } from '../../../../components';
import styles from './index.style';

const formatCustomDate = (date) => {
  return `
    ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }/${date.getFullYear()}
  `;
};

const RegisterForm = ({
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const theme = useTheme();

  const onChangeHandler = (date) => {
    console.log('date 1', values.birthday);
    setShowDatePicker(false);
    setFieldValue('birthday', moment(date).toDate());
    console.log('date 2', values.birthday);
  };

  return (
    <>
      <TextInput
        label="Nome Completo"
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        type="flat"
        style={styles.input}
        mode="outlined"
      />
      <HelperText type="error" visible={!!errors?.name && !!touched?.name}>
        {errors.name}
      </HelperText>

      <TextInput
        label="E-mail"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        type="flat"
        style={styles.input}
      />
      <HelperText type="error" visible={!!errors?.email && !!touched?.email}>
        {errors.email}
      </HelperText>

      <DateField
        value={formatCustomDate(values.birthday)}
        onPress={() => setShowDatePicker(true)}
      ></DateField>
      {showDatePicker && (
        <DateTimePicker
          value={values.birthday}
          mode="date"
          display="calendar"
          maximumDate={new Date()}
          onChange={(event, date) => onChangeHandler(date)}
        />
      )}

      <HelperText
        type="error"
        visible={!!errors?.birthday && !!touched?.birthday}
      >
        {errors.birthday}
      </HelperText>

      <Switch
        value={values.isFirstContact}
        onValueChange={handleChange('isFirstContact')}
        color={theme.colors.accent}
      />

      <Switch
        value={values.isStudant}
        onValueChange={handleChange('isStudant')}
        color={theme.colors.accent}
      />

      <TextInput
        label="Senha"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        type="flat"
        secureTextEntry
        style={styles.input}
      />
      <HelperText
        type="error"
        visible={!!errors?.password && !!touched?.password}
      >
        {errors.password}
      </HelperText>

      <TextInput
        label="Confirmação de Senha"
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        value={values.confirmPassword}
        type="flat"
        secureTextEntry
        style={styles.input}
      />
      <HelperText
        type="error"
        visible={!!errors?.confirmPassword && !!touched?.confirmPassword}
      >
        {errors.confirmPassword}
      </HelperText>

      <Button
        containerStyles={styles.containerButton}
        full
        text="Continuar"
        onClick={handleSubmit}
        disabled={_.size(errors) > 0 || _.size(touched) == 0}
      />
    </>
  );
};

RegisterForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default RegisterForm;
