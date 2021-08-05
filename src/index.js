import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { TitleText } from './components';
import TabsScreen from './screens/TabsScreen';
import { useApplicationProvider } from './providers/ApplicationProvider';

const Stack = createStackNavigator();

const App = () => {
  const theme = useTheme();
  const { context } = useApplicationProvider();

  const screenOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: theme.colors.accent,
    },
    headerTintColor: theme.colors.textPrimary,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={() =>
          !!context.user && !!context.token ? 'Tabs' : 'Home'
        }
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
    </NavigationContainer>
  );
};

export default App;
