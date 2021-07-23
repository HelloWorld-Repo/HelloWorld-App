import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

import { Button, SafeAreaAndroid, TitleText } from "../../components";
import { Paragraph, TextInput } from "react-native-paper";

import styles from "./index.style";

const LoginScreen = (props) => {
  return (
    <SafeAreaAndroid styleSafeArea={styles.safeArea}>
      <View style={styles.container}>
        <TitleText type="big"></TitleText>
        <Paragraph style={styles.text}>Olá novamente, digite seu login para continuar</Paragraph>
        <TextInput width={null}></TextInput>
        <TextInput width={null}></TextInput>
        <Button text="Continuar" width="100%"/>
      </View>
    </SafeAreaAndroid>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
