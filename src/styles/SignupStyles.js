import {StyleSheet, Dimensions} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window'),
    {PRIMARY, SECONDARY, WHITE, BLACK, GRAY} = Colors

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: WHITE,
    },
    header: {
        width: width,
        backgroundColor: PRIMARY,
        borderBottomColor: SECONDARY,
        borderBottomWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerHome: {
        width: width,
        backgroundColor: PRIMARY,
        borderBottomColor: SECONDARY,
        borderBottomWidth: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginVertical: 12,
        height: 40,
        width: 150,
    },
    description: {
        color: SECONDARY,
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 20,
        textAlign: 'center',
    },
    main: {
        backgroundColor: '#f2f2f2',
        width: width,
        height: height,
        padding: 10,
        alignItems: 'center',
    },
    text: {
        padding: 10,
        textAlign: 'center',
        color: BLACK,
    },
    textSmall: {
        color: BLACK,
        fontSize: 10,
        fontWeight: 'bold',
    },
    textLarge: {
        color: BLACK,
        fontSize: 20,
        paddingLeft: 5,
    },
    inputContainer: {
        margin: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: WHITE,
    },
    image: {
        height: 36,
        width: 36,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: width / 1.5,
        fontSize: 22,
        paddingLeft: 5,
        marginTop: 3,
        height: 50,
        color: BLACK,
    },
    otpStyle: {
        width: width / 1.2,
        fontSize: 30,
        paddingLeft: 5,
        marginTop: 3,
        height: 60,
        color: BLACK,
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 20,
    },
    shadow: {
        shadowColor: GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
})
