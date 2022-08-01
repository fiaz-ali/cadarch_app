import {PermissionsAndroid, Alert, Linking, Platform} from 'react-native'
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions'
import {readFile} from 'react-native-fs'

export const locationPermission = () => {
    const IS_ANDROID = Platform.OS === 'android'
    if (!IS_ANDROID) {
        check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            .then(result => {
                if (result != RESULTS.GRANTED) {
                    Alert.alert(
                        'CADARCH',
                        'We need to access your current location to fullfill your orders',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => {},
                                style: 'cancel',
                            },
                            {
                                text: 'Open Settings',
                                onPress: () => Linking.openSettings(),
                            },
                        ],
                        {cancelable: false},
                    )
                }
            })
            .catch(error => console.log(error))
    }
}

export const recordPermissions = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Permissions for write access',
                    message: 'Give permission to your storage to write a file',
                    buttonPositive: 'ok',
                },
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the storage')
            } else {
                Alert.alert('CADArch', 'You must allow to proceed further.')
                navigation.pop()
                return
            }
        } catch (err) {
            console.warn(err)
            return
        }
    }
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    title: 'Permissions for write access',
                    message: 'Give permission to your storage to write a file',
                    buttonPositive: 'ok',
                },
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera')
            } else {
                Alert.alert('CADArch', 'You must allow to proceed further.')
                navigation.pop()
                return
            }
        } catch (err) {
            console.warn(err)
            return
        }
    }
}

export const getUriToBase64 = async audio => {
    const base64String = await readFile(audio, 'base64')
    const audioObj = {
        uri: `data:audio/m4a;base64,${base64String}`,
    }
    return audioObj
}
