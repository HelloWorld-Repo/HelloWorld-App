import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import OnboardingScreen from '../screens/OnboardingScreen';
import TabsScreen from '../screens/TabsScreen';
import ExplanationScreen from '../screens/ExplanationScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import QuestionScreen from '../screens/QuestionScreen';
import { TitleText } from '../components';
import { useApplicationProvider } from '../providers/ApplicationProvider';

const AppRoutes = () => {
  const Stack = createStackNavigator();
  const theme = useTheme();
  const { user } = useApplicationProvider();

  const screenOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: theme.colors.accent,
    },
    headerTintColor: theme.colors.textPrimary,
  };

  if (user?.resetPassword) {
    return (
      <Stack.Navigator
        initialRouteName="NewPassword"
        screenOptions={screenOptions}
        headerMode="screen"
      >
        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}
          options={{
            headerShown: true,
            headerTitle: TitleText,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    );
  }

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
      <Stack.Screen
        name="Explanation"
        component={ExplanationScreen}
        options={{
          headerShown: true,
          headerTitle: TitleText,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
        options={{
          headerShown: true,
          headerTitle: TitleText,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
