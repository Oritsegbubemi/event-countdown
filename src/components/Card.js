import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: "#ccc",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: "white"
    }
});

export { Card };
