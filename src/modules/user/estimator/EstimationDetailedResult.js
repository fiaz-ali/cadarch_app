import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ScrollView,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'
import LottieView from 'lottie-react-native'

const EstimationDetailedResult = ({navigation, route}) => {
    const {steps, estimationType, estimate, selectedLang, coveredArea} =
        route.params
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
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
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                marginLeft: -100,
                                fontSize: 20,
                                color: Colors.PRIMARY,
                            }}>
                            Detailed Estimation
                        </Text>
                    </View>
                    <View style={styles.estimation}>
                        <View
                            style={{
                                width: 100,
                                height: 200,
                                backgroundColor: Colors.PRIMARY,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                            }}>
                            <LottieView
                                style={{
                                    width: 100,
                                    position: 'absolute',
                                    top: 20,
                                }}
                                autoPlay
                                source={require('../../../assets/json/estimator-residential.json')}
                                loop={false}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                padding: 10,
                                alignItems:
                                    selectedLang == 'en'
                                        ? 'flex-start'
                                        : 'flex-end',
                            }}>
                            <Text style={{fontSize: 12, color: Colors.PRIMARY}}>
                                Detailed estimate for {estimationType}
                            </Text>
                            <Text style={{fontSize: 18, color: Colors.PRIMARY}}>
                                Lumpsum
                            </Text>
                            <Text
                                style={{
                                    fontSize: 24,
                                    color: Colors.PRIMARY,
                                    fontWeight: 'bold',
                                }}>
                                PKR {estimate}
                            </Text>

                            <Text style={{fontSize: 18, color: Colors.PRIMARY}}>
                                Per square feet
                            </Text>
                            <Text
                                style={{
                                    fontSize: 24,
                                    color: Colors.PRIMARY,
                                    fontWeight: 'bold',
                                }}>
                                PKR {estimate / coveredArea}
                            </Text>

                            <Text style={{fontSize: 18, color: Colors.PRIMARY}}>
                                Total cover area
                            </Text>
                            <Text
                                style={{
                                    fontSize: 24,
                                    color: Colors.PRIMARY,
                                    fontWeight: 'bold',
                                }}>
                                {coveredArea} Square Feet
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 16}}>
                        {steps.map((element, i) => (
                            <View
                                key={i}
                                style={{
                                    padding: 10,
                                    backgroundColor: Colors.WHITE,
                                    marginVertical: 2,
                                    borderRadius: 5,
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: Colors.PRIMARY,
                                    }}>
                                    {element.heading}
                                </Text>
                                <Text style={{color: Colors.SECONDARY}}>
                                    {
                                        element.options.filter(
                                            o => o.selected,
                                        )[0].text
                                    }
                                </Text>
                            </View>
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    service: {
        backgroundColor: Colors.LIGHT_GRAY,
        height: 150,
        width: Dimensions.get('window').width / 2 - 40,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
    estimation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHTER_GRAY,
        borderRadius: 5,
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        marginTop: 15,
        margin: 10,
    },

    estimatorDetails: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHTER_GRAY,
        borderRadius: 5,
        shadowColor: Colors.GRAY,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        marginTop: 20,
        width: Dimensions.get('window').width - 32,
    },
    estimationRow: {
        margin: 5,
        padding: 5,
        paddingVertical: 10,
    },
    hr: {
        height: 1,
        backgroundColor: Colors.GRAY,
        width: Dimensions.get('window').width - 50,
    },
})

export default EstimationDetailedResult
