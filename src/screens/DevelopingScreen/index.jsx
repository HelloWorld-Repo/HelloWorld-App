import React from 'react';
import { Image, View } from 'react-native';
import { Text, Title } from 'react-native-paper';

import styles from './style';

const developingImage = require('../../../assets/images/wip.png');

const DevelopingScreen = () => {
  return (
    <View style={styles.container}>
    <Title style={styles.title}>Em Desenvolvimento</Title>
      <View style={styles.imageContainer}>
        <Image source={developingImage} style={styles.image}></Image>
      </View>
      <Text style={styles.text}>Desculpe, isso ainda está em desenvolvimento, mas já já estará pronto!</Text>
    </View>
  );
};

export default DevelopingScreen;
