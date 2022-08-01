import React, {useState, useContext} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Image,
} from 'react-native'
import Modal from 'react-native-modal'
import {WebView} from 'react-native-webview'

import Colors from '../../constants/Colors'
import Images from '../../assets/paths'
import {AppContext} from '../../App'
import {styles} from '../../styles/SupportStyles'
const {width} = Dimensions.get('screen')

const Chat = ({navigation}) => {
    const [chatOptionsModal, setChatOptionsModal] = useState(true)
    const [chatOption, setChatOption] = useState('')

    const {userInfo, setUserInfo} = useContext(AppContext)

    const onBackPress = () => {
        setChatOptionsModal(false)
        navigation.pop()
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.LIGHT_GRAY}}>
            <StatusBar barStyle={'dark-content'} />
            <WebView
                source={{
                    uri:
                        'https://tawk.to/chat/5f4e75a8f0e7167d000c9792/default?name=' +
                        userInfo?.fullName +
                        '&phone=' +
                        userInfo?.phoneNumber +
                        '&service=' +
                        chatOption,
                }}
                style={{width: width}}
            />
            {chatOptionsModal && (
                <Modal
                    isVisible={chatOptionsModal}
                    onBackButtonPress={onBackPress}
                    onBackdropPress={onBackPress}>
                    <View style={styles.supportContainer}>
                        <Text style={styles.supportText}>
                            What do you want support for?
                        </Text>
                        <TouchableOpacity
                            style={styles.maintenanceContainer}
                            onPress={() => {
                                setChatOptionsModal(false)
                                setChatOption('Maintenance')
                            }}>
                            <Image
                                source={Images.MAINTENANCE}
                                style={styles.img}
                            />
                            <Text style={styles.textPrime}>Maintenance</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.moduleContainer}
                            onPress={() => {
                                setChatOptionsModal(false)
                                setChatOption('Renovation')
                            }}>
                            <Image
                                source={Images.RENOVATION}
                                style={styles.img}
                            />
                            <Text style={styles.textPrime}>Renovation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.moduleContainer}
                            onPress={() => {
                                setChatOptionsModal(false)
                                setChatOption('Architecture')
                            }}>
                            <Image
                                source={Images.ARCHITECTURE}
                                style={styles.img}
                            />
                            <Text style={styles.textPrime}>Architecture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.moduleContainer}
                            onPress={() => {
                                setChatOptionsModal(false)
                                setChatOption('Construction')
                            }}>
                            <Image
                                source={Images.CONSTRUCTION}
                                style={styles.img}
                            />
                            <Text style={styles.textPrime}>Construction</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.moduleContainer}
                            onPress={() => {
                                setChatOptionsModal(false)
                                setChatOption('Construction Cost Estimator')
                            }}>
                            <Image
                                source={Images.ESTIMATOR}
                                style={styles.img}
                            />
                            <Text style={styles.textPrime}>
                                Construction Cost Estimator
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    )
}

export default Chat
