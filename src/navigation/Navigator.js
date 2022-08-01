import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import AuthStack from './AuthStack'
import UserStack from './UserStack'
import Splash from '../modules/profile/Splash'

const Stack = createNativeStackNavigator()

const Navigator = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="User" component={UserStack} />
        </Stack.Navigator>
    )
}

export default Navigator
