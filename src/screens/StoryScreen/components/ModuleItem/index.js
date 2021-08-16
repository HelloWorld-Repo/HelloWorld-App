import React from 'react'
import { Text } from 'react-native-paper';
import ChapterItem from '../ChapterItem';

import styles from './index.style';

const ModuleItem = ({ module }) => {
  return (
    <>
      <Text style={styles.text}>{module.title}</Text>
      {module.chapters.map((chapter) => < ChapterItem chapter={chapter} key={chapter.id} />)}
    </>
  );
}

export default ModuleItem
