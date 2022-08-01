import React, {useLayoutEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'

import {tabHiddenRoutes} from '../constants/variables'
import Construction from '../modules/user/construction/Construction'
import ConstructionPackage from '../modules/user/construction/ConstructionPackage'
import ConstructionPackages from '../modules/user/construction/ConstructionPackages'
import {OrdersStack} from './index'

const Stack = createNativeStackNavigator()

const ConstructionStack = ({navigation, route}) => {
    useLayoutEffect(() => {
        tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))
            ? navigation.setOptions({tabBarStyle: {display: 'none'}})
            : navigation.setOptions({tabBarStyle: {display: 'flex'}})
    }, [navigation, route])

    return (
        <Stack.Navigator
            initialRouteName="Construction"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Construction" component={Construction} />
            <Stack.Screen
                name="ConstructionPackage"
                component={ConstructionPackage}
            />
            <Stack.Screen
                name="ConstructionPackages"
                component={ConstructionPackages}
            />
            <Stack.Screen name="OrdersStack" component={OrdersStack} />
        </Stack.Navigator>
    )
}

export default ConstructionStack
