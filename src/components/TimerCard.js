import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const TimerCard = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: '#f7fafc',
        borderColor: '#4A47A3',
        borderWidth: 0.5,
        position: 'relative',
        width: screenWidth * 0.95,
        height: screenHeight * 0.085,
        borderRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 1
    }
});

export { TimerCard };
