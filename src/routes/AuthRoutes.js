import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { TitleText } from '../components';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const AuthRoutes = () => {
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
      initialRouteName="Home"
      screenOptions={screenOptions}
      headerMode="screen"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: true,
          headerTitle: TitleText,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTitle: TitleText,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Reset"
        component={ResetPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: TitleText,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;