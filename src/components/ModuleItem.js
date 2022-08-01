import React from 'react'
import {Text, Image, TouchableOpacity} from 'react-native'

import {moduleStyles as styles} from '../styles/HomeStyles'

const ModuleItem = props => {
    return (
        <TouchableOpacity onPress={props?.onPress} style={styles.contanier}>
            <Image style={styles.image} source={props?.icon} />
            <Text style={styles.text}>{props?.name || 'User'}</Text>
        </TouchableOpacity>
    )
}
export default ModuleItem
