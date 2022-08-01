import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
