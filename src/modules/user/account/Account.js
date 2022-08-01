import React, {useContext} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Linking,
    Alert,
    Image,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Colors from '../../../constants/Colors'
import Images from '../../../assets/paths'
import {styles} from '../../../styles/AccountStyles'
import {AppContext} from '../../../App'
import {_clearData} from '../../../helpers/AsyncStorageHelper'
import {
    WA_ME_URL,
    FB_URL,
    INSTA_URL,
    YOUTUBE_URL,
    TERMS_URL,
    PRIVACY_POLICY_URL,
} from '../../../constants/Urls'
import {ToastMessage} from '../../../helpers/Toast'

const Account = ({navigation}) => {
    const {
            container,
            rowCenter,
            rowReverse,
            image,
            whatsapp,
            logout,
            insta,
            privacy,
            terms,
            phoneNo,
            name,
            linksCont,
            whatsappText,
            icon,
            followBtn,
        } = styles,
        {WHITE, PRIMARY} = Colors,
        {INSTAGRAM, FACEBOOK, YOUTUBE, LOGO_LIGHT} = Images
    const {userInfo} = useContext(AppContext)

    const _logout = () => {
        _clearData()
        ToastMessage('Logging Out')
        navigation.reset({
            index: 0,
            routes: [{name: 'Auth'}],
        })
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={container}>
                <View style={rowCenter}>
                    <Feather name={'user'} color={WHITE} size={36} />
                    <View style={{paddingLeft: 5}}>
                        <Text style={name}>{userInfo?.fullName}</Text>
                        <Text style={phoneNo}>{userInfo?.phoneNumber}</Text>
                    </View>
                </View>
                <View style={rowReverse}>
                    <Image source={LOGO_LIGHT} style={image} />
                </View>
            </View>
            <TouchableOpacity
                style={whatsapp}
                onPress={() => Linking.openURL(WA_ME_URL)}>
                <FontAwesome name={'whatsapp'} size={20} color={PRIMARY} />
                <Text style={whatsappText}>WhatsApp Us</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={logout}
                onPress={() => {
                    Alert.alert('CADARCH', 'Do you really wish to logout?', [
                        {
                            text: 'No',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {
                            text: 'Yes',
                            onPress: _logout,
                        },
                    ])
                }}>
                <Feather name={'log-out'} color={PRIMARY} size={20} />
                <Text style={{paddingLeft: 16, color: PRIMARY}}>Logout</Text>
            </TouchableOpacity>
            <View style={linksCont}>
                <Text style={followBtn}>FOLLOW US</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => Linking.openURL(FB_URL)}>
                        <Image source={FACEBOOK} style={icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(YOUTUBE_URL)}>
                        <Image source={YOUTUBE} style={insta} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(INSTA_URL)}>
                        <Image source={INSTAGRAM} style={insta} />
                    </TouchableOpacity>
                </View>
                <View style={privacy}>
                    <Text
                        style={terms}
                        onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
                        Privacy Policy
                    </Text>
                    <Text
                        style={[terms, {paddingLeft: 16}]}
                        onPress={() => Linking.openURL(TERMS_URL)}>
                        Terms of use
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Account
