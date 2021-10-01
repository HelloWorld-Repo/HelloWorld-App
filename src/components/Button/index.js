import React, { useEffect } from 'react';
import { Text, ViewPropTypes } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Audio } from 'expo-av';
import PropTypes from 'prop-types';
import AwesomeButton from 'react-native-really-awesome-button';

import styles from './index.style';

const Button = ({
  text,
  width,
  containerStyles,
  onPress,
  full = false,
  disabled = false,
  backgroundColor,
  textColor,
  backgroundDarker,
  ...props
}) => {
  const [audio, setAudio] = React.useState();
  const theme = useTheme();

  useEffect(() => {
    return audio
      ? () => {
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/sounds/click-button.wav')
    );
    setAudio(sound);
    sound.playAsync();
  };

  const handlePress = async () => {
    await playSound();

    if (!!onPress) {
      onPress();
    }
  };

  return (
    <AwesomeButton
      width={width}
      backgroundColor={
        (disabled && !backgroundColor)
          ? theme.colors.disabled
          : backgroundColor || theme.colors.primary
      }
      backgroundDarker={
        (disabled && !backgroundColor)
          ? theme.colors.disabledShadow
          : backgroundDarker || backgroundColor || theme.colors.buttonShadow
      }
      borderRadius={15}
      textSize={theme.fonts.size.text}
      textFontFamily={theme.fonts.sampleText}
      style={containerStyles}
      onPress={handlePress}
      stretch={!!full}
      disabled={disabled}
      {...props}
    >
      <Text
        style={{
          ...styles.labelButton,
          color: textColor || theme.colors.textPrimary,
        }}
      >
        {text}
      </Text>
    </AwesomeButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  containerStyles: ViewPropTypes.style,
  onPress: PropTypes.func,
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  backgroundDarker: PropTypes.string,
};

export default Button;
