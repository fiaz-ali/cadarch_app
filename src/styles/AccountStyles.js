import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: Colors.SECONDARY,
    },
    rowCenter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowReverse: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    image: {
        width: 75,
        height: 75,
    },
    whatsapp: {
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 0.5,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logout: {
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 0.5,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    insta: {
        width: 36,
        height: 36,
        marginLeft: 16,
    },
    privacy: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    terms: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
    },
    phoneNo: {
        fontSize: 14,
        color: Colors.WHITE,
    },
    name: {
        fontSize: 18,
        color: Colors.WHITE,
    },
    whatsappText: {
        paddingLeft: 16,
        color: Colors.PRIMARY,
    },
    linksCont: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 30,
    },
    followBtn: {
        marginVertical: 10,
        textAlign: 'center',
        color: Colors.PRIMARY,
    },
    icon: {
        width: 36,
        height: 36,
    },
})
