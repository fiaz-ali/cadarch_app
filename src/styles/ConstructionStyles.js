import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goBack: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        marginLeft: -100,
        fontSize: 24,
        color: Colors.PRIMARY,
    },
    option: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHTER_GRAY,
        borderRadius: 10,
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        height: 100,
    },
    imgContainer: {
        width: 95,
        height: 95,
        backgroundColor: Colors.LIGHT_GRAY,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    detailsContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingBottom: 0,
    },
    textBold: {
        fontSize: 18,
        color: Colors.PRIMARY,
        fontWeight: 'bold',
    },
    moreDetails: {
        backgroundColor: Colors.PRIMARY,
        padding: 5,
        borderRadius: 5,
        width: 100,
        marginTop: 5,
    },
    textWhite: {
        fontSize: 8,
        color: Colors.WHITE,
    },
    priceText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.SECONDARY,
    },
})
