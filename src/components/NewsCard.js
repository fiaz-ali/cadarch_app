import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import {useRoute} from '@react-navigation/native'

import Colors from '../constants/Colors'
import Images from '../assets/paths'
import {styles} from '../styles/HomeStyles'

const NewsCard = props => {
    const route = useRoute()
    const {img, title, desc, btnText, onPress} = props
    const {
        portfolio,
        imageContainer,
        image,
        textContainer,
        heading,
        text,
        linkContainer,
        link,
    } = styles

    // error in image path so using dummy img for testing
    const src = img ? img : Images.NO_IMG

    return (
        <TouchableOpacity
            style={[portfolio, {margin: route.name === 'News' ? 5 : 15}]}
            onPress={onPress}>
            <View style={imageContainer}>
                <Image source={Images.NO_IMG} style={image} />
            </View>
            <View style={textContainer}>
                <Text style={heading}>{title}</Text>
                <Text style={text}>{desc}</Text>
                <TouchableOpacity style={linkContainer} onPress={onPress}>
                    <Text style={link}>{btnText}</Text>
                    <Feather
                        name={'chevron-right'}
                        color={Colors.SECONDARY}
                        size={14}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default NewsCard
