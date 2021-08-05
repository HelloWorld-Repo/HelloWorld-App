import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import OnboardingScreen from '../screens/OnboardingScreen';
import TabsScreen from '../screens/TabsScreen';

const AppRoutes = () => {
  const Stack = createStackNavigator();
  const theme = useTheme();

  const screenOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: theme.colors.accent,
    },
    headerTintColor: theme.colors.textPrimary,
  };

  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={screenOptions}
      headerMode="screen"
    >
      <Stack.Screen
        name="Tabs"
        component={TabsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;