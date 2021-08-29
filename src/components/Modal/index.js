import * as React from 'react';
import { Modal, Portal } from 'react-native-paper';
import PropTypes from 'prop-types';

import styles from './index.style';
import { ScrollView } from 'react-native';

const NewModal = ({
  visible = false,
  onDismiss = () => {},
  style = {},
  contentStyle = {},
  children,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={[styles.container, contentStyle]}
        style={styles.modal}
      >
        <ScrollView>
          {children}
        </ScrollView>
      </Modal>
    </Portal>
  );
};

NewModal.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  contentStyle: PropTypes.object,
};

export default NewModal;
