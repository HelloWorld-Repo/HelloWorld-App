import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { TitleText } from '../../components';

const welcomeImage = require('../../../assets/images/onboarding1.png');
const PhoneImage = require('../../../assets/images/onboarding2.png');
const learningImage = require('../../../assets/images/onboarding3.png');
const peerProgramming = require('../../../assets/images/onboarding4.png');

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    backgroundColor: 'red',
    marginBottom: 50,
  },
});

export default screens = [
  {
    image: welcomeImage,
    title: <TitleText type="big" />,
    subtitle: 'Agora é a sua vez de nos conhecer, vamos nessa?',
    key: '1',
    welcome: true,
  },
  {
    image: PhoneImage,
    title: '',
    subtitle:
      ' O Hello World é um aplicativo móvel gratuito de ensino de lógica de programação para todas as pessoas.',
    key: '2',
  },
  {
    image: learningImage,
    title: '',
    subtitle:
      'A distribuição dos nossos conteúdos foram baseadas em formatos de disciplinas de Universidades Federais!',
    key: '3',
  },
  {
    image: peerProgramming,
    title: '',
    subtitle:
      'A nossa missão é fazer você enteder o básico de programação de forma simples e divertida, vamos começar?',
    key: '4',
    endButton: true,
  },
];
