import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Feather from 'react-native-vector-icons/Feather'

import {HomeStack, OrdersTopStack, SupportStack, AccountStack} from './index'
import Colors from '../constants/Colors'

const {PRIMARY, SECONDARY} = Colors

const Tab = createBottomTabNavigator()

const UserStack = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={({route}) => ({
                tabBarActiveTintColor: SECONDARY,
                tabBarInactiveTintColor: PRIMARY,
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName
                    route.name === 'HomeStack'
                        ? (iconName = 'home')
                        : route.name === 'OrdersTopStack'
                        ? (iconName = 'shopping-bag')
                        : route.name === 'SupportStack'
                        ? (iconName = 'info')
                        : route.name === 'AccountStack'
                        ? (iconName = 'user')
                        : null
                    return (
                        <Feather
                            name={iconName}
                            size={20}
                            color={focused ? SECONDARY : PRIMARY}
                        />
                    )
                },
            })}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{tabBarLabel: 'Home'}}
            />
            <Tab.Screen
                name="OrdersTopStack"
                component={OrdersTopStack}
                options={{tabBarLabel: 'Orders'}}
            />
            <Tab.Screen
                name="SupportStack"
                component={SupportStack}
                options={{tabBarLabel: 'Support'}}
            />
            <Tab.Screen
                name="AccountStack"
                component={AccountStack}
                options={{tabBarLabel: 'Account'}}
            />
        </Tab.Navigator>
    )
}

export default UserStack
