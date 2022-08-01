import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

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
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verticallyCenter: {
        flex: 1,
        justifyContent: 'center',
    },
    order: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHTER_GRAY,
        borderRadius: 5,
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        padding: 10,
    },
    imageContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center',
    },
    orderId: {
        fontSize: 14,
        marginTop: 10,
    },
    heading: {
        fontSize: 24,
        color: Colors.WHITE,
    },
    image: {
        width: 75,
        height: 75,
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
    badge: {
        backgroundColor: Colors.GRAY,
        padding: 4,
        borderRadius: 2,
        width: 100,
    },
    badgeStatus: {
        color: Colors.WHITE,
        fontSize: 14,
        textAlign: 'center',
    },
})

export const orderPlacedStyles = StyleSheet.create({
    animCont: {
        flex: 3,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBold: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
    },
    btnContainer: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewOrderBtn: {
        height: 50,
        width: 120,
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    btnHome: {
        height: 50,
        width: 120,
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    secText: {
        color: Colors.SECONDARY,
        fontSize: 14,
    },
})
