import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Button as PaperButton, Text, useTheme } from 'react-native-paper';

import { Button } from '../../../../components';
import styles from './style';

const Option = ({ option, isSelected, onSelect, disabled }) => {
  const theme = useTheme();
  return (
    <View>
      {isSelected ? (
        <PaperButton
          disabled
          uppercase={false}
          style={styles.buttonSelected(option.isRight)}
        >
          <Text style={styles.selectedText}>{option.text}</Text>
        </PaperButton>
      ) : (
        <Button
          text={option.text}
          backgroundColor={theme.colors.background}
          backgroundDarker={theme.colors.disabled}
          textColor={theme.colors.textSecondary}
          full
          onPress={() => onSelect(option)}
          raiseLevel={2}
          disabled={disabled}
        />
      )}
    </View>
  );
};

Option.propTypes = {
  option: PropTypes.shape({
    isRight: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Option;
