import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.style';
import { Button, CircularButton, Modal } from '../../../../components';
import { Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import theme from '../../../../styles/theme';

const positiveImage = require('../../../../../assets/images/heart.png');
const negativeImage = require('../../../../../assets/images/heart2.png');

const FeedbackModal = ({ visible = false, onDismiss = () => {} }) => {
  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      style={styles.container}
      contentStyle={styles.contentModal}
    >
      <Text style={styles.title}>Feedback</Text>
      <Text style={styles.question}>O que está achando até agora?</Text>
      <View style={styles.optionsContainer}>
        <View style={styles.optionsContent}>
          <CircularButton width={80} containerStyles={styles.circularButton}>
            <Image style={styles.icons} source={positiveImage} />
          </CircularButton>
          <Text>Estou amando!</Text>
        </View>
        <View style={styles.optionsContent}>
          <CircularButton width={80} containerStyles={styles.circularButton}>
            <Image style={styles.icons} source={negativeImage} />
          </CircularButton>
          <Text>Não curti muito</Text>
        </View>
      </View>
      <Text style={styles.question}>
        Nos conte um pouco mais sobre sua experiência
      </Text>
      <TextInput
        multiline
        style={styles.textArea}
        label="Comentário"
        selectionColor={theme.colors.primary}
        mode="outlined"
        theme={{ colors: { primary: theme.colors.primary } }}
      ></TextInput>
      <Button
        onPress={() => {}}
        text="Enviar"
        full
        containerStyles={styles.button}
      />
    </Modal>
  );
};

FeedbackModal.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default FeedbackModal;
