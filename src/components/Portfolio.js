import React from 'react'
import {Linking} from 'react-native'

import {PORTFOLIO} from '../constants/Urls'
import NewsCard from './NewsCard'
import Images from '../assets/paths'

const Portfolio = () => {
    return (
        <NewsCard
            onPress={() => Linking.openURL(PORTFOLIO)}
            img={Images.PORTFOLIO}
            title={'Our Portfolio'}
            desc={'Have a look on our Architecture &amp; Construction projects'}
            btnText={'View Portfolio'}
        />
    )
}

export default Portfolio
