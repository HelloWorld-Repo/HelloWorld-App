import React from 'react';
import { Title } from 'react-native-paper';
import styles from './index.style';

const TitleText = () => (
  <>
    <Title style={[styles.title, styles.titleToLeft]}>{"<Hello"}</Title>
    <Title style={[styles.title, , styles.titleToRight]}>{"World/>"}</Title>
  </>
);


export default TitleText;