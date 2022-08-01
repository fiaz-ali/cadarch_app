import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignupScreen from '../modules/profile/SignupScreen'
import OTPCodeScreen from '../modules/profile/OTPCodeScreen'
import NameScreen from '../modules/profile/NameScreen'
import {UserStack} from '../navigation/index'

const Stack = createNativeStackNavigator()

const AuthStack = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="Signup"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="OTP" component={OTPCodeScreen} />
            <Stack.Screen name="Name" component={NameScreen} />
            <Stack.Screen name="User" component={UserStack} />
        </Stack.Navigator>
    )
}

export default AuthStack
