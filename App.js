import React from 'react';
import { StyleSheet, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DateScreen from './src/screens/DateScreen';

YellowBox.ignoreWarnings(['componentWillReceiveProps has been renamed']);
YellowBox.ignoreWarnings(['RootErrorBoundary']);
const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer style={styles.container} >
            <Stack.Navigator 
                initialRouteName="DateScreen" 
                //headerMode="none"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#4A47A3'}
                }}> 
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Event Countdown" }} />
              <Stack.Screen name="DateScreen" component={DateScreen} options={{ title: "Add Events" }}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 23
    }
});

export default App;
