import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';

import { Button } from '../../../../components';
import theme from '../../../../styles/theme';
import styles from './style';

const OnboardingItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.pagerView}>
      {item.welcome && (
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.welcomeText}>Seja Bem-vind@ ao</Text>
          <Text style={styles.logoText}>{'<HelloWorld/>'}</Text>
        </View>
      )}
      <Image source={item.image} style={styles.image}></Image>
      <Text style={styles.firstText}>{item.subtitle}</Text>
      {item.endButton && (
        <Button
          text="Vamos!"
          full
          containerStyles={{ marginBottom: theme.spacing(10) }}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Tabs' }],
            })
          }
        />
      )}
    </View>
  );
};

export default OnboardingItem;
