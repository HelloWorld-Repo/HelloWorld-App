import React from 'react';
import PropTypes from 'prop-types';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import styles from './index.style';
import { TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import theme from '../../styles/theme';

const DateField = ({ onPress, value }) => (
  <TouchableOpacity onPress={onPress} style={styles.field}>
      <Text style={styles.fieldValue}>{value}</Text>
      <Button
        icon={() => (
          <AwesomeIcon
            name="calendar"
            size={theme.fonts.size.text}
            color={theme.colors.secondary}
          ></AwesomeIcon>
        )}
      />
  </TouchableOpacity>
);

DateField.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default DateField;
