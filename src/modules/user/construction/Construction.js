import React from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Image,
    StatusBar,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {CONSTRUCTION_SERVICES} from '../../../data/dummy-data'
import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'

const Construction = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={'dark-content'} />
            <ImageBackground source={Images.BACKGROUND} style={{flex: 1}}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{
                            width: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000,
                        }}
                        onPress={() => navigation.pop()}>
                        <Feather
                            name={'arrow-left'}
                            color={Colors.PRIMARY}
                            size={28}
                        />
                    </TouchableOpacity>
                    <View style={{flex: 1, marginLeft: -100}}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 24,
                                color: Colors.PRIMARY,
                            }}>
                            Construction
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 12,
                                color: Colors.PRIMARY,
                            }}>
                            Place an order for your construction project
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, padding: 10}}>
                    <FlatList
                        data={CONSTRUCTION_SERVICES}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() =>
                                    index == 0
                                        ? navigation.navigate(
                                              'ConstructionPackages',
                                              {type: 0},
                                          )
                                        : navigation.navigate(
                                              'ConstructionPackages',
                                              {type: 1},
                                          )
                                }>
                                <View
                                    style={{
                                        width: 95,
                                        height: 95,
                                        backgroundColor: Colors.LIGHT_GRAY,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopLeftRadius: 10,
                                        borderBottomLeftRadius: 10,
                                    }}>
                                    <Image
                                        source={
                                            item.icon
                                                ? item.icon
                                                : Images.ESTIMATOR
                                        }
                                        style={{width: 75, height: 75}}
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
                                    {item.subText != '' ? (
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                color: Colors.PRIMARY,
                                            }}>
                                            {item.subText}
                                        </Text>
                                    ) : null}
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
const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHTER_GRAY,
        borderRadius: 10,
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        height: 100,
    },
})

export default Construction
