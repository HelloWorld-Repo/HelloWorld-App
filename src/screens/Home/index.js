import React from 'react'
import { Text } from 'react-native'
import { Title, useTheme } from 'react-native-paper'
import SafeAreaAndroid from '../../components/SafeAreaAndroid'
import style from './index.style'

const Home = () => {

    const theme = useTheme();

    return (
        <SafeAreaAndroid style={style.container}>
            <Title style={style.title(theme)}>
                Seja bem-vindo(a) ao
            </Title>
            <Title style={style.titleDecorated(theme)}>
                {`<HelloWorld/>`}
            </Title>
        </SafeAreaAndroid>
    )
}

export default Home
