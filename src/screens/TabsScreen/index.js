import React, { useState } from 'react';
import {
  BottomNavigation,
  Text,
  useTheme,
  Appbar,
} from 'react-native-paper';
import { Image, View } from 'react-native';

import styles from './style';
import { TitleText } from '../../components';
import { useApplicationProvider } from '../../providers/ApplicationProvider';
import StoryScreen from '../StoryScreen';
import ProfileScreen from '../ProfileScreen';
import SuccessModal from './components/SuccessModal';
import DevelopingScreen from '../DevelopingScreen';

const houseIcon = require('../../../assets/icons/house.png');
const graphIcon = require('../../../assets/icons/graph.png');
const personIcon = require('../../../assets/icons/person.png');
const questionsIcon = require('../../../assets/icons/questions.png');
const starIcon = require('../../../assets/icons/star.png');

const AlbumsRoute = () => <Text>Albums</Text>;

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
        <Image source={houseIcon} style={[styles.houseStyle, styles.noSelected]} />
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
    questions: DevelopingScreen,
    abstract: DevelopingScreen,
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
