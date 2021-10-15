import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { useApplicationProvider } from '../../providers/ApplicationProvider';
import { SafeAreaAndroid } from '../../components';
import StoryService from '../../services/StoryService';
import ModuleItem from './components/ModuleItem';
import FeedbackModal from './components/FeedbackModal';
import styles from './index.style';
import { Text } from 'react-native-paper';

const StoryScreen = ({ navigation }) => {
  const { user } = useApplicationProvider();
  const [modules, setModules] = useState([]);
  const [visible, setVisible] = useState(user?.askForFeedback);

  useEffect(() => {
    const loadData = () => {
      StoryService.getModulesAndChapters()
        .then((response) => {
          setModules(response);
        })
        .catch(() => {
          console.error(error);
        });
    }

    loadData();
  }, []);

  return (
    <>
      <SafeAreaAndroid>
        <ScrollView>
          <Text style={styles.title}>Sua História</Text>
          {modules.map((module) => (
            <ModuleItem
              key={module.id}
              module={module}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </SafeAreaAndroid>
      <FeedbackModal visible={visible} onDismiss={() => setVisible(false)} />
    </>
  );
};

export default StoryScreen;
