import React from 'react'
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
import Colors from '../constants/Colors'

const {width} = Dimensions.get('window')
const {PRIMARY, SECONDARY} = Colors

const CustomButton = props => {
    return (
        <TouchableOpacity onPress={props?.onPress} style={styles.container}>
            <Text style={styles.btnTitle}>{props?.title || ''}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY,
        width: width / 2,
        height: 50,
    },
    btnTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: SECONDARY,
    },
})

export default CustomButton
