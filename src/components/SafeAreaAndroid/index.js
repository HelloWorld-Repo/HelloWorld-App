import React from "react";
import { SafeAreaView,ScrollView,StatusBar } from "react-native";
import { StyleSheet, Platform } from "react-native";
import { useHeaderHeight } from '@react-navigation/stack';
import theme from "../../styles/theme";

const STATUS_BAR_HEIGHT = StatusBar.statusBarHeight || 24;

const styles = StyleSheet.create({
  androidSafeArea: (headerHeight) => ({
    // marginTop: Platform.OS === "android" ? (STATUS_BAR_HEIGHT + headerHeight) : headerHeight,
    height: "100%",
  }),
});

const SafeAreaAndroid = ({ styleSafeArea, children, ...props }) => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView
      style={{ ...styles.androidSafeArea(headerHeight), ...styleSafeArea }}
      {...props}
    >
      <ScrollView>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SafeAreaAndroid;
