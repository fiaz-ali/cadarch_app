import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import RenovationOrders from '../modules/user/orders/RenovationOrders'
import ArchitectureOrders from '../modules/user/orders/ArchitectureOrders'
import ConstructionOrders from '../modules/user/orders/ConstructionOrders'

const Tab = createMaterialTopTabNavigator()

const OrdersTopStack = ({navigation}) => {
    return (
        <Tab.Navigator initialRouteName="RenovationOrders">
            <Tab.Screen
                name="RenovationOrders"
                component={RenovationOrders}
                options={{tabBarLabel: 'Renovation'}}
            />
            <Tab.Screen
                name="ArchitectureOrders"
                component={ArchitectureOrders}
                options={{tabBarLabel: 'Architecture'}}
            />
            <Tab.Screen
                name="ConstructionOrders"
                component={ConstructionOrders}
                options={{tabBarLabel: 'Construction'}}
            />
        </Tab.Navigator>
    )
}

export default OrdersTopStack
