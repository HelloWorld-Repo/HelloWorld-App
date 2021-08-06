import React from 'react'
import { Text } from 'react-native-paper';

import styles from './index.style';

const ModuleItem = ({module}) => {
  return (
    <Text style={styles.text}>{module.title}</Text>
  );
}

export default ModuleItem
