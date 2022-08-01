import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import OrderPlaced from '../modules/user/orders/OrderPlaced'
import {UserStack, OrdersTopStack} from './index'

const Stack = createNativeStackNavigator()

const OrdersStack = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="OrderPlaced"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="OrderTopStack" component={OrdersTopStack} />
            <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
            <Stack.Screen name="User" component={UserStack} />
        </Stack.Navigator>
    )
}

export default OrdersStack
