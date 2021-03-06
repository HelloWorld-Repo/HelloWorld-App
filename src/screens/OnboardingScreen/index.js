import React from 'react';
import Onboarding from 'react-native-app-intro-slider';
import screens from './screens';
import theme from '../../styles/theme';
import OnboardingItem from './components/OnboardingItem';

const OnboardingScreen = () => {
  return (
    <Onboarding
      renderItem={({item}) => <OnboardingItem item={item}/>}
      data={screens}
      onDone={() => {}}
      doneLabel=""
      activeDotStyle={{ backgroundColor: theme.colors.accent }}
    />
  );
};

export default OnboardingScreen;
