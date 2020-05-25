import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ToastAndroid } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDateTime } from '../moment/Moment';

const DateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        ToastAndroid.show(
            `A date has been picked: ${formatDateTime(date.toString())}`, 
            ToastAndroid.LONG
        );
        hideDatePicker();
        setDate(date)
    };

    const handleAddEventPress = () => {
        //There is function that I am to call ...then()
        navigation.navigate("HomeScreen")
    }

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <TextInput
                    style={styles.textStyle}
                    placeholder="Event title"
                    spellCheck={false}
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={[styles.textStyle2, styles.borderTop]}
                    placeholder="Event description"
                    spellCheck={false}
                    multiline
                    textAlignVertical='center'
                    numberOfLines={3}
                    value={description}
                    onChangeText={setDescription}
                />
                <TextInput
                    style={[styles.textStyle, styles.borderTop]}
                    placeholder="Event date & time"
                    spellCheck={false}
                    blurOnSubmit
                    value={formatDateTime(date.toString())}
                    editable={!isDatePickerVisible}
                    onFocus={showDatePicker}
                />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <TouchableHighlight
                onPress={handleAddEventPress}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    textStyle: {
        height: 60,
        margin: 0,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
        fontSize: 18,
        padding: 10,
    },
    textStyle2: {
        margin: 0,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
        fontSize: 18,
        padding: 10,
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 1,
    },
    button: {
        height: 50,
        backgroundColor: 'rgba(231,76,60,1)',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default DateScreen;