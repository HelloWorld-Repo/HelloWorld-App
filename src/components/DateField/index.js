import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './index.style';
import theme from '../../styles/theme';

const DateField = ({ onPress, value, mode = 'flat', label="" }) => (
  <>
  {!!label && <Text>{label}</Text>}
  <TouchableOpacity
    onPress={onPress}
    style={mode === 'outlined' ? [styles.field, styles.fieldBorder] : styles.field}
  >
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
  </>
);

DateField.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['flat', 'outlined']),
  label: PropTypes.string
};

export default DateField;
