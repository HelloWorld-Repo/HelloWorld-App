import React from 'react'
import { Title, useTheme } from 'react-native-paper'
import SafeAreaAndroid from '../../components/SafeAreaAndroid'
import styles from './index.style'

const Home = () => {

    const theme = useTheme();

    return (
        <SafeAreaAndroid styleSafeArea={styles.container}>
            <Title style={styles.title}>
                Seja bem-vindo(a) ao
            </Title>
            <Title style={styles.titleDecorated}>
                {`<HelloWorld/>`}
            </Title>
        </SafeAreaAndroid>
    )
}

export default Home;
