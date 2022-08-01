import React from 'react'
import {ActivityIndicator, View} from 'react-native'

import Colors from '../constants/Colors'
import {styles} from '../styles/AppStyles'

const CustomLoader = () => {
    return (
        <View style={styles.center}>
            <ActivityIndicator color={Colors.PRIMARY} size={64} />
        </View>
    )
}

export default CustomLoader
