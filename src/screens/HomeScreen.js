import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import CountDown from '../moment/CountDown';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.countDownStyle}>
                <CountDown />
            </View>
            
            <View style={styles.listStyle}>
                <Text>This is the Home Screen</Text>
            </View>
            

            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="Add Event" onPress={() => {navigation.navigate("DateScreen")}}>
                    <Ionicons name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                    <Ionicons name="md-notifications" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="All Events" onPress={() => {}}>
                    <Ionicons name="md-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    countDownStyle: {
        marginVertical: 15,
    },
    listStyle: {
        marginHorizontal: 10,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});

export default HomeScreen;
