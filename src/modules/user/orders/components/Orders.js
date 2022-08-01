import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'

import moment from 'moment'

import {styles} from '../../../../styles/OrdersStyles'
import RenderImage from './RenderImage'

const Orders = data => {
    const renderOrder = ({item, index}) => (
        <TouchableOpacity style={styles.order}>
            <View style={styles.imageContainer}>
                {RenderImage(item.orderType)}
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>
                    {moment(item.created_at).format('LLLL')}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.orderId}>Order # {index + 1}</Text>
                        {item.orderType === 'renovation' && (
                            <Text style={{fontSize: 14}}>
                                {item.renovationType || 'N/A'}
                            </Text>
                        )}
                    </View>
                    <View style={styles.verticallyCenter}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeStatus}>
                                {item.isFollowUp ? 'In Progress' : 'Pending'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <FlatList
            data={data?.data}
            renderItem={renderOrder}
            keyExtractor={item => item._id.toString()}
        />
    )
}

export default Orders
