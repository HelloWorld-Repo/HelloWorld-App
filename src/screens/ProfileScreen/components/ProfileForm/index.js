import React, { useState } from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { DateField } from '../../../../components';
import styles from './style';

const ProfileForm = ({
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const formatCustomDate = (data) => {
    const date = converterStringDate(data);
    return `
    ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }/${date.getFullYear()}
  `;
  };

  const converterStringDate = (date) => {
    return typeof date === 'object'
      ? date
      : new Date(new Date(date).getTime() + 1000 * 3600 * 24);
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeHandler = (date) => {
    setShowDatePicker(false);
    setFieldValue('birthday', moment(date).toDate());
  };
  return (
    <>
      <TextInput
        label="NOME"
        mode="outlined"
        value={values.name}
        style={styles.input}
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
      />
      <HelperText type="error" visible={!!errors?.name && !!touched?.name}>
        {errors.name}
      </HelperText>
      <TextInput
        label="E-MAIL"
        value={values.email}
        mode="outlined"
        style={styles.input}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
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
      <HelperText type="error" visible={!!errors?.birthday && !!touched?.birthday}>
        {errors.birthday}
      </HelperText>
    </>
  );
};

export default ProfileForm;
