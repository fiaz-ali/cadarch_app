import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    supportContainer: {
        backgroundColor: Colors.WHITE,
        padding: 16,
        paddingTop: 5,
        borderRadius: 5,
    },
    supportText: {
        fontSize: 16,
        marginVertical: 10,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
    },
    maintenanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: Colors.LIGHTER_GRAY,
        borderTopColor: Colors.LIGHTER_GRAY,
    },
    moduleContainer: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHTER_GRAY,
        alignItems: 'center',
    },
    img: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    textPrime: {
        fontSize: 16,
        color: Colors.PRIMARY,
    },
})
