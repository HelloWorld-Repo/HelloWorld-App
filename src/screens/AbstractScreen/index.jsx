import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ActivityIndicator, Text, useTheme } from 'react-native-paper';
import { Toast } from '../../components';
import AbstractService from '../../services/AbstractService';
import ModuleItem from './components/ModuleItem';

import styles from './style';

const AbstractScreen = () => {
  const [error, setError] = useState(null);
  const [modules, setModules] = useState([]);
  const [abstract, setAbstract] = useState({ total: 0, correct: 0, wrong: 0 });
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await AbstractService.getAbstractData();
        setModules(data);

        const total = data.reduce(
          (previousValue, module) => previousValue + module.questionsCount,
          0
        );

        const correct = data.reduce(
          (previousValue, module) =>
            previousValue + module.correctQuestionsCount,
          0
        );

        const wrong = data.reduce(
          (previousValue, module) => previousValue + module.wrongQuestionsCount,
          0
        );

        setAbstract({ total, wrong, correct });
        setLoading(false);
      } catch (error) {
        setError(
          error?.message || 'Aconteceu um erro, tente novamente mais tarde'
        );
        setLoading(false);

      }
    };

    loadData();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}>Meu Progresso</Text>
      <View style={styles.abstractContainer}>
        <View style={styles.abstractGroup}>
          <Text style={styles.abstractTitle}>{abstract.total}</Text>
          <Text style={styles.label}>Total</Text>
        </View>
        <View style={styles.abstractGroup}>
          <Text style={styles.abstractTitle}>{abstract.correct}</Text>
          <Text style={styles.label}>Acertos</Text>
        </View>
        <View style={styles.abstractGroup}>
          <Text style={styles.abstractTitle}>{abstract.wrong}</Text>
          <Text style={styles.label}>Erros</Text>
        </View>
      </View>
      {loading && (
        <ActivityIndicator animating={true} color={theme.colors.primary} />
      )}
      {modules.map((module) => (
        <ModuleItem module={module} key={module.id} />
      ))}
      <Toast
        message={error}
        visible={!!error}
        onDismiss={() => setError(null)}
      />
    </ScrollView>
  );
};

export default AbstractScreen;
