import * as React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import PropTypes from 'prop-types';

import styles from './index.style';

const NewModal = ({ visible = false, onDismiss = () => {}, style = {}, contentStyle = {}, children }) => {

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onDismiss}
          contentContainerStyle={[styles.container, contentStyle]}
          style={styles.modal}
        >
          {children}
        </Modal>
      </Portal>
    </Provider>
  );
};

NewModal.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  contentStyle: PropTypes.object,
}

export default NewModal;
