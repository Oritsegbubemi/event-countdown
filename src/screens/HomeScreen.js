import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, TimerCard, Button, Card } from '../components';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is the Home Screen</Text>
            <Button 
                handler={() => {navigation.navigate("DateScreen")}}
                text="Add Date"
            />
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
});

export default HomeScreen;
