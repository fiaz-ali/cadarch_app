import React from 'react'
import {View, Text, Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

import Images from '../assets/paths'
import Colors from '../constants/Colors'
import {styles} from '../styles/SignupStyles'

const Header = props => {
    const navigation = useNavigation()

    return (
        <View style={props?.home ? styles.headerHome : styles.header}>
            <Image source={Images.LOGO_ROW_LIGHT} style={styles.logo} />
            {props?.home && (
                <Ionicons
                    name="notifications"
                    size={22}
                    color={Colors.WHITE}
                    onPress={() => navigation.navigate('Notifications')}
                />
            )}
            {props?.desc && (
                <Text style={styles.description}>{props.desc}</Text>
            )}
        </View>
    )
}

export default Header
