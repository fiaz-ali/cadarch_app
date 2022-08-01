import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'
import {styles} from '../../../styles/NewsStyles'

const NewsDetail = ({navigation, route}) => {
    const {params} = route
    const {newsItem} = params

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={'default'} />
            <ScrollView>
                <ImageBackground style={{flex: 1}} source={Images.BACKGROUND}>
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
                            {route.name || 'News Detail'}
                        </Text>
                    </View>
                    <Image
                        source={
                            newsItem?.attachmentsPath[0].path || Images.NO_IMG
                        }
                        style={styles.image}
                    />
                    <View style={{padding: 20}}>
                        <Text style={styles.heading}>{newsItem?.title}</Text>
                        <Text style={styles.description}>
                            {newsItem?.details || 'No description Available'}
                        </Text>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewsDetail
