import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ActivityIndicator, Text, useTheme } from 'react-native-paper';
import PickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';

import { Button, SafeAreaAndroid, Toast } from '../../components';
import StoryService from '../../services/StoryService';
import QuestionService from '../../services/QuestionService';
import styles from './style';
import { useNavigation } from '@react-navigation/core';

const QuestionFilterScreen = () => {
  const [loading, setLoading] = useState(false);
  const [moduleSelected, setModuleSelected] = useState(null);
  const [chapterSelected, setChapterSelected] = useState(null);
  const [typeSelected, setTypeSelected] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    modules: [],
    chapters: [],
  });

  const theme = useTheme();
  const navigation = useNavigation();

  const setSelectValues = (modules) => {
    const modulesData = modules?.map((item) => ({
      label: item.title,
      value: item.id,
      chapters: item.chapters,
    }));

    const chapters = [];
    modules?.forEach((module) => chapters.push(...module.chapters));
    const chaptersData = chapters?.map((chapter) => ({
      label: chapter.title,
      value: chapter.id,
    }));

    setData({ chapters: chaptersData, modules: modulesData });
  };

  useEffect(() => {
    if (!!moduleSelected) {
      const chaptersTemp = [];

      data?.modules?.map((module) => chaptersTemp.push(...module.chapters));

      const filteredChapters = chaptersTemp
        ?.filter((chapter) => chapter.moduleId == moduleSelected)
        .map((chapter) => ({ label: chapter.title, value: chapter.id }));

      setData({ ...data, chapters: filteredChapters });
    }
  }, [moduleSelected]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const modules = await StoryService.getModulesAndChapters();
        setSelectValues(modules);
      } catch (error) {
        console.error(error);
        setError(error.message || 'Ops, aconteceu um erro, tente novamente');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleButtonClick = async () => {
    const question = await QuestionService.getQuestionsFromChapter(
      chapterSelected,
      typeSelected,
      1
    );

    navigation.push('Question', {
      type: 'random',
      questions: question,
      index: 0,
      answers: [],
      query: {
        chapterId: chapterSelected,
        type: typeSelected,
      },
    });
  };

  return (
    <SafeAreaAndroid>
      {loading && (
        <ActivityIndicator animating={true} color={theme.colors.primary} />
      )}
      <Toast
        message={error}
        visible={!!error}
        onDismiss={() => setError(null)}
      />
      {!loading && (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Questões</Text>

            <PickerSelect
              onValueChange={(value) => setModuleSelected(value)}
              items={data.modules}
              value={moduleSelected}
              placeholder={{ label: 'MÓDULOS', ...styles.placeholder }}
              useNativeAndroidPickerStyle={false}
              Icon={() => <AntDesign name="caretdown" style={styles.icon} />}
              style={{
                inputAndroid: styles.select,
              }}
            />
            <PickerSelect
              onValueChange={(value) => setChapterSelected(value)}
              items={data.chapters}
              value={chapterSelected}
              placeholder={{ label: 'CAPÍTULOS', ...styles.placeholder }}
              useNativeAndroidPickerStyle={false}
              Icon={() => <AntDesign name="caretdown" style={styles.icon} />}
              style={{ inputAndroid: styles.select }}
            />
            <PickerSelect
              onValueChange={(value) => setTypeSelected(value)}
              items={[
                { label: 'Múltipla Escolha', value: '1' },
                { label: 'Lacuna', value: '2' },
              ]}
              value={typeSelected}
              placeholder={{ label: 'TIPO DE QUESTÃO', ...styles.placeholder }}
              useNativeAndroidPickerStyle={false}
              Icon={() => <AntDesign name="caretdown" style={styles.icon} />}
              style={{ inputAndroid: styles.select }}
            />
            <Button
              text="Pronto!"
              full
              containerStyles={styles.button}
              onPress={handleButtonClick}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaAndroid>
  );
};

QuestionFilterScreen.propTypes = {};

export default QuestionFilterScreen;
