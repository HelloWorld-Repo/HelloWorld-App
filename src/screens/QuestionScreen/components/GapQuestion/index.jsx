import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import { Image, View } from 'react-native';

import styles from './style';

const GapQuestion = ({ partsOfDescription }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {partsOfDescription.map((part, index) =>
          index < partsOfDescription.length - 1 ? `${part}__________` : part
        )}
      </Text>
    </View>
  );
};

GapQuestion.propTypes = {
  partsOfDescription: PropTypes.array.isRequired,
};

export default GapQuestion;
