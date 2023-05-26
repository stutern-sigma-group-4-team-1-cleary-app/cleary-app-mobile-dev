import { View, Text } from 'react-native'
import React from 'react'
import Onboading from './screens/Onboading'
import { NavigationContainer } from '@react-navigation/native';
import Stacknav from './navigation/Stacknav';

const App = () => {
  return (
    <NavigationContainer>
      <Stacknav />
    </NavigationContainer>
  )
}

export default App