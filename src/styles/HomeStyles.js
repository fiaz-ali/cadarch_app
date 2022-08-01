import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    row: {
        flexDirection: 'row',
    },
    portfolio: {
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
        height: 100,
    },
    imageContainer: {
        width: 100,
        height: 100,
        backgroundColor: Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    image: {
        width: 60,
        height: 60,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 20,
    },
    heading: {
        fontSize: 16,
        color: Colors.PRIMARY,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        color: Colors.PRIMARY,
    },
    linkContainer: {
        flexDirection: 'row',
        width: 120,
        height: 28,
        backgroundColor: Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
    },
    link: {
        flex: 1,
        color: Colors.SECONDARY,
        paddingLeft: 5,
    },
})

export const moduleStyles = StyleSheet.create({
    contanier: {
        padding: 20,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 5,
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        width: width / 2 - 20,
        height: height / 2 - 220,
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        color: Colors.BLACK,
        marginTop: 10,
    },
})
