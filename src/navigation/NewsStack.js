import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import News from '../modules/user/news/News'
import NewsDetail from '../modules/user/news/NewsDetail'

const Stack = createNativeStackNavigator()

const NewsStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="News Detail" component={NewsDetail} />
        </Stack.Navigator>
    )
}

export default NewsStack
