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
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#4A47A3'
    }
});

export { Card };
