import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);

const Button = ({ handler, text }) => {
    return (
        <View>
            <TouchableOpacity onPress={handler} style={styles.container}>
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4A47A3',
        borderWidth: 1,
        borderColor: '#2B297A',
        width: screenWidth * 0.75,
        padding: 10,
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        lineHeight: 21,
        color: '#FCFCFC'
    }
});

export { Button };
