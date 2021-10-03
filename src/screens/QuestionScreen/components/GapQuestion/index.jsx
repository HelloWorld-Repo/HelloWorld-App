import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

import styles from './style';

const GapQuestion = ({ partsOfDescription }) => {
  return (
    <View style={styles.container}>
      {partsOfDescription.map((part, index) =>
        index < partsOfDescription.length - 1 ? (
          <Fragment key={index}>
            <Text style={styles.text}>{part}</Text>
            <View style={styles.gap} />
          </Fragment>
        ) : (
          <Text key={index} style={styles.text}>
            {part}
          </Text>
        )
      )}
    </View>
  );
};

GapQuestion.propTypes = {
  partsOfDescription: PropTypes.array.isRequired,
};

export default GapQuestion;
