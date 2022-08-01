import React from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    StatusBar,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {
    CONSTRUCTION_RESIDENTIAL,
    COSNTRUCTION_COMMERCIAL,
} from '../../../data/dummy-data'
import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'
import {styles} from '../../../styles/ConstructionStyles'

const ConstructionPackages = ({navigation, route}) => {
    const {type} = route?.params
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={'dark-content'} />
            <ImageBackground source={Images.BACKGROUND} style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.goBack}
                            onPress={() => navigation.pop()}>
                            <Feather
                                name={'arrow-left'}
                                color={Colors.PRIMARY}
                                size={28}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>
                            {type == 0 ? 'Residential' : 'Commercial'}
                        </Text>
                    </View>
                    <View style={{flex: 1, padding: 10}}>
                        <FlatList
                            data={
                                type == 0
                                    ? CONSTRUCTION_RESIDENTIAL
                                    : COSNTRUCTION_COMMERCIAL
                            }
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() =>
                                        navigation.navigate(
                                            'ConstructionPackage',
                                            {pkg: item, type: type},
                                        )
                                    }>
                                    <View style={styles.imgContainer}>
                                        <Image
                                            source={
                                                item.icon || Images.ESTIMATOR
                                            }
                                            style={{width: 75, height: 75}}
                                        />
                                    </View>
                                    <View style={styles.detailsContainer}>
                                        <Text style={styles.textBold}>
                                            {item.text}
                                        </Text>
                                        {item.subText != '' && (
                                            <Text
                                                style={{color: Colors.PRIMARY}}>
                                                {item.subText}
                                            </Text>
                                        )}
                                        <View style={styles.moreDetails}>
                                            <Text style={styles.textWhite}>
                                                Starting from{' '}
                                            </Text>
                                            <Text style={styles.priceText}>
                                                PKR {item.rate}/ sq ft
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ConstructionPackages
