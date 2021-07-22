import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});

const SafeAreaAndroid = ({styleSafeArea, children, ...props}) => {
    return (
        <SafeAreaView style={{...styles.AndroidSafeArea, ...styleSafeArea }} {...props}>{children}</SafeAreaView>
    )
}

export default SafeAreaAndroid;
