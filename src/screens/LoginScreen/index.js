import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

import { SafeAreaAndroid } from "../../components";

const LoginScreen = (props) => {
  return (
    <SafeAreaAndroid>
      <Text>LoginScreen</Text>
    </SafeAreaAndroid>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
