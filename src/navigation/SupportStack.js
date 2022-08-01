import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Support from '../modules/user/Support'

const Stack = createNativeStackNavigator()

const SupportStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Support" component={Support} />
        </Stack.Navigator>
    )
}

export default SupportStack
