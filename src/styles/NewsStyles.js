import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    image: {
        width: width,
        height: height / 3,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 22,
        color: Colors.PRIMARY,
    },
    description: {
        marginTop: 10,
        color: Colors.PRIMARY,
        lineHeight: 20,
    },
    icon: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    header: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    screenTitle: {
        flex: 1,
        textAlign: 'center',
        marginLeft: -50,
        fontSize: 18,
        color: Colors.PRIMARY,
    },
    header: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    screenTitle: {
        flex: 1,
        textAlign: 'center',
        marginLeft: -50,
        fontSize: 18,
        color: Colors.PRIMARY,
    },
})
