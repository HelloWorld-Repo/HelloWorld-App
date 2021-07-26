import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Paragraph, Switch } from 'react-native-paper';
import theme from '../../styles/theme';
import styles from './index.style';

const SwitchGroup = ({
  label,
  onValueChange,
  value,
  color = theme.colors.accent,
}) => {
  return (
    <View style={styles.container}>
      <Paragraph style={styles.label}>{label}</Paragraph>
      <Switch
        value={value}
        onValueChange={onValueChange}
        color={color}
      />
    </View>
  );
};

SwitchGroup.propTypes = {
  label: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.bool,
  color: PropTypes.string,
};

export default SwitchGroup;
