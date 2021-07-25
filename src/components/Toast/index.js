import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Snackbar } from 'react-native-paper';

import styles from "./index.style";

const Toast = ({ 
  visible, 
  message='', 
  onDismiss = () => {}, 
  action = null
}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      action={ !!action ? {
        label: action.label,
        onPress: action.onPress,
      } : {}}
      style={styles.toast}
    >
      <Paragraph style={styles.toastText}>{message}</Paragraph>
    </Snackbar>
  );
};

Toast.propTypes = {
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func,
  message: PropTypes.string,
  action: PropTypes.objectOf({
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }),
};

export default Toast;
