import React, {useLayoutEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'

import {AuthStack} from '.'
import Account from '../modules/user/account/Account'
import {tabHiddenRoutes} from '../constants/variables'

const Stack = createNativeStackNavigator()

const AccountStack = ({navigation, route}) => {
    useLayoutEffect(() => {
        tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))
            ? navigation.setOptions({tabBarStyle: {display: 'none'}})
            : navigation.setOptions({tabBarStyle: {display: 'flex'}})
    }, [navigation, route])
    return (
        <Stack.Navigator
            initialRouteName="Account"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
    )
}

export default AccountStack
