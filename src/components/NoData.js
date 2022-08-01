import React from 'react'
import {View, Text, Image} from 'react-native'

import Images from '../assets/paths'
import Colors from '../constants/Colors'
import {styles} from '../styles/AppStyles'

const NoData = () => {
    return (
        <View style={styles.center}>
            <Image
                source={Images.NO_DATA}
                style={{
                    width: 130,
                    height: 130,
                }}
            />
            <Text style={{color: Colors.PRIMARY}}>
                You don't have any active orders at the moment
            </Text>
        </View>
    )
}

export default NoData
