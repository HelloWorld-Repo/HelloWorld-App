import React from 'react'
import { Text } from 'react-native'

import styles from './index.style';

const ChapterItem = ({chapter}) => {
    return (
        <Text>{chapter.title}</Text>
    )
}

export default ChapterItem;