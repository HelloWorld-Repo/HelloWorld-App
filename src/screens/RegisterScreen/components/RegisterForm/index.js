import React, { useState } from 'react';
import { TextInput, HelperText, Switch, useTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import _ from 'underscore';
import moment from 'moment';

import { Button, DateField, SwitchGroup } from '../../../../components';
import { formatCustomDate } from '../../../../utils';
import styles from './index.style';

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
    setShowDatePicker(false);
    setFieldValue('birthday', moment(date).toDate());
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
        label="Data de Nascimento"
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

      <SwitchGroup
        value={values.isStudent}
        onValueChange={(value) => setFieldValue('isStudent', value)}
        color={theme.colors.accent}
        label="Eu já estudo programação em um curso ou faculdade"
      />
      <SwitchGroup
        value={values.isFirstContact}
        onValueChange={(value) => setFieldValue('isFirstContact', value)}
        color={theme.colors.accent}
        label="É o meu primeiro contato com programação"
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
        onPress={handleSubmit}
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
