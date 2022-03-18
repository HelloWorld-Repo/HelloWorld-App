import React, { useState } from 'react';
import {Text, useTheme, Appbar, BottomNavigation } from 'react-native-paper';
import { Image, View } from 'react-native';

import styles from './style';
import { TitleText } from '../../components';
import { useApplicationProvider } from '../../providers/ApplicationProvider';
import StoryScreen from '../StoryScreen';
import ProfileScreen from '../ProfileScreen';
import SuccessModal from './components/SuccessModal';
import QuestionFilterScreen from '../QuestionFilterScreen';
import AbstractScreen from '../AbstractScreen';
import FailureModal from './components/FailureModal';

const houseIcon = require('../../../assets/icons/house.png');
const graphIcon = require('../../../assets/icons/graph.png');
const personIcon = require('../../../assets/icons/person.png');
const questionsIcon = require('../../../assets/icons/questions.png');
const starIcon = require('../../../assets/icons/star.png');

const TabsScreen = ({ route }) => {
  const [index, setIndex] = useState(0);
  const [completedModalVisible, setCompletedModalVisible] = useState(
    route?.params?.completedChapter
  );
  const { user } = useApplicationProvider();
  const theme = useTheme();

  const [routes] = useState([
    {
      key: 'home',
      icon: () => (
        <Image
          source={houseIcon}
          style={[styles.houseStyle, styles.noSelected]}
        />
      ),
    },
    {
      key: 'questions',
      icon: () => (
        <Image source={questionsIcon} style={styles.questionsStyile} />
      ),
    },
    {
      key: 'abstract',
      icon: () => <Image source={graphIcon} style={styles.graphStyles} />,
    },
    {
      key: 'profile',
      icon: () => <Image source={personIcon} style={styles.personStyles} />,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: StoryScreen,
    questions: QuestionFilterScreen,
    abstract: AbstractScreen,
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
        visible={completedModalVisible === "success"}
        onDismiss={() => setCompletedModalVisible(null)}
      ></SuccessModal>

      <FailureModal
        visible={completedModalVisible === "failure"}
        onDismiss={() => setCompletedModalVisible(null)}
      ></FailureModal>
    </>
  );
};

export default TabsScreen;
