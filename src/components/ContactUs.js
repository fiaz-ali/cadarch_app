import React from 'react'
import {View, Text, TouchableOpacity, Linking} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

import {ArchitectureFormStyles as styles} from '../styles/FormStyles'
import Colors from '../constants/Colors'

const ContactUs = () => {
    return (
        <TouchableOpacity
            style={styles.support}
            onPress={() => Linking.openURL('tel:+923359908019')}>
            <View style={styles.contactIconContainer}>
                <AntDesign
                    name={'customerservice'}
                    color={Colors.SECONDARY}
                    size={48}
                />
            </View>
            <View style={{flex: 1, paddingLeft: 20}}>
                <Text style={[styles.textBold, {fontSize: 16}]}>
                    Contact us
                </Text>
                <Text style={{fontSize: 12, color: Colors.PRIMARY}}>
                    Our representative will talk to you and understand the
                    problem
                </Text>
                <TouchableOpacity
                    style={styles.numberContainer}
                    onPress={() => Linking.openURL('tel:+923359908019')}>
                    <Text
                        style={{
                            flex: 1,
                            color: Colors.SECONDARY,
                            paddingLeft: 5,
                        }}>
                        Call Now
                    </Text>
                    <Feather
                        name={'chevron-right'}
                        color={Colors.SECONDARY}
                        size={16}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ContactUs
