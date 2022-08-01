import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Estimator from '../modules/user/estimator/Estimator'
import EstimationResult from '../modules/user/estimator/EstimationResult'
import DetailedEstimator from '../modules/user/estimator/DetailedEstimator'
import EstimationDetailedResult from '../modules/user/estimator/EstimationDetailedResult'

const Stack = createNativeStackNavigator()

const EstimatorStack = ({navigation, route}) => {
    return (
        <Stack.Navigator
            initialRouteName="Estimator"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Estimator" component={Estimator} />
            <Stack.Screen
                name="EstimationResult"
                component={EstimationResult}
            />
            <Stack.Screen
                name="DetailedEstimator"
                component={DetailedEstimator}
            />
            <Stack.Screen
                name="EstimationDetailedResult"
                component={EstimationDetailedResult}
            />
        </Stack.Navigator>
    )
}

export default EstimatorStack
