import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import { CircularButton } from '../../../../components';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

const starIcon = require('../../../../../assets/icons/star.png');

const ChapterItem = ({ chapter }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CircularButton
        width={100}
        disabled={chapter.done}
        onPress={() => navigation.push('Explanation', { chapter })}
      >
        <Text style={chapter.done ? styles.labelCompleted : styles.label}>
          {chapter.position}
        </Text>
        {chapter.done && (
          <Image style={styles.starIcon} source={starIcon}></Image>
        )}
      </CircularButton>
      <Text style={styles.title}>{chapter.title}</Text>
    </View>
  );
};

ChapterItem.propTypes = {
  chapter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ChapterItem;
