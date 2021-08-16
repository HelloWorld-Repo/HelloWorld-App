import React, { useEffect } from "react";
import { Text, ViewPropTypes } from "react-native";
import { useTheme } from "react-native-paper";
import { Audio } from "expo-av";
import PropTypes from "prop-types";
import AwesomeButton from "react-native-really-awesome-button";

import styles from "./index.style";

const CircularButton = ({
  children,
  width,
  containerStyles,
  onPress,
  full = false,
  disabled = false
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
      require("../../../assets/sounds/click-button.wav")
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
      height={width}
      textColor={theme.colors.error}
      backgroundColor={disabled ? theme.colors.disabled : theme.colors.background}
      backgroundDarker={disabled ? null : theme.colors.disabledShadow}
      borderRadius={200}
      textSize={theme.fonts.size.bigLogo}
      textFontFamily={theme.fonts.sampleText}
      style={containerStyles}
      onPress={handlePress}
      stretch={full}
      disabled={disabled}
      borderWidth={1}
      borderColor={theme.colors.disabledShadow}
    >
      {children}
    </AwesomeButton>
  );
};

CircularButton.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  containerStyles: ViewPropTypes.style,
  onPress: PropTypes.func,
  full: PropTypes.bool,
  disabled: PropTypes.bool
};

export default CircularButton;
