
import React from 'react';
import home from './home';
import Covid from './Covid';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="AnuragBhatt HomePage" component={home} />
                <Stack.Screen name="Covid" component={Covid} />

            </Stack.Navigator>
        </NavigationContainer>

    );
}

  