import React, { useEffect, useState } from 'react';

import StoryService from '../../services/StoryService';
import ModuleItem from './components/ModuleItem';

const HistoryScreen = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    updateModulesAndChapters();
  }, [])

  const updateModulesAndChapters = async() => {
    try{
      const response = await StoryService.getModulesAndChapters();
      setModules(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {modules.map((module) => <ModuleItem key={module.id} module={module}/>)}
    </>
  )
}

export default HistoryScreen
