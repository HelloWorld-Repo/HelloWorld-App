import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import StoryService from '../../services/StoryService';
import ModuleItem from './components/ModuleItem';

const StoryScreen = ({ navigation }) => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    let isRendered = true;

    if (isRendered) {
      updateModulesAndChapters();
    }

    return () => {
      isRendered = false;
    };
  }, []);

  const updateModulesAndChapters = async () => {
    try {
      const response = await StoryService.getModulesAndChapters();
      setModules(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      {modules.map((module) => (
        <ModuleItem key={module.id} module={module} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default StoryScreen;
