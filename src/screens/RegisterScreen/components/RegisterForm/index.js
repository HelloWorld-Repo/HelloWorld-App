import React, { useState } from "react";
import { TextInput, HelperText, Switch, useTheme } from "react-native-paper";
import PropTypes from "prop-types";
import DateTimePicker from '@react-native-community/datetimepicker';
import _ from "underscore";

import { Button } from "../../../../components";
import styles from "./index.style";

const RegisterForm = ({
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  errors,
  touched,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const theme = useTheme();

  return <>
    <TextInput
      label="Nome Completo"
      onChangeText={handleChange("name")}
      onBlur={handleBlur("name")}
      value={values.name}
      type="flat"
      style={styles.input}
    />
    <HelperText type="error" visible={!!errors?.name && !!touched?.name}>
      {errors.name}
    </HelperText>

    <TextInput
      label="E-mail"
      onChangeText={handleChange("email")}
      onBlur={handleBlur("email")}
      value={values.email}
      type="flat"
      style={styles.input}
    />
    <HelperText type="error" visible={!!errors?.email && !!touched?.email}>
      {errors.email}
    </HelperText>

    <Button onClick={() => setShowDatePicker(true)} text="Show date picker!" />
    {showDatePicker && (
      <DateTimePicker
        value={values.birthday}
        mode="date"
        display="calendar"
        onChange={handleChange("birthday")}
        maximumDate={new Date()}
      />
    )}
    <HelperText type="error" visible={!!errors?.birthday && !!touched?.birthday}>
      {errors.birthday}
    </HelperText>

    <Switch 
      value={values.isFirstContact}
      onValueChange={handleChange("isFirstContact")}
      color={theme.colors.accent}
    />

    <Switch 
      value={values.isStudant}
      onValueChange={handleChange("isStudant")}
      color={theme.colors.accent}
    />

    <TextInput
      label="Senha"
      onChangeText={handleChange("password")}
      onBlur={handleBlur("password")}
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
      onChangeText={handleChange("confirmPassword")}
      onBlur={handleBlur("confirmPassword")}
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
