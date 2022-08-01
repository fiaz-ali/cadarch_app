import React, {useContext} from 'react'
import Slick from 'react-native-slick'
import {useNavigation} from '@react-navigation/native'

import {AppContext} from '../../../App'
import {NewsCard} from '../../../components'
import {TouchableOpacity} from 'react-native'

const Slider = props => {
    const {data} = props
    const {setNews} = useContext(AppContext)
    const navigation = useNavigation()

    const settings = {
        dotStyle: {display: 'none'},
        activeDotStyle: {display: 'none'},
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Slick {...settings}>
            {data.map((item, index) => (
                <TouchableOpacity key={item?._id}>
                    <NewsCard
                        img={item?.attachmentsPath[0]?.path}
                        title={item?.title}
                        desc={item?.details}
                        btnText={'View Details'}
                        onPress={() => {
                            setNews(data)
                            navigation.navigate('News Stack')
                        }}
                    />
                </TouchableOpacity>
            ))}
        </Slick>
    )
}

export default Slider
