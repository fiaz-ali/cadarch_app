import React from 'react'
import {View} from 'react-native'

import Colors from '../constants/Colors'

const BorderBottom = () => (
    <View
        style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingBottom: 10,
            paddingTop: 10,
            borderTopColor: Colors.SECONDARY,
            borderTopWidth: 5,
        }}
    />
)

export default BorderBottom
