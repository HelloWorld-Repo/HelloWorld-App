import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ChapterItem from '../ChapterItem';

import styles from './index.style';

const ModuleItem = ({ module }) => {
  return (
    <>
      <Text style={styles.text}>{module.title}</Text>
      <View style={styles.list}>
        {module.chapters.map((chapter) => (
          <ChapterItem chapter={chapter} key={chapter.id} />
        ))}
      </View>
    </>
  );
};

export default ModuleItem;
