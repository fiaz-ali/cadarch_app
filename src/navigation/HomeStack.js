import React, {useLayoutEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'

import Home from '../modules/user/Home'
import NewsStack from '../navigation/NewsStack'
import EstimatorStack from '../navigation/EstimatorStack'
import RenovationStack from '../navigation/RenovationStack'
import ConstructionStack from '../navigation/ConstructionStack'
import ArchitectureStack from '../navigation/ArchitectureStack'
import Notifications from '../modules/user/Notifications'
import {tabHiddenRoutes} from '../constants/variables'
import {AuthStack} from '.'

const Stack = createNativeStackNavigator()

const HomeStack = ({navigation, route}) => {
    useLayoutEffect(() => {
        tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))
            ? navigation.setOptions({tabBarStyle: {display: 'none'}})
            : navigation.setOptions({tabBarStyle: {display: 'flex'}})
    }, [navigation, route])

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="News Stack" component={NewsStack} />
            <Stack.Screen name="Estimator Stack" component={EstimatorStack} />
            <Stack.Screen name="Renovation Stack" component={RenovationStack} />
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen
                name="Architecture Stack"
                component={ArchitectureStack}
            />
            <Stack.Screen
                name="Construction Stack"
                component={ConstructionStack}
            />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    )
}

export default HomeStack
