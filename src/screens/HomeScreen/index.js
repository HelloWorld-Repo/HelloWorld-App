import React from 'react';
import { View } from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import { Button, SafeAreaAndroid } from '../../components';
import styles from './index.style';
import screens from '../OnboardingScreen/screens';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaAndroid styleSafeArea={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.internContainer}>
          <Title style={styles.title}>Seja bem-vindo(a) ao</Title>
          <Title style={styles.titleDecorated}>{`<HelloWorld/>`}</Title>
        </View>
        <Title style={styles.introQuestion}>Você é novo por aqui?</Title>
        <Button
          width={260}
          containerStyles={{ marginBottom: theme.spacing(2) }}
          text="Sim"
          onPress={() => navigation.push('Register')}
        />
        <Button
          width={260}
          text="Não, já sou de casa"
          onPress={() => navigation.push('Login')}
        />
      </View>
    </SafeAreaAndroid>
  );
};

export default HomeScreen;
