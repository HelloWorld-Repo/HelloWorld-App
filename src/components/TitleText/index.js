import React from "react";
import PropTypes from "prop-types";
import { Title } from "react-native-paper";

import styles from "./index.style";
import { View } from "react-native";

const TitleTextHeader = ({ spacing }) => (
  <View>
    <Title style={[styles.headerTitle, styles.titleToLeft(spacing)]}>
      {"<Hello"}
    </Title>
    <Title style={[styles.headerTitle, styles.titleToRight(spacing)]}>
      {"World/>"}
    </Title>
  </View>
);

const TitleTextBig = ({ spacing }) => (
  <View>
    <Title style={[styles.bigTitle, styles.titleToLeft(spacing)]}>
      {"<Hello"}
    </Title>
    <Title style={[styles.bigTitle, styles.titleToRight(spacing)]}>
      {"World/>"}
    </Title>
  </View>
);

const TitleTextInverted = ({ spacing }) => (
  <View>
    <Title style={[styles.invertedTitle, styles.titleToLeft(spacing)]}>
      {"<Hello"}
    </Title>
    <Title style={[styles.invertedTitle, styles.titleToRight(spacing)]}>
      {"World/>"}
    </Title>
  </View>
);

const TitleText = ({ type = "header", spacing = 3 }) => {
  const titleTextTypes = {
    header: <TitleTextHeader spacing={spacing} />,
    inverted: <TitleTextInverted spacing={spacing} />,
    big: <TitleTextBig spacing={spacing} />,
  };

  return titleTextTypes[type];
};

TitleText.propTypes = {
  type: PropTypes.oneOf(["header", "big", "inverted"]),
  spacing: PropTypes.number,
};
export default TitleText;
