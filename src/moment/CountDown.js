import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from "moment";
import { TimerCard } from '../components';
import { getCountdownParts } from './Moment';

const CountDown = () => {
    const endDate = moment().endOf('month');
    const [ event, setEvent ] = useState(new Date(endDate));

    useEffect(() => {
        const interval =  setInterval(() => { setEvent(endDate) }, 1000);
        return () => clearInterval(interval)
    }, [event])

    const today = new Date;
    const day = moment(today).format("dddd");
    const date = moment(today).format("D MMMM, YYYY");
    const { days, hours, minutes, seconds } = getCountdownParts(event);

    return (
        <TimerCard>
            <View style={styles.container}>
                <Text style={styles.date}>{day} {date}</Text>
                <Text style={styles.demacator}> | </Text>
                <Text style={styles.date}>Month Ending in {days}d {hours}h {minutes}m {seconds}s</Text>
            </View>
        </TimerCard> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    date: {
        fontSize: 12,
        textAlign: "left",
        color: '#121139',
    },
    demacator: {
        fontSize: 13,
        textAlign: "center",
        lineHeight: 16,
        color: '#121139',
    }
})

export default CountDown;