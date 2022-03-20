import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button as PaperButton, Text, useTheme } from 'react-native-paper';

import styles from './style';

const Option = ({ option, isSelected, onSelect, disabled }) => {
  const theme = useTheme();
  return (
    <View>
      {isSelected ? (
        <>
          <Text style={styles.feedbackText(option.isRight)}>
            {option.isRight ? 'Opção correta' : 'Opção incorreta'}
          </Text>
          <PaperButton
            disabled
            uppercase={false}
            style={styles.buttonSelected(option.isRight)}
          >
            <Text style={styles.selectedText}>
              {option.text}
            </Text>
          </PaperButton>
        </>
      ) : (
        <TouchableOpacity
          disabled={disabled}
          uppercase={false}
          style={styles.buttonUnselected}
          onPress={() => onSelect(option)}
        >
          <Text style={styles.selectedText}>
            {option.text}
          </Text>
        </TouchableOpacity>
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
