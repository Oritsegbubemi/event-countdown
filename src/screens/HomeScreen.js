import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import CountDown from '../moment/CountDown';
import EventCard from './EventCard';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.countDownStyle}>
                <CountDown />
            </View>
            
            <ScrollView>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </ScrollView>

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
    },
    countDownStyle: {
        marginVertical: 15,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});

export default HomeScreen;
