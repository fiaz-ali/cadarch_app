import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

export const estimatorStyles = StyleSheet.create({
    container: {
        flex: 1,
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
    service: {
        backgroundColor: Colors.LIGHTER_GRAY,
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
    slide: {
        flex: 1,
        padding: 15,
        paddingVertical: 0,
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
    count: {
        fontSize: 24,
        paddingVertical: 20,
        textAlign: 'right',
        color: Colors.BLACK,
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 20,
        color: Colors.BLACK,
    },
    selected: {
        borderRightColor: Colors.SECONDARY,
        borderRightWidth: 16,
        borderWidth: 2,
        borderColor: Colors.SECONDARY,
    },
    optionCont: {
        width: 95,
        height: 95,
        backgroundColor: Colors.LIGHT_GRAY,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    image: {
        width: 75,
        height: 75,
    },
    textCont: {
        flex: 1,
        paddingHorizontal: 20,
    },
})

export const estimationResultStyles = StyleSheet.create({
    service: {
        backgroundColor: Colors.LIGHTER_GRAY,
        height: 150,
        width: Dimensions.get('window').width / 2 - 40,
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
    estimation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHTER_GRAY,
        borderRadius: 5,
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        height: 150,
        marginTop: 15,
    },

    estimatorDetails: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHTER_GRAY,
        borderRadius: 5,
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        marginTop: 20,
        width: Dimensions.get('window').width - 32,
    },
    estimationRow: {
        margin: 5,
        padding: 5,
        paddingVertical: 10,
    },
    hr: {
        height: 1,
        backgroundColor: Colors.GRAY,
        width: Dimensions.get('window').width - 50,
    },
})
