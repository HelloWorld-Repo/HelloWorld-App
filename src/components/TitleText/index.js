import React from "react";
import { Title } from "react-native-paper";
import PropTypes from "prop-types";

import styles from "./index.style";

const TitleTextHeader = () => (
  <>
    <Title style={[styles.headerTitle, styles.titleToLeft]}>{"<Hello"}</Title>
    <Title style={[styles.headerTitle, , styles.titleToRight]}>{"World/>"}</Title>
  </>
);

const TitleTextBig = () => (
  <>
    <Title style={[styles.bigTitle, styles.titleToLeft]}>{"<Hello"}</Title>
    <Title style={[styles.bigTitle, , styles.titleToRight]}>{"World/>"}</Title>
  </>
);

const TitleTextInverted = () => (
  <>
    <Title style={[styles.invertedTitle, styles.titleToLeft]}>{"<Hello"}</Title>
    <Title style={[styles.invertedTitle, , styles.titleToRight]}>{"World/>"}</Title>
  </>
);

const TitleText = ({ type }) => {

  const titleTextTypes = {
    header: <TitleTextHeader/>,
    inverted: <TitleTextInverted/>,
    big: <TitleTextBig/>,
  };

  return titleTextTypes[type] || <TitleTextHeader/>;
};

TitleText.propTypes = {
  type: PropTypes.oneOf(["header", "big", "inverted"]),
};

export default TitleText;
