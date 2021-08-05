import React from "react";
import { View } from "react-native";
import { Title } from "react-native-paper";
import PropTypes from "prop-types";

import styles from "./index.style";
import theme from "../../styles/theme";

const TitleTextHeader = ({ spacing, color, ...props }) => (
  <View {...props}>
    <Title style={[styles.headerTitle(color), styles.titleToLeft(spacing)]}>
      {"<Hello"}
    </Title>
    <Title style={[styles.headerTitle(color), styles.titleToRight(spacing)]}>
      {"World/>"}
    </Title>
  </View>
);

const TitleTextBig = ({ spacing, color, ...props }) => (
  <View {...props}>
    <Title style={[styles.bigTitle(color), styles.titleToLeft(spacing)]}>
      {"<Hello"}
    </Title>
    <Title style={[styles.bigTitle(color), styles.titleToRight(spacing)]}>
      {"World/>"}
    </Title>
  </View>
);

const TitleTextInverted = ({ spacing, color, ...props }) => (
  <View {...props}>
    <Title style={[styles.invertedTitle(color), styles.titleToLeft(spacing)]}>
      {"<Hello"}
    </Title>
    <Title style={[styles.invertedTitle(color), styles.titleToRight(spacing)]}>
      {"World/>"}
    </Title>
  </View>
);

const TitleText = ({ type = "header", spacing = 3, color, ...props }) => {
  const titleTextTypes = {
    header: <TitleTextHeader spacing={spacing} color={color} {...props}/>,
    inverted: <TitleTextInverted spacing={spacing} color={color} {...props}/>,
    big: <TitleTextBig spacing={spacing} color={color} {...props}/>,
  };

  return titleTextTypes[type];
};

TitleText.propTypes = {
  type: PropTypes.oneOf(["header", "big", "inverted"]),
  spacing: PropTypes.number,
  color: PropTypes.string
};
export default TitleText;
