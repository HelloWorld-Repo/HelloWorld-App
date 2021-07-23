import React, { useEffect } from "react";
import { Text, ViewPropTypes } from "react-native";
import { useTheme } from "react-native-paper";
import { Audio } from "expo-av";
import PropTypes from "prop-types";
import AwesomeButton from "react-native-really-awesome-button";

import styles from "./index.style";

const Button = ({ text, width, containerStyles, onClick }) => {
  const [audio, setAudio] = React.useState();
  const theme = useTheme();

  useEffect(() => {
    return audio
      ? () => {
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  const playSound = async() => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/click-button.wav")
    );
    setAudio(sound);
    sound.playAsync();
  }

  const handlePress = async () => {
    await playSound();

    if (!!onClick) {
      onClick();
    }
  };

  return (
    <AwesomeButton
      width={width}
      textColor={theme.colors.textPrimary}
      backgroundColor={theme.colors.primary}
      backgroundDarker={theme.colors.buttonShadow}
      borderRadius={15}
      textSize={theme.fonts.size.text}
      textFontFamily={theme.fonts.sampleText}
      style={containerStyles}
      onPress={handlePress}
    >
      <Text style={styles.labelButton}>{text}</Text>
    </AwesomeButton>
  );
};

Button.defaultProps = {
  width: null,
  containerStyles: null,
  onClick: () => {}
}

Button.propTypes = {
  text: PropTypes.string.isRequired, 
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
  containerStyles: ViewPropTypes.style, 
  onClick: PropTypes.func
}

export default Button;
