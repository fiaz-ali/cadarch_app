import React, {useEffect, useState, useContext} from 'react'
import {View} from 'react-native'
import axios from 'axios'

import {CustomLoader, NoData} from '../../../components'
import {baseUrl, renovationOrdersUrl} from '../../../api/endpoints'
import {AppContext} from '../../../App'
import Orders from './components/Orders'

const RenovationOrders = ({navigation}) => {
    const {token, userInfo} = useContext(AppContext)
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])

    const getData = () => {
        axios
            .create({
                baseURL: baseUrl,
                params: {
                    page: 1,
                    limit: 10,
                    userId: userInfo._id,
                },
            })
            .get(renovationOrdersUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => {
                const {responseCode, data, responseMessage} = res.data
                responseCode === 1
                    ? setOrders(...orders, data.data)
                    : console.log({responseCode, responseMessage})
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => getData(), [])

    return (
        <View style={{flex: 1}}>
            {loading ? (
                <CustomLoader />
            ) : (
                <View style={{flex: 1}}>
                    {orders.length == 0 ? <NoData /> : <Orders data={orders} />}
                </View>
            )}
        </View>
    )
}

export default RenovationOrders
