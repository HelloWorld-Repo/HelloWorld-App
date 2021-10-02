import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { Image } from 'react-native';
import { useTheme, Title, Text } from 'react-native-paper';

import { Modal, Button } from '../../../../components';
const successImage = require('../../../../../assets/images/success.png');

import styles from './style';

const SuccessModal = ({ visible, onDismiss }) => {
  const [audio, setAudio] = useState();
  const theme = useTheme();

  useEffect(() => {
    return audio
      ? () => {
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  useEffect(() => {
    playSound();
  }, []);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../../../assets/sounds/clapping.wav')
    );
    if (visible) {
      setAudio(sound);
      sound.playAsync();
    }
  };

  return (
    <Modal visible={true} onDismiss={onDismiss}>
      <Title style={styles.modalTitle}>Capítulo Completado</Title>
      <Image
        source={successImage}
        style={styles.successImage}
      />
      <Text
        style={styles.modalText}
      >
        Parabéns, você acaba de finalizar mais uma etapa do seu aprendizado!
      </Text>
      <Button text="Obrigad@!" full onPress={onDismiss} />
    </Modal>
  );
};

export default SuccessModal;
