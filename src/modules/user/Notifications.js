import React, {useState, useEffect} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import Images from '../../assets/paths'
import {styles} from '../../styles/NotificationStyles'
import Colors from '../../constants/Colors'
import moment from 'moment'

const Notifications = ({navigation}) => {
    const {PRIMARY, SECONDARY, SECONDARY_LIGHT, WHITE, GRAY} = Colors
    const {goBack, heading, center, time, empty, notifItem, noNotifCont} =
        styles
    const [loading, setLoading] = useState(true)
    const [notifications, setNotifications] = useState([])

    useEffect(() => setLoading(false), [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="dark-content" />
            <View style={goBack}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Feather color={WHITE} name={'arrow-left'} size={30} />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <Text style={heading}>Notifications</Text>
                </View>
            </View>
            {loading ? (
                <View style={center}>
                    <ActivityIndicator size={64} color={SECONDARY} />
                </View>
            ) : (
                <ScrollView>
                    {notifications.map((item, index) => (
                        <TouchableOpacity
                            style={[
                                notifItem,
                                {
                                    borderColor:
                                        item.is_read == 1 ? GRAY : SECONDARY,
                                    backgroundColor:
                                        item.is_read == 1
                                            ? WHITE
                                            : SECONDARY_LIGHT,
                                },
                            ]}>
                            <Text style={{fontWeight: 'bold'}}>
                                {item.title}
                            </Text>
                            <Text style={{color: PRIMARY}}>{item.body}</Text>
                            <View style={time}>
                                <Text style={{fontSize: 12, paddingLeft: 5}}>
                                    {moment(item.created_at).fromNow()}
                                </Text>
                                <Feather name={'clock'} size={14} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
            {!loading && notifications.length == 0 && (
                <View style={noNotifCont}>
                    <Image source={Images.NO_NOTIFICATIONS} style={empty} />
                    <Text style={{marginTop: 20, color: Colors.PRIMARY}}>
                        You don't have any notifications
                    </Text>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Notifications
