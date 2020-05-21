import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const DateScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <TextInput
                    style={styles.textStyle}
                    placeholder="Event title"
                    spellCheck={false}
                    //value={() => {}}
                    //onChangeText={() => {}}
                />
                <TextInput
                    style={[styles.textStyle2, styles.borderTop]}
                    placeholder="Event description"
                    spellCheck={false}
                    multiline
                    textAlignVertical='top'
                    numberOfLines={3}
                    //value={() => {}}
                    //onChangeText={() => {}}
                />
                <TextInput
                    style={[styles.textStyle, styles.borderTop]}
                    placeholder="Event date"
                    spellCheck={false}
                    //value={() => {}}
                    //editable={() => {}}
                    //onFocus={() => {}}
                />
                <DateTimePicker
                    //isVisible={() => {}}
                    //mode="datetime"
                    //onConfirm={() => {}}
                    //onCancel={() => {}}
                />
            </View>

            <TouchableHighlight
                onPress={()=> {navigation.navigate("HomeScreen")}}
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
