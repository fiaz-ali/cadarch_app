import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, ImageBackground} from 'react-native'

import axiosInstance from '../../api/axios'
import {styles} from '../../styles/SignupStyles'
import Images from '../../assets/paths'
import {CustomButton, CustomLoader, Header} from '../../components'
import Colors from '../../constants/Colors'
import {ToastMessage} from '../../helpers/Toast'
import {verifyOtpUrl} from '../../api/endpoints'
import {_setData} from '../../helpers/AsyncStorageHelper'

const OTPCodeScreen = ({navigation, route}) => {
    const {number, phoneOtp} = route.params
    const {container, main, textSmall, text, inputContainer, otpStyle, shadow} =
        styles

    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState('')

    useEffect(() => setOtp(phoneOtp), [])

    const onVerify = () => {
        otp === ''
            ? ToastMessage('Field can not be empty')
            : otp.length !== 4
            ? ToastMessage('Please enter a valid otp')
            : postData()
    }

    const postData = () => {
        setLoading(true)
        const url = verifyOtpUrl
        axiosInstance
            .post(url, {phoneOtp: otp, phoneNumber: number})
            .then(res => {
                const {responseCode} = res.data
                const {token} = res.data.data
                token && token !== null && _setData('@token', token)
                if (responseCode === 1) {
                    setLoading(false)
                    ToastMessage('OTP Code has been verified')
                    navigation.navigate('Name', {number, otp})
                }
            })
            .catch(error => console.log(error))
    }

    return loading ? (
        <CustomLoader />
    ) : (
        <View style={container}>
            <Header desc={false} />
            <ImageBackground source={Images.BACKGROUND} style={main}>
                <Text style={text}>
                    Please enter 6 digit verification code sent to {number}
                </Text>
                <View style={[shadow, inputContainer]}>
                    <Text style={textSmall}>OTP Code</Text>
                    <TextInput
                        placeholder=""
                        placeholderTextColor={Colors.GRAY}
                        maxLength={4}
                        keyboardType={'number-pad'}
                        autoFocus={true}
                        style={otpStyle}
                        onChangeText={setOtp}
                        value={otp}
                    />
                </View>
                <View style={{height: 85}}>
                    <CustomButton onPress={onVerify} title="VERIFY" />
                </View>
            </ImageBackground>
        </View>
    )
}

export default OTPCodeScreen
