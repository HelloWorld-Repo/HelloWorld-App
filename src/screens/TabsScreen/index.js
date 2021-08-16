import React, { useState } from 'react';
import {
  BottomNavigation,
  Text,
  useTheme,
  Appbar,
} from 'react-native-paper';
import { Image, View } from 'react-native';

import styles from './index.style';
import { TitleText, Button } from '../../components';
import { useApplicationProvider } from '../../providers/ApplicationProvider';
import StoryScreen from '../StoryScreen';

const houseIcon = require('../../../assets/icons/house.png');
const graphIcon = require('../../../assets/icons/graph.png');
const personIcon = require('../../../assets/icons/person.png');
const questionsIcon = require('../../../assets/icons/questions.png');
const starIcon = require('../../../assets/icons/star.png');

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => {
  const { user, signOut } = useApplicationProvider();
  return (
  <>
    <Text>{user?.token}</Text>
    <Button onPress={signOut} text="Sair" full />
  </>
)};

const TabsScreen = () => {
  const [index, setIndex] = useState(0);
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
    profile: RecentsRoute,
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
    </>
  );
};

export default TabsScreen;
