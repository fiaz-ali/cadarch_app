import React, {useEffect} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    ScrollView,
    LogBox,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import Colors from '../../../constants/Colors'
import Images from '../../../assets/paths'
import {styles} from '../../../styles/RenovationStyles'
import {SERVICES} from '../../../data/dummy-data'

const Renovation = ({navigation}) => {
    const {
        header,
        back,
        headerText,
        title,
        desc,
        itemsContainer,
        image,
        itemText,
        service,
    } = styles

    useEffect(
        () => LogBox.ignoreLogs(['VirtualizedLists should never be nested']),
        [],
    )

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={Images.BACKGROUND} style={{flex: 1}}>
                <ScrollView nestedScrollEnabled={true}>
                    <View style={header}>
                        <TouchableOpacity
                            style={back}
                            onPress={() => navigation.pop()}>
                            <Feather
                                name={'arrow-left'}
                                color={Colors.PRIMARY}
                                size={28}
                            />
                        </TouchableOpacity>
                        <View style={headerText}>
                            <Text style={title}>Renovation</Text>
                            <Text style={desc}>
                                Place an order for your renovation project
                            </Text>
                        </View>
                    </View>
                    <View style={itemsContainer}>
                        <FlatList
                            data={SERVICES}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) => (
                                <TouchableOpacity
                                    style={service}
                                    onPress={() =>
                                        navigation.navigate(
                                            'RenovationFormAlt',
                                            {
                                                service: item.name,
                                                message: item.message,
                                            },
                                        )
                                    }>
                                    <Image source={item.icon} style={image} />
                                    <Text style={itemText}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id?.toString()}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Renovation
