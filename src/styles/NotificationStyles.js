import {StyleSheet} from 'react-native'

import Colors from '../constants/Colors'

export const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: Colors.SECONDARY,
    },
    heading: {
        fontSize: 22,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingTop: 10,
    },
    empty: {
        width: 100,
        height: 100,
        opacity: 0.75,
    },
    notifItem: {
        padding: 16,
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        marginTop: 2,
    },
    noNotifCont: {
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
