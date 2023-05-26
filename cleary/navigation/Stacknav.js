import { View, Text } from 'react-native'
import React from 'react'
import Onboading from '../screens/Onboading'
import Singupsceen from '../screens/Singupsceen';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Stacknav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={Onboading} options={{headerShown:false}}/>
            <Stack.Screen name="Signupscreen" component={Singupsceen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Stacknav