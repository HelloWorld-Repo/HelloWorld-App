import React from 'react';
import PropTypes from 'prop-types';
import { Card, Text } from 'react-native-paper';

import styles from './style';
import { View } from 'react-native';

const ModuleItem = ({ module }) => {
  return (
    <>
      <Text style={styles.text}>{module.title}</Text>
      <Card style={styles.abstractContainer}>
        <Card.Content style={styles.abstractRow}>
          <Text style={styles.label}>Questões respondidas</Text>
          <Text style={styles.result}>{module.questionsCount}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.abstractContainer}>
        <Card.Content style={styles.abstractRow}>
          <Text style={styles.label}>Acertos</Text>
          <Text style={[styles.result, styles.correct]}>{module.correctQuestionsCount}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.abstractContainer}>
        <Card.Content style={styles.abstractRow}>
          <Text style={styles.label}>Erros</Text>
          <Text style={[styles.result, styles.wrong]}>{module.wrongQuestionsCount}</Text>
        </Card.Content>
      </Card>
    </>
  );
};

ModuleItem.propTypes = {
  module: PropTypes.shape({
    id: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    questionsCount: PropTypes.number.isRequired,
    correctQuestionsCount: PropTypes.number.isRequired,
    wrongQuestionsCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default ModuleItem;
