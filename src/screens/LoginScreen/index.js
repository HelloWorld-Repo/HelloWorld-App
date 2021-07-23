import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { Paragraph, withTheme } from "react-native-paper";
import * as Yup from "yup";

import { SafeAreaAndroid, TitleText } from "../../components";
import styles from "./index.style";
import LoginForm from "./components/LoginForm";

const LoginScreen = () => {
  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Escolha uma senha de, no mínimo 8 caracteres")
      .max(20, "Escolha uma senha de, no máximo 20 caracteres")
      .required("Preencha a senha"),
    email: Yup.string().email("E-mail inválido").required("Preencha o e-mail"),
  });

  return (
    <SafeAreaAndroid styleSafeArea={styles.safeArea}>
      <View style={styles.container}>
        {/* <TitleText type="big" spacing={10}/> */}
        <View style={{ width: "100%" }}>
          <Paragraph style={styles.text}>
            Olá novamente! digite seu login para continuar
          </Paragraph>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={LoginSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <LoginForm
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                values={values}
                errors={errors}
                touched={touched}
              />
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaAndroid>
  );
};

export default LoginScreen;
