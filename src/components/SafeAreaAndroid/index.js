import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Platform } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    height: "100%",
  },
});

const SafeAreaAndroid = ({ styleSafeArea, children, ...props }) => {
  return (
    <SafeAreaView
      style={{ ...styles.AndroidSafeArea, ...styleSafeArea }}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaAndroid;
