import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="none"
      >
        <Stack.Screen 
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen;