import React, { useState, useEffect } from 'react';
import {
  BottomNavigation,
  Text,
  useTheme,
  Appbar,
  Title,
} from 'react-native-paper';
import { Image, View } from 'react-native';

import styles from './index.style';
import { TitleText, Button, Modal } from '../../components';
import { useApplicationProvider } from '../../providers/ApplicationProvider';
import StoryScreen from '../StoryScreen';
import ProfileScreen from '../ProfileScreen';

const houseIcon = require('../../../assets/icons/house.png');
const graphIcon = require('../../../assets/icons/graph.png');
const personIcon = require('../../../assets/icons/person.png');
const questionsIcon = require('../../../assets/icons/questions.png');
const starIcon = require('../../../assets/icons/star.png');

const successImage = require('../../../assets/images/success.png');

import { Audio } from 'expo-av';

const AlbumsRoute = () => <Text>Albums</Text>;

const SuccessModal = ({ visible, onDismiss }) => {
  const [audio, setAudio] = useState();
  const theme = useTheme();

  useEffect(() => {
    return audio
      ? () => {
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  useEffect(() => {
    playSound();
  }, []);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/sounds/clapping.wav')
    );
    if (visible) {
      setAudio(sound);
      sound.playAsync();
    }
  };

  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      <Title style={styles.modalTitle}>Capítulo Completado</Title>
      <Image
        source={successImage}
        style={{ width: 'auto', height: 350, alignSelf: 'stretch' }}
      />
      <Text
        style={{
          marginVertical: theme.spacing(4),
          fontSize: theme.fonts.size.text,
          textAlign: 'center',
        }}
      >
        Parabéns! Você acaba de finalizar mais uma etapa do seu aprendizado
      </Text>
      <Button
        text="Obrigad@!"
        full
        onPress={onDismiss}
      />
    </Modal>
  );
};

const TabsScreen = ({ route }) => {
  const [index, setIndex] = useState(0);
  const [completedModalVisible, setCompletedModalVisible] = useState(
    !!route?.params?.completedChapter
  );
  const { user } = useApplicationProvider();
  const theme = useTheme();

  const [routes] = useState([
    {
      key: 'home',
      icon: ({ tintColor }) => (
        <Image source={houseIcon} style={styles.houseStyle} />
      ),
    },
    {
      key: 'questions',
      icon: ({ tintColor }) => (
        <Image source={questionsIcon} style={styles.questionsStyile} />
      ),
    },
    {
      key: 'abstract',
      icon: ({ tintColor }) => (
        <Image source={graphIcon} style={styles.graphStyles} />
      ),
    },
    {
      key: 'profile',
      icon: ({ tintColor }) => (
        <Image source={personIcon} style={styles.personStyles} />
      ),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: StoryScreen,
    questions: AlbumsRoute,
    abstract: AlbumsRoute,
    profile: ProfileScreen,
  });

  return (
    <>
      <Appbar.Header style={styles.header}>
        <View style={styles.headerContent}>
          <TitleText color={theme.colors.accent} style={styles.logo} />
          <Image source={starIcon}></Image>
          <Text>{user?.level || 0}</Text>
        </View>
      </Appbar.Header>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
        barStyle={styles.bar}
      />
      <SuccessModal
        visible={completedModalVisible}
        onDismiss={() => setCompletedModalVisible(false)}
      ></SuccessModal>
    </>
  );
};

export default TabsScreen;
