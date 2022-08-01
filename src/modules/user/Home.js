import React, {useState, useEffect, useContext} from 'react'
import {View, ImageBackground} from 'react-native'

import {Portfolio, ModuleItem, Header, CustomLoader} from '../../components'
import {
    _retrieveData,
    _retrieveObject,
    _removeItem,
} from '../../helpers/AsyncStorageHelper'
import Images from '../../assets/paths'
import {AppContext} from '../../App'
import Slider from './news/Slider'
import {styles} from '../../styles/HomeStyles'
import axiosInstance from '../../api/axios'
import {newsUrl} from '../../api/endpoints'

const Home = ({navigation}) => {
    const {container, main, row} = styles,
        {navigate} = navigation

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {setToken, setUserInfo} = useContext(AppContext)

    const getToken = async () => {
        const res = await _retrieveData('@token')
        res && res != null && (await setToken(res))
        return res
    }

    const getUserInfo = async () => {
        const res = await _retrieveObject('@userInfo')
        res && res != null && (await setUserInfo(res))
    }

    const getData = token => {
        const url = newsUrl
        const axiosHeaders = {headers: {authorization: `Bearer ${token}`}}
        axiosInstance
            .get(url, axiosHeaders)
            .then(res => {
                const {responseCode, responseMessage, data} = res.data
                responseCode === 1
                    ? setData(data?.data)
                    : responseMessage === 'Token is not valid'
                    ? (_removeItem('@token'),
                      navigation.reset({
                          index: 0,
                          routes: [{name: 'Auth'}],
                      }))
                    : console.log('Error in res')
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getToken().then(e => getData(e))
        getUserInfo()
    }, [])

    return loading ? (
        <CustomLoader />
    ) : (
        <View style={container}>
            <Header home={true} />
            <ImageBackground source={Images.BACKGROUND} style={main}>
                <Slider data={data} />
                <View style={row}>
                    <ModuleItem
                        onPress={() => navigate('Estimator Stack')}
                        name="Cost Estimator"
                        icon={Images.ESTIMATOR}
                    />
                    <ModuleItem
                        onPress={() => navigate('Renovation Stack')}
                        name="Renovation"
                        icon={Images.RENOVATION}
                    />
                </View>
                <View style={row}>
                    <ModuleItem
                        onPress={() => navigate('Architecture Stack')}
                        name="Architecture"
                        icon={Images.ARCHITECTURE}
                    />
                    <ModuleItem
                        onPress={() => navigate('Construction Stack')}
                        name="Construction"
                        icon={Images.CONSTRUCTION}
                    />
                </View>
                <Portfolio />
            </ImageBackground>
        </View>
    )
}

export default Home
