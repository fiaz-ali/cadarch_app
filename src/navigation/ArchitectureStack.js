import React, {useLayoutEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'

import {tabHiddenRoutes} from '../constants/variables'
import Architecture from '../modules/user/architecture/Architecture'
import ArchitectureForm from '../modules/user/architecture/ArchitectureForm'
import ArchitecturePackageDetails from '../modules/user/architecture/ArchitecturePackageDetails'
import {OrdersStack} from './index'

const Stack = createNativeStackNavigator()

const ArchitectureStack = ({navigation, route}) => {
    useLayoutEffect(() => {
        tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))
            ? navigation.setOptions({tabBarStyle: {display: 'none'}})
            : navigation.setOptions({tabBarStyle: {display: 'flex'}})
    }, [navigation, route])
    return (
        <Stack.Navigator
            initialRouteName="Architecture"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Architecture" component={Architecture} />
            <Stack.Screen
                name="ArchitecturePackageDetails"
                component={ArchitecturePackageDetails}
            />
            <Stack.Screen
                name="ArchitectureForm"
                component={ArchitectureForm}
            />
            <Stack.Screen name="OrdersStack" component={OrdersStack} />
        </Stack.Navigator>
    )
}

export default ArchitectureStack
