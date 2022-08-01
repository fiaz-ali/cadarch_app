import React, {useState, useEffect, useContext} from 'react'
import {
    Image,
    SafeAreaView,
    ImageBackground,
    Animated,
    StyleSheet,
    LogBox,
} from 'react-native'

import {AppContext} from '../../App'
import Images from '../../assets/paths'
import {CustomLoader} from '../../components'
import {
    requestUserPermission,
    notificationListener,
} from '../../helpers/PushNotifications'
import {_retrieveData, _retrieveObject} from '../../helpers/AsyncStorageHelper'

const Splash = ({navigation}) => {
    const [loading, setLoading] = useState(true)
    const [logoAnim, setLogoAnim] = useState(new Animated.Value(0))
    const {setToken} = useContext(AppContext)

    const checkToken = async () => {
        const res = await _retrieveData('@token')
        res && res !== null
            ? navigation.navigate('User') && setToken(res) && setLoading(false)
            : navigation.navigate('Auth') && setLoading(false)
    }

    useEffect(() => {
        LogBox.ignoreLogs(['new NativeEventEmitter'])
        requestUserPermission()
        notificationListener()
        Animated.timing(logoAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start(() => checkToken())
    }, [])

    return loading ? (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={Images.BACKGROUND} style={styles.bg}>
                <Animated.View
                    style={{
                        top: logoAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -500],
                        }),
                    }}>
                    <Image source={Images.LOGO} style={styles.image} />
                </Animated.View>
            </ImageBackground>
        </SafeAreaView>
    ) : (
        <CustomLoader />
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
})

export default Splash
