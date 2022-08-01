import React, {useState} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
    Dimensions,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import LottieView from 'lottie-react-native'

import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'

const EstimationResult = ({navigation, route}) => {
    const [commercialEstimate, setCommercialEstimate] = useState(0)
    const [coveredArea, setCoveredArea] = useState('')

    console.log('idhr aoooooooooooooooooooooooooo')

    const renderEstimation = () => {
        const {constructionType} = route.params
        const {
            estimation,
            location,
            plot,
            basement,
            workType,
            estimationType,
            selectedLang,
        } = route.params

        if (constructionType?.text === 'Residential') {
            return (
                <View style={{flex: 1, alignItems: 'center', padding: 16}}>
                    <View
                        style={{
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
                            height: 150,
                            marginTop: 15,
                        }}>
                        <View
                            style={{
                                width: 100,
                                height: 150,
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
                                source={
                                    '../../../assets/json/estimator-residential.json'
                                }
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
                            <Text
                                style={{
                                    fontSize: 30,
                                    color: Colors.PRIMARY,
                                    fontWeight: 'bold',
                                }}>
                                PKR {estimation}
                            </Text>
                            {estimationType.text == 'With Material' && (
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: Colors.PRIMARY,
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'This is just a rough estimate. Would you like a detailed estimate?'
                                        : 'یہ محض ایک تخمینہ ہے۔ کیا آپ تفصیلی اندازہ لگائیں گے؟'}
                                </Text>
                            )}
                            {estimationType.text == 'With Material' && (
                                <TouchableOpacity
                                    style={{
                                        flexDirection:
                                            selectedLang == 'en'
                                                ? 'row'
                                                : 'row-reverse',
                                        width: 150,
                                        height: 40,
                                        backgroundColor: Colors.PRIMARY,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 5,
                                        padding: 5,
                                        marginTop: 5,
                                    }}
                                    onPress={() => {
                                        navigation.navigate(
                                            'DetailedEstimator',
                                            {
                                                constructionType,
                                                location,
                                                basement,
                                                workType,
                                                coveredArea:
                                                    basement?.text == 'Yes'
                                                        ? plot.withBasement
                                                        : plot.area,
                                                rate:
                                                    basement?.text == 'Yes'
                                                        ? estimation /
                                                          plot.withBasement
                                                        : estimation /
                                                          plot.area,
                                            },
                                        )
                                    }}>
                                    <Text
                                        style={{
                                            flex: 1,
                                            color: Colors.SECONDARY,
                                            paddingLeft: 5,
                                        }}>
                                        {selectedLang == 'en'
                                            ? 'Detailed Estimate'
                                            : 'تفصیلی تخمینہ'}
                                    </Text>
                                    <Feather
                                        name={
                                            selectedLang == 'en'
                                                ? 'chevron-right'
                                                : 'arrow-left'
                                        }
                                        color={Colors.SECONDARY}
                                        size={16}
                                    />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <View style={styles.estimatorDetails}>
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: Colors.PRIMARY,
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'Construction Type'
                                        : 'تعمیراتی قسم'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: Colors.PRIMARY,
                                    }}>
                                    {selectedLang == 'en'
                                        ? constructionType.text
                                        : constructionType.textUrdu}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: Colors.PRIMARY,
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en' ? 'Location' : 'مقام'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: Colors.PRIMARY,
                                    }}>
                                    {selectedLang == 'en'
                                        ? location.text
                                        : location.textUrdu}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: Colors.PRIMARY,
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en' ? 'Plot' : 'پلاٹ'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: Colors.PRIMARY,
                                    }}>
                                    {selectedLang == 'en'
                                        ? plot.text
                                        : plot.textUrdu}{' '}
                                    (
                                    {selectedLang == 'en'
                                        ? plot.subText
                                        : plot.subTextUrdu}
                                    )
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />

                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: Colors.PRIMARY,
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'Basement'
                                        : 'تہہ خانے'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: Colors.PRIMARY,
                                    }}>
                                    {selectedLang == 'en'
                                        ? basement?.text
                                        : basement?.textUrdu}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: Colors.PRIMARY,
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'Work Type'
                                        : 'کام کی قسم'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: Colors.PRIMARY,
                                    }}>
                                    {selectedLang == 'en'
                                        ? workType.text
                                        : workType.textUrdu}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: Colors.PRIMARY,
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'Estimation Type'
                                        : 'تخمینہ کی قسم'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: Colors.PRIMARY,
                                    }}>
                                    {selectedLang == 'en'
                                        ? estimationType.text
                                        : estimationType.textUrdu}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{flex: 1, alignItems: 'center', padding: 16}}>
                    <View style={[styles.estimation, {height: 250}]}>
                        <View
                            style={{
                                width: 100,
                                height: 250,
                                backgroundColor: Colors.PRIMARY,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                            }}>
                            <LottieView
                                style={{
                                    width: 250,
                                    position: 'absolute',
                                    top: 20,
                                }}
                                autoPlay
                                source={require('../../../assets/json/estimator-commercial.json')}
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
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: Colors.PRIMARY,
                                    fontWeight: 'bold',
                                }}>
                                PKR {estimation} / sq ft
                            </Text>
                            <Text style={{fontSize: 12, color: Colors.PRIMARY}}>
                                {selectedLang == 'en'
                                    ? 'Enter your covered area'
                                    : 'اپنا احاطہ کرتا علاقہ داخل کریں'}
                            </Text>
                            <View
                                style={{
                                    height: 40,
                                    marginTop: 10,
                                    flexDirection:
                                        selectedLang == 'en'
                                            ? 'row'
                                            : 'row-reverse',
                                }}>
                                <View
                                    style={{
                                        borderColor: Colors.GRAY,
                                        borderWidth: 1,
                                        flex: 2,
                                    }}>
                                    <TextInput
                                        style={{flex: 1, color: Colors.PRIMARY}}
                                        value={coveredArea}
                                        keyboardType={'number-pad'}
                                        placeholder={
                                            selectedLang == 'en'
                                                ? 'Covered Area'
                                                : 'احاطہ کرتا علاقہ'
                                        }
                                        placeholderTextColor={Colors.GRAY}
                                        onChangeText={text =>
                                            setCoveredArea(text)
                                        }
                                    />
                                </View>
                                <TouchableOpacity
                                    style={[
                                        {
                                            flex: 1,
                                            flexDirection:
                                                selectedLang == 'en'
                                                    ? 'row'
                                                    : 'row-reverse',
                                            height: 40,
                                            backgroundColor: Colors.PRIMARY,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 5,
                                            padding: 5,
                                        },
                                        selectedLang == 'en'
                                            ? {
                                                  borderTopLeftRadius: 0,
                                                  borderBottomLeftRadius: 0,
                                              }
                                            : {
                                                  borderTopRightRadius: 0,
                                                  borderBottomRightRadius: 0,
                                              },
                                    ]}
                                    onPress={() => {
                                        if (coveredArea != '') {
                                            setCommercialEstimate(
                                                estimation *
                                                    parseInt(coveredArea),
                                            )
                                        }
                                    }}>
                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: 12,
                                            color: Colors.SECONDARY,
                                            textAlign: 'center',
                                        }}>
                                        {selectedLang == 'en'
                                            ? 'Estimate'
                                            : ' تخمینہ'}
                                    </Text>
                                    <Feather
                                        name={
                                            selectedLang == 'en'
                                                ? 'chevron-right'
                                                : 'arrow-left'
                                        }
                                        color={Colors.SECONDARY}
                                        size={16}
                                    />
                                </TouchableOpacity>
                            </View>
                            {commercialEstimate > 0 && (
                                <Text
                                    style={{
                                        fontSize: 30,
                                        color: Colors.PRIMARY,
                                        fontWeight: 'bold',
                                    }}>
                                    PKR {commercialEstimate}
                                </Text>
                            )}

                            {commercialEstimate > 0 &&
                                estimationType.text == 'With Material' &&
                                workType.text ==
                                    'Grey Structure & Finishing' && (
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: Colors.Primary,
                                        }}>
                                        {selectedLang == 'en'
                                            ? 'This is just a rough estimate. Would you like a detailed estimate?'
                                            : 'یہ محض ایک تخمینہ ہے۔ کیا آپ تفصیلی اندازہ لگائیں گے؟'}
                                    </Text>
                                )}
                            {commercialEstimate > 0 &&
                                estimationType.text == 'With Material' &&
                                workType.text ==
                                    'Grey Structure & Finishing' && (
                                    <TouchableOpacity
                                        style={{
                                            flexDirection:
                                                selectedLang == 'en'
                                                    ? 'row'
                                                    : 'row-reverse',
                                            width: 150,
                                            height: 40,
                                            backgroundColor: Colors.PRIMARY,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 5,
                                            padding: 5,
                                            marginTop: 5,
                                        }}
                                        onPress={() => {
                                            navigation.navigate(
                                                'DetailedEstimator',
                                                {
                                                    constructionType,
                                                    location,
                                                    workType,
                                                    coveredArea:
                                                        coveredArea == ''
                                                            ? 0
                                                            : parseInt(
                                                                  coveredArea,
                                                              ),
                                                    rate: estimation,
                                                },
                                            )
                                        }}>
                                        <Text
                                            style={{
                                                flex: 1,
                                                color: Colors.SECONDARY,
                                                paddingLeft: 5,
                                            }}>
                                            {selectedLang == 'en'
                                                ? 'Detailed Estimate'
                                                : 'تفصیلی تخمینہ'}
                                        </Text>
                                        <Feather
                                            name={
                                                selectedLang == 'en'
                                                    ? 'chevron-right'
                                                    : 'arrow-left'
                                            }
                                            color={Colors.SECONDARY}
                                            size={16}
                                        />
                                    </TouchableOpacity>
                                )}
                        </View>
                    </View>
                    <View style={styles.estimatorDetails}>
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'Construction Type'
                                        : 'تعمیراتی قسم'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>
                                    {selectedLang == 'en'
                                        ? constructionType.text
                                        : constructionType.textUrdu}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en' ? 'Location' : 'مقام'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>
                                    {selectedLang == 'en'
                                        ? location.text
                                        : location.textUrdu}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en' ? 'Plot' : 'پلاٹ'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>
                                    {selectedLang == 'en'
                                        ? plot?.text
                                        : plot?.textUrdu}{' '}
                                    (
                                    {selectedLang == 'en'
                                        ? plot?.subText
                                        : plot?.subTextUrdu}
                                    )
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />

                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'Basement'
                                        : 'تہہ خانے'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>
                                    {selectedLang == 'en'
                                        ? basement?.text
                                        : basement?.textUrdu}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'Work Type'
                                        : 'کام کی قسم'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>
                                    {selectedLang == 'en'
                                        ? workType.text
                                        : workType.textUrdu}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr} />
                        <View
                            style={[
                                styles.estimationRow,
                                selectedLang == 'en'
                                    ? {flexDirection: 'row'}
                                    : {flexDirection: 'row-reverse'},
                            ]}>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign:
                                            selectedLang == 'en'
                                                ? 'left'
                                                : 'right',
                                    }}>
                                    {selectedLang == 'en'
                                        ? 'Estimation Type'
                                        : 'تخمینہ کی قسم'}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>
                                    {selectedLang == 'en'
                                        ? estimationType.text
                                        : estimationType.textUrdu}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }

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
                                width: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1000,
                            }}
                            onPress={() => navigation.pop()}>
                            <Feather
                                name="arrow-left"
                                color={Colors.PRIMARY}
                                size={28}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                marginLeft: -60,
                                fontSize: 20,
                                color: Colors.PRIMARY,
                            }}>
                            Construction Cost Estimator
                        </Text>
                    </View>
                    {renderEstimation()}
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

export default EstimationResult
