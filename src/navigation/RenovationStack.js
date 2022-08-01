import React, {useLayoutEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'

import {tabHiddenRoutes} from '../constants/variables'
import Renovation from '../modules/user/renovation/Renovation'
import RenovationFormAlt from '../modules/user/renovation/RenovationFormAlt'
import {OrdersStack} from './index'

const Stack = createNativeStackNavigator()

const RenovationStack = ({navigation, route}) => {
    useLayoutEffect(() => {
        tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))
            ? navigation.setOptions({tabBarStyle: {display: 'none'}})
            : navigation.setOptions({tabBarStyle: {display: 'flex'}})
    }, [navigation, route])

    return (
        <Stack.Navigator
            initialRouteName="Renovation"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Renovation" component={Renovation} />
            <Stack.Screen
                name="RenovationFormAlt"
                component={RenovationFormAlt}
            />
            <Stack.Screen name="OrdersStack" component={OrdersStack} />
        </Stack.Navigator>
    )
}

export default RenovationStack
