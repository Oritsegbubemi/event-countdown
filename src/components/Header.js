import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ headerText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {

    }
});

export { Header };
