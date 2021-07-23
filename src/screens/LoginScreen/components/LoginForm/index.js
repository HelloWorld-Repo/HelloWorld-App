import React from "react";
import { TextInput, HelperText } from "react-native-paper";
import PropTypes from "prop-types";
import _ from "underscore";

import { Button } from "../../../../components";
import styles from "./index.style";

const LoginForm = ({
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  errors,
  touched,
}) => (
  <>
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

    <Button
      containerStyles={styles.containerButton}
      full
      text="Continuar"
      onClick={handleSubmit}
      disabled={_.size(errors) > 0 || _.size(touched) == 0}
    />
  </>
);

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default LoginForm;
