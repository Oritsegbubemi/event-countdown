import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const DateScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <TextInput
                    style={styles.textStyle}
                    onChangeText={() => {}}
                    placeholder="Event title"
                    spellCheck={false}
                    value={() => {}}
                />
                <TextInput
                    style={[styles.textStyle, styles.borderTop]}
                    placeholder="Event date"
                    spellCheck={false}
                    value={() => {}}
                    editable={() => {}}
                    onFocus={() => {}}
                />
                <DateTimePicker
                    isVisible={() => {}}
                    mode="datetime"
                    onConfirm={() => {}}
                    onCancel={() => {}}
                />
            </View>

            <TouchableHighlight
                onPress={()=> {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
        </View>
    );
}

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
        height: 40,
        margin: 0,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
    },
    borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.5,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
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
    },
});

export default DateScreen;
