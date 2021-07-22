import React from 'react'
import { View } from 'react-native'
import { Title, useTheme } from 'react-native-paper'
import {Button, SafeAreaAndroid} from '../../components'
import styles from './index.style'

const Home = () => {
    
    const theme = useTheme();

    return (
        <SafeAreaAndroid styleSafeArea={styles.container}>
            <View style={styles.firstContainer}>
                <Title style={styles.title}>
                    Seja bem-vindo(a) ao
                </Title>
                <Title style={styles.titleDecorated}>
                    {`<HelloWorld/>`}
                </Title>
            </View>
            <View style={styles.secondContainer}>
                <Title style={styles.introQuestion}>
                    Você é novo por aqui?
                </Title>
                <Button width={260} containerStyles={{ marginBottom: theme.spacing(2) }} text="Sim"/>
                <Button width={260} text="Não, já sou de casa"/>
            </View>
        </SafeAreaAndroid>
    )
}

export default Home;
