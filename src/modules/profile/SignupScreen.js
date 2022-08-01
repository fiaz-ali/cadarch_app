import React, {useState} from 'react'
import {
    View,
    Text,
    TextInput,
    Image,
    Alert,
    ImageBackground,
} from 'react-native'

import {CustomButton, CustomLoader, Header} from '../../components'
import {pakPhoneNoRegex} from '../../constants/variables'
import axiosInstance from '../../api/axios'
import {styles} from '../../styles/SignupStyles'
import Images from '../../assets/paths'
import {authenticateUserUrl} from '../../api/endpoints'
import {ToastMessage} from '../../helpers/Toast'
import Colors from '../../constants/Colors'

const SignupScreen = ({navigation}) => {
    const {
        container,
        main,
        text,
        textSmall,
        textLarge,
        image,
        inputContainer,
        shadow,
        inputRow,
        textInput,
    } = styles

    const [number, setNumber] = useState('')
    const [loading, setLoading] = useState('')

    const onVerification = () => {
        setLoading(true)
        const url = authenticateUserUrl
        axiosInstance
            .post(url, {phoneNumber: `+92${number}`})
            .then(res => {
                const {responseCode, data} = res.data
                const {phoneOtp} = data.data
                if (responseCode === 1) {
                    setLoading(false)
                    ToastMessage('OTP Code has been sent to your mobile number')
                    navigation.navigate('OTP', {
                        number: `+92${number}`,
                        phoneOtp,
                    })
                }
            })
            .catch(error => console.log('error', error))
    }

    const onSignup = () => {
        console.log(number.match(pakPhoneNoRegex), 'validate')
        number === ''
            ? ToastMessage('Field cant be empty')
            : number.length !== 10
            ? ToastMessage('Please Enter a valid number')
            : number.match(pakPhoneNoRegex)
            ? Alert.alert('CADARCH', `Do you wish to verify +92${number} ?`, [
                  {
                      text: 'NO',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                  },
                  {text: 'YES', onPress: onVerification},
              ])
            : ToastMessage('Please Enter a valid number')
    }

    return loading ? (
        <CustomLoader />
    ) : (
        <View style={container}>
            <Header
                desc={
                    'One stop solution for all your renovation, architecture and construction needs'
                }
            />
            <ImageBackground source={Images.BACKGROUND} style={main}>
                <Text style={text}>
                    Please enter your phone number to continue
                </Text>
                <View style={[shadow, inputContainer]}>
                    <Text style={textSmall}>PHONE NUMBER</Text>
                    <View style={inputRow}>
                        <Image source={Images.PAK_FLAG} style={image} />
                        <Text style={textLarge}>+92</Text>
                        <TextInput
                            value={number}
                            placeholder="33312345678"
                            placeholderTextColor={Colors.GRAY}
                            keyboardType={'number-pad'}
                            maxLength={10}
                            style={textInput}
                            onChangeText={num => setNumber(num)}
                        />
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <CustomButton onPress={onSignup} title="PROCEED" />
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignupScreen
