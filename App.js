import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DateScreen from './src/screens/DateScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer style={styles.container} >
          <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: null }} />
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
