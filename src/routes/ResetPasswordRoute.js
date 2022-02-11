import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { TitleText } from '../components';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const ResetPasswordRoute = () => {
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
};

export default ResetPasswordRoute;
