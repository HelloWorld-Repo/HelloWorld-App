import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { CircularButton } from '../../../../components';

import styles from './index.style';

const ChapterItem = ({ chapter }) => {
    return (
        <View style={styles.container}>
            <CircularButton width={100}>
                <Text style={styles.label}>{chapter.position}</Text>
            </CircularButton>
        </View>
    )
}

export default ChapterItem;