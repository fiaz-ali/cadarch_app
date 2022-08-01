import React, {useState} from 'react'
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native'

import LottieView from 'lottie-react-native'

import Colors from '../../../constants/Colors'
import {orderPlacedStyles as styles} from '../../../styles/OrdersStyles'

const OrderPlaced = ({navigation}) => {
    const [showEstimate, setShowEstimate] = useState(false)

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.animCont}>
                <LottieView
                    style={{width: 200}}
                    autoPlay
                    source={require('../../../assets/json/tick.json')}
                    loop={false}
                    onAnimationFinish={() => setShowEstimate(true)}
                />
                <Text style={styles.textBold}>Thank you!</Text>
                <Text style={{textAlign: 'center', color: Colors.PRIMARY}}>
                    {' '}
                    Your order has been received.
                </Text>
                <Text style={{color: Colors.PRIMARY}}>
                    Our representative will get in touch with you soon.
                </Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.viewOrderBtn}
                        onPress={() => navigation.navigate('OrdersTopStack')}>
                        <Text style={styles.secText}>View Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnHome}
                        onPress={() => navigation.navigate('User')}>
                        <Text style={styles.secText}>Back to Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OrderPlaced
