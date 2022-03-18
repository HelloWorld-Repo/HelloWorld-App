import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Portal, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

import styles from './index.style';
import theme from '../../../../styles/theme';
import FeedbackService from '../../../../services/FeedbackService';
import { Button, CircularButton, Modal, Toast } from '../../../../components';
import { useApplicationProvider } from '../../../../providers/ApplicationProvider';

const positiveImage = require('../../../../../assets/images/heart.png');
const negativeImage = require('../../../../../assets/images/heart2.png');

const FeedbackModal = ({ visible = false, onDismiss = () => {} }) => {
  const [selected, setSelected] = useState(null);
  const [successToast, setSuccessToast] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const { setUserFeedback } = useApplicationProvider();

  const options = {
    positive: 1,
    negative: 2,
  };

  const handleClick = async () => {
    FeedbackService.sendFeedback(selected === options.positive, text || ' ')
      .then(() => {
        setUserFeedback();
        setSuccessToast(true);
      })
      .catch((error) => {
        setError(error?.message);
      })
      .finally(() => {
        onDismiss();
      });
  };

  const negativeIcon = () =>
    selected === options.negative ? (
      <Image style={styles.selectedIcons} source={negativeImage} />
    ) : (
      <CircularButton
        width={80}
        containerStyles={styles.circularButton}
        onPress={() => setSelected(options.negative)}
      >
        <Image style={styles.icons} source={negativeImage} />
      </CircularButton>
    );

  const positiveIcon = () =>
    selected === options.positive ? (
      <Image style={styles.selectedIcons} source={positiveImage} />
    ) : (
      <CircularButton
        width={80}
        containerStyles={styles.circularButton}
        onPress={() => setSelected(options.positive)}
      >
        <Image style={styles.icons} source={positiveImage} />
      </CircularButton>
    );

  return (
    <>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        style={styles.container}
        contentStyle={styles.contentModal}
        dismissable={false}
      >
        <Text style={styles.title}>Feedback</Text>
        <Text style={styles.question}>O que está achando até agora?</Text>
        <View style={styles.optionsContainer}>
          <View style={styles.optionsContent}>
            {positiveIcon()}
            <Text>Estou amando!</Text>
          </View>
          <View style={styles.optionsContent}>
            {negativeIcon()}
            <Text>Não curti muito</Text>
          </View>
        </View>
        <Text style={styles.question}>
          Nos conte um pouco mais sobre sua experiência
        </Text>
        <TextInput
          multiline
          style={styles.textArea}
          label="Comentário (opcional)"
          selectionColor={theme.colors.primary}
          mode="outlined"
          theme={{ colors: { primary: theme.colors.primary } }}
          value={text}
          onChangeText={setText}
        ></TextInput>
        <Button
          containerStyles={styles.button}
          disabled={selected === null}
          onPress={handleClick}
          text="Enviar"
          full
        />
      </Modal>
      <Portal>
        <Toast
          message={error}
          visible={!!error}
          onDismiss={() => setError(null)}
          toastStyle={styles.errorToast}
        />
      </Portal>
      <Portal>
        <Toast
          message="Obrigado pela sua colaboração!"
          visible={!!successToast}
          onDismiss={() => setSuccessToast(null)}
          toastStyle={styles.successToast}
        />
      </Portal>
    </>
  );
};

FeedbackModal.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default FeedbackModal;
