import React, { useState } from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { DateField } from '../../../../components';
import { formatCustomDate } from '../../../../utils';
import styles from './style';

const ProfileForm = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeHandler = (date) => {
    setShowDatePicker(false);
    setFieldValue('birthday', moment(date).toDate());
    setFieldTouched('birthday', true);
  };
  return (
    <>
      <TextInput
        label="E-MAIL"
        value={values.email}
        mode="outlined"
        style={styles.input}
        disabled
      />
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
      <DateField
        value={formatCustomDate(values.birthday)}
        onPress={() => setShowDatePicker(true)}
        mode="outlined"
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
    </>
  );
};

export default ProfileForm;
