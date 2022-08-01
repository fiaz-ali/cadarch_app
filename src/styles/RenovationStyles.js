import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    headerText: {
        flex: 1,
        marginLeft: -100,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: Colors.BLACK,
    },
    desc: {
        textAlign: 'center',
        fontSize: 12,
        color: Colors.BLACK,
    },
    itemsContainer: {
        flex: 1,
        padding: 20,
        paddingVertical: 0,
    },
    image: {
        width: 100,
        height: 100,
    },
    itemText: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.BLACK,
    },
    service: {
        backgroundColor: Colors.LIGHT_GRAY,
        height: 150,
        width: width / 2 - 40,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
})
