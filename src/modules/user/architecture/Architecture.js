import React from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'
import {styles} from '../../../styles/ArchitectureStyles'
import {ARCHITECTURE_SERVICES} from '../../../data/dummy-data'

const Architecture = ({navigation}) => {
    const {header, back, title, desc, option, imgCont, imgSize, subTextStyle} =
        styles

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={Images.BACKGROUND} style={{flex: 1}}>
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
                    <View style={{flex: 1, marginLeft: -100}}>
                        <Text style={title}>Architecture</Text>
                        <Text style={desc}>
                            Place an order for your architecture project
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, padding: 10}}>
                    <FlatList
                        data={ARCHITECTURE_SERVICES}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <TouchableOpacity
                                style={option}
                                onPress={() =>
                                    navigation.navigate(
                                        'ArchitecturePackageDetails',
                                        {
                                            pkg: {
                                                id: 5,
                                                icon: Images.ESTIMATOR,
                                                rate: 55000,
                                                details: [
                                                    'Architectural building plans signed by licensed architect',
                                                    'Structural building plans signed by licensed architect',
                                                    'Soundness and stability certificate by Engineer',
                                                    'Calculation book',
                                                ],
                                            },
                                            type: index,
                                        },
                                    )
                                }>
                                <View style={imgCont}>
                                    <Image
                                        source={
                                            item.icon
                                                ? item.icon
                                                : Images.ESTIMATOR
                                        }
                                        style={imgSize}
                                    />
                                </View>
                                <View style={{flex: 1, paddingLeft: 20}}>
                                    <Text
                                        style={{
                                            fontSize:
                                                item.subText == '' ? 18 : 16,
                                            color: Colors.PRIMARY,
                                            fontWeight: 'bold',
                                        }}>
                                        {item.text}
                                    </Text>
                                    {item.subText != '' && (
                                        <Text style={subTextStyle}>
                                            {item.subText}
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Architecture
