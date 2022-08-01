import React, {useContext} from 'react'
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import {AppContext} from '../../../App'
import Images from '../../../assets/paths'
import {NewsCard} from '../../../components'
import Colors from '../../../constants/Colors'
import {styles} from '../../../styles/NewsStyles'

const News = ({navigation, route}) => {
    const {news} = useContext(AppContext)

    const onShowDetail = (item, index) => {
        var newsItem = news.find(item => item.id === news[index].id)
        navigation.navigate('News Detail', {newsItem: newsItem})
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={Images.BACKGROUND}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backIcon}
                        onPress={() => navigation.pop()}>
                        <Feather
                            name={'arrow-left'}
                            color={Colors.PRIMARY}
                            size={28}
                        />
                    </TouchableOpacity>
                    <Text style={styles.screenTitle}>
                        {route?.name || 'News'}
                    </Text>
                </View>
                <ScrollView>
                    {news?.map((item, index) => {
                        return (
                            <NewsCard
                                key={item._id}
                                img={item.attachmentsPath[0].path}
                                title={item.title}
                                desc={item.details}
                                btnText={'View Details'}
                                onPress={() => onShowDetail(item, index)}
                            />
                        )
                    })}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default News
