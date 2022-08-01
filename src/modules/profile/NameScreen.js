import React, {useState} from 'react'
import {
    View,
    Text,
    TextInput,
    ImageBackground,
    SafeAreaView,
    StatusBar,
} from 'react-native'

import {styles} from '../../styles/SignupStyles'
import Images from '../../assets/paths'
import {ToastMessage} from '../../helpers/Toast'
import {CustomButton, CustomLoader, Header} from '../../components'
import Colors from '../../constants/Colors'
import {registerUserUrl} from '../../api/endpoints'
import axiosInstance from '../../api/axios'
import {_setData} from '../../helpers/AsyncStorageHelper'
import {getFCMToken} from '../../helpers/PushNotifications'

const SignupScreen = ({navigation, route}) => {
    const {
            container,
            main,
            text,
            textSmall,
            inputContainer,
            shadow,
            textInput,
        } = styles,
        {number, otp} = route.params

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')

    const getData = async () => {
        setLoading(true)
        const fcmToken = await getFCMToken()
        const url = registerUserUrl
        axiosInstance
            .post(url, {
                phoneOtp: otp,
                phoneNumber: number,
                fullName: name,
                fcmToken: fcmToken,
            })
            .then(res => {
                const {responseCode} = res.data
                const {user} = res.data.data
                user &&
                    user !== null &&
                    _setData('@userInfo', JSON.stringify(user))
                if (responseCode === 1) {
                    setLoading(false)
                    ToastMessage('Logged in Successfully')
                    navigation.navigate('User')
                }
            })
            .catch(error => console.log(error))
    }

    const onRegister = () =>
        name === '' ? ToastMessage('Field cant be empty') : getData()

    return loading ? (
        <CustomLoader />
    ) : (
        <SafeAreaView style={container}>
            <StatusBar barStyle={'dark-content'} />
            <Header desc={'Welcome to CADARCH!'} />
            <ImageBackground source={Images.BACKGROUND} style={main}>
                <View style={[shadow, inputContainer]}>
                    <Text style={textSmall}>FULL NAME</Text>
                    <TextInput
                        value={name}
                        placeholder="Enter Full Name"
                        placeholderTextColor={Colors.GRAY}
                        keyboardType={'default'}
                        style={textInput}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <CustomButton onPress={onRegister} title="REGISTER" />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SignupScreen
