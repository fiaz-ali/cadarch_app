import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission()
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        messaging.AuthorizationStatus.PROVISIONAL
    if (enabled) {
        console.log('Authorization Status', authStatus)
    }
}

export const getFCMToken = async () => {
    let fcmToken = await AsyncStorage.getItem('@fcmToken')
    if (fcmToken) {
        return fcmToken
    }
    if (!fcmToken) {
        try {
            let fcmToken = await messaging().getToken()
            if (fcmToken) {
                await AsyncStorage.removeItem('@fcmToken')
                await AsyncStorage.setItem('@fcmToken', fcmToken)
                return fcmToken
            }
        } catch (error) {
            console.log('Error in fcmtoken', error)
        }
    }
}

export const notificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        )
    })
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from background state:',
                    remoteMessage.notification,
                )
            }
        })
    messaging().onMessage(async remoteMessage => {
        console.log('notification on foreground state.....', remoteMessage)
    })
}
