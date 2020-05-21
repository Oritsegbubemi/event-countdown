import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import moment from "moment";
import { formatDate, getCountdownParts } from '../moment/Moment';

const EventCard = () => {

    const today = new Date;
    const day = moment(today).format("dddd");

    return (
        <TouchableHighlight>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.date}>{day}</Text>
                    <Text style={styles.title}>Project Work</Text>
                </View>

                <View style={styles.counterContainer}> 
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>10</Text>
                        <Text style={styles.counterLabel}>DAYS</Text>
                    </View>

                    <View style={styles.counter}>
                        <Text style={styles.counterText}>5</Text>
                        <Text style={styles.counterLabel}>HOURS</Text>
                    </View>

                    <View style={styles.counter}>
                        <Text style={styles.counterText}>34</Text>
                        <Text style={styles.counterLabel}>MINUTES</Text>
                    </View>

                    <View style={styles.counter}>
                        <Text style={styles.counterText}>12</Text>
                        <Text style={styles.counterLabel}>SECONDS</Text>
                    </View>
                </View>

                <View style={styles.borderStyle} />
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flexGrow: 1,
        marginVertical: 5
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    date: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#bdbdbd',
        marginRight: 10,
        textAlign: 'right',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'left',
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    counter: {
        width: '25%'
    },
    counterText: {
        fontSize: 40,
        textAlign: 'center',
    },
    counterLabel: {
        fontSize: 13,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
    },
    borderStyle: {
        marginHorizontal: 5,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#4A47A3'
    }
});

EventCard.propTypes = {
    event: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date)
    }),
};

export default EventCard;