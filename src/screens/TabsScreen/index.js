import * as React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { Image } from 'react-native';

const houseIcon = require('../../../assets/icons/house.png');
const graphIcon = require('../../../assets/icons/graph.png');
const personIcon = require('../../../assets/icons/person.png');
const questionsIcon = require('../../../assets/icons/questions.png');

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const theme = useTheme();

  const [routes] = React.useState([
    {
      key: 'home',
      icon: ({ tintColor }) => (
        <Image
          source={houseIcon}
          style={{ width: 43, height: 35, tintColor: tintColor }}
        />
      ),
    },
    { key: 'questions', icon: ({ tintColor }) => (
      <Image
        source={questionsIcon}
        style={{ width: 29, height: 35, tintColor: tintColor }}
      />
    ), },
    { key: 'abstract', icon: ({ tintColor }) => (
      <Image
        source={graphIcon}
        style={{ width: 52, height: 35, tintColor: tintColor }}
      />
    ), },
    { key: 'profile', icon: ({ tintColor }) => (
      <Image
        source={personIcon}
        style={{ width: 28, height: 35, tintColor: tintColor }}
      />
    ), },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    questions: AlbumsRoute,
    abstract: RecentsRoute,
    profile: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
      barStyle={{
        backgroundColor: theme.colors.background,
        height: 75,
        justifyContent: 'center',
      }}
    />
  );
};

export default MyComponent;
