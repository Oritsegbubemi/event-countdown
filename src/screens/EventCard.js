import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { Card, CardSection, ModalButton } from '../components';

const EventCard = () => {

    const [showModal, setShowModal] = useState(false);

    const onEdit = () => {
        setShowModal(!showModal)
        Alert.alert('Edit Mode Selected');
    }

    const onDelete = () => {
        setShowModal(!showModal)
        Alert.alert('Delete Mode Selected');
    }

    const handlerLongClick = () => {
        setShowModal(true)
    }

    const handlerClick = () => {
        Alert.alert(' Button Short Pressed');
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity
            onLongPress={handlerLongClick}
            onPress={handlerClick}
            activeOpacity={0.6}
        >
                <Card>
                    <View>
                        <View style={styles.titleStyle}>
                            <Text style={styles.date}>29/05/2020</Text>
                            <Text style={styles.title}>Project Work</Text>
                        </View>
                        <View style={styles.dateStyle}>
                            <View style={styles.counter}>
                                <Text style={styles.counterText}>10</Text>
                                <Text style={styles.counterLabel}>DAYS</Text>
                            </View>
                            <View style={styles.counter}>
                                <Text style={styles.counterText}>7</Text>
                                <Text style={styles.counterLabel}>HOURS</Text>
                            </View>
                            <View style={styles.counter}>
                                <Text style={styles.counterText}>56</Text>
                                <Text style={styles.counterLabel}>MINTUES</Text>
                            </View>
                            <View style={styles.counter}>
                                <Text style={styles.counterText}>12</Text>
                                <Text style={styles.counterLabel}>SECONDS</Text>
                            </View>
                        </View>

                        <Modal
                            animationType="slide"
                            transparent
                            visible={showModal}     
                            onRequestClose={() => {}}
                        >
                            <View style={styles.modalContainerStyle}>
                                <CardSection style={styles.modalCardSectionStyle}>
                                    <Text style={styles.modalTextStyle}>Hellooo</Text>
                                </CardSection>

                                <CardSection>
                                    <ModalButton onPress={onEdit}>Edit</ModalButton>
                                    <ModalButton onPress={onDelete}>Delete</ModalButton>
                                </CardSection>
                            </View>
                        </Modal>
                    </View>
                </Card>

                
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    titleStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 3
    },
    date: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#bdbdbd',
        marginLeft: 40,
        textAlign: 'right',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 40,
        textAlign: 'left',
    },
    dateStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3
    },
    counter: {
        alignItems: 'center',
    },
    counterText: {
        fontSize: 35,
        textAlign: 'center',
    },
    counterLabel: {
        fontSize: 13,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
    },
    modalContainerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    modalCardSectionStyle: {
        justifyContent: 'center'
    },
    modalTextStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },  
});

export default EventCard;