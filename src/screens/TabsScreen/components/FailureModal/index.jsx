import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Title, Text } from 'react-native-paper';

import { Modal, Button } from '../../../../components';
const failureImage = require('../../../../../assets/images/failure.png');

import styles from './style';

const FailureModal = ({ visible, onDismiss }) => {
  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      <Title style={styles.modalTitle}>Tente novamente</Title>
      <Image
        source={failureImage}
        style={styles.failureImage}
      />
      <Text
        style={styles.modalText}
      >
        Não foi dessa vez que você passou nesse capítulo. Mas não desanime e continue estudando!
      </Text>
      <Button text="Tá bom" full onPress={onDismiss} />
    </Modal>
  );
};

export default FailureModal;
