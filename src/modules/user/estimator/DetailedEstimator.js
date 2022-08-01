import React, {useState, useRef} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Swiper from 'react-native-swiper'

import {
    DETAILED_DATA,
    DETAILED_DATA_FINISHING,
    DETAILED_DATA_COMMERCIAL,
} from '../../../data/dummy-data'
import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'

const DetailedEstimator = ({navigation, route}) => {
    const {constructionType, workType, coveredArea, rate} = route.params

    const [slideIndex, setSlideIndex] = useState(0)
    const [selectedLang, setSelectedLang] = useState('en')
    const [stepsResidential, setStepsResidential] = useState(DETAILED_DATA)
    const [stepsResidentialFinishing, setStepsResidentialFinishing] = useState(
        DETAILED_DATA_FINISHING,
    )
    const [stepsCommercial, setStepsCommercial] = useState(
        DETAILED_DATA_COMMERCIAL,
    )

    const swiper = useRef(null)

    const estimate = () => {
        let temp = rate
        if (constructionType.text == 'Commercial') {
            // Construction
            stepsCommercial.forEach((step, i) => {
                temp += step.options.find(
                    option => option.selected,
                ).rateIncrement
            })
        } else if (
            constructionType.text == 'Residential' &&
            workType.text == 'Grey Structure & Finishing'
        ) {
            stepsResidentialFinishing.forEach((step, i) => {
                temp += step.options.find(
                    option => option.selected,
                ).rateIncrement
            })
        } else {
            stepsResidential.forEach((step, i) => {
                temp += step.options.find(
                    option => option.selected,
                ).rateIncrement
            })
        }
        return temp * coveredArea
    }

    const renderSlides = () => {
        if (constructionType.text == 'Commercial') {
            return stepsCommercial.map((step, i) => (
                <View style={styles.slide} key={step.id}>
                    <Text
                        style={{
                            fontSize: 24,
                            paddingVertical: 20,
                            textAlign: 'right',
                            color: Colors.PRIMARY,
                        }}>
                        {i + 1}/{stepsCommercial.length}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: 'bold',
                            paddingBottom: 20,
                            color: Colors.PRIMARY,
                        }}>
                        {selectedLang == 'en' ? step.heading : step.headingUrdu}
                    </Text>
                    <FlatList
                        data={step.options}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <TouchableOpacity
                                style={[
                                    styles.option,
                                    item.selected
                                        ? {
                                              borderRightColor:
                                                  Colors.SECONDARY,
                                              borderRightWidth: 16,
                                              borderWidth: 2,
                                              borderColor: Colors.SECONDARY,
                                          }
                                        : {},
                                ]}
                                onPress={() => {
                                    let temp = stepsCommercial
                                    temp[i].options.forEach((x, y) => {
                                        temp[i].options[y].selected = false
                                    })
                                    temp[i].options[index].selected = true
                                    setStepsCommercial(temp)
                                    if (constructionType.text == 'Commercial') {
                                        if (
                                            slideIndex ==
                                            stepsCommercial.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsCommercial,
                                                    estimationType:
                                                        'Commercial',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSlideIndex(slideIndex + 1)
                                            swiper?.current.scrollBy(1)
                                        }
                                    } else if (
                                        constructionType.text ==
                                            'Residential' &&
                                        workType.text ==
                                            'Grey Structure & Finishing'
                                    ) {
                                        if (
                                            slideIndex ==
                                            stepsResidentialFinishing.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsResidentialFinishing,
                                                    estimationType:
                                                        'Residential (Finishing)',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSlideIndex(slideIndex + 1)
                                            swiper?.current.scrollBy(1)
                                        }
                                    } else {
                                        if (
                                            slideIndex ==
                                            stepsResidential.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsResidential,
                                                    estimationType:
                                                        'Residential',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSelectedLang(slideIndex + 1)
                                            swiper?.current.scrollBy(1)
                                        }
                                    }
                                }}>
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
                                <View style={{flex: 1, paddingHorizontal: 20}}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: Colors.PRIMARY,
                                            fontWeight: 'bold',
                                        }}>
                                        {selectedLang == 'ur'
                                            ? item.textUrdu
                                            : item.text}
                                    </Text>
                                    {item?.sub && (
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                color: Colors.PRIMARY,
                                            }}>
                                            {item?.sub}
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            ))
        } else if (
            constructionType.text == 'Residential' &&
            workType.text == 'Grey Structure & Finishing'
        ) {
            return stepsResidentialFinishing.map((step, i) => (
                <View style={styles.slide} key={step.id}>
                    <Text
                        style={{
                            fontSize: 24,
                            paddingVertical: 20,
                            textAlign: 'right',
                            color: Colors.PRIMARY,
                        }}>
                        {i + 1}/{stepsResidentialFinishing.length}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: 'bold',
                            paddingBottom: 20,
                            color: Colors.PRIMARY,
                        }}>
                        {selectedLang == 'en' ? step.heading : step.headingUrdu}
                    </Text>
                    <FlatList
                        data={step.options}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <TouchableOpacity
                                style={[
                                    styles.option,
                                    item.selected
                                        ? {
                                              borderRightColor:
                                                  Colors.SECONDARY,
                                              borderRightWidth: 16,
                                              borderWidth: 2,
                                              borderColor: Colors.SECONDARY,
                                          }
                                        : {},
                                ]}
                                onPress={() => {
                                    let temp = stepsResidentialFinishing

                                    temp[i].options.forEach((x, y) => {
                                        temp[i].options[y].selected = false
                                    })

                                    temp[i].options[index].selected = true
                                    setStepsResidentialFinishing(temp)
                                    if (constructionType.text == 'Commercial') {
                                        if (
                                            slideIndex ==
                                            stepsCommercial.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsCommercial,
                                                    estimationType:
                                                        'Commercial',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSlideIndex(slideIndex + 1)
                                            swiper.current.scrollBy(1)
                                        }
                                    } else if (
                                        constructionType.text ==
                                            'Residential' &&
                                        workType.text ==
                                            'Grey Structure & Finishing'
                                    ) {
                                        if (
                                            slideIndex ==
                                            stepsResidentialFinishing.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsResidentialFinishing,
                                                    estimationType:
                                                        'Residential (Finishing)',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSlideIndex(slideIndex + 1)
                                            swiper?.current.scrollBy(1)
                                        }
                                    } else {
                                        if (
                                            slideIndex ==
                                            stepsResidential.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsResidential,
                                                    estimationType:
                                                        'Residential',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSlideIndex(slideIndex + 1)
                                            swiper?.current.scrollBy(1)
                                        }
                                    }
                                }}>
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
                                <View style={{flex: 1, paddingHorizontal: 20}}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: Colors.PRIMARY,
                                            fontWeight: 'bold',
                                        }}>
                                        {selectedLang == 'ur'
                                            ? item.textUrdu
                                            : item.text}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: Colors.PRIMARY,
                                        }}>
                                        {item?.sub}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            ))
        } else {
            return stepsResidential.map((step, i) => (
                <View style={styles.slide} key={step.id}>
                    <Text
                        style={{
                            fontSize: 24,
                            paddingVertical: 20,
                            textAlign: 'right',
                            color: Colors.PRIMARY,
                        }}>
                        {i + 1}/{stepsResidential.length}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: 'bold',
                            paddingBottom: 20,
                            color: Colors.PRIMARY,
                        }}>
                        {selectedLang == 'en' ? step.heading : step.headingUrdu}
                    </Text>
                    <FlatList
                        data={step.options}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <TouchableOpacity
                                style={[
                                    styles.option,
                                    item.selected
                                        ? {
                                              borderRightColor:
                                                  Colors.SECONDARY,
                                              borderRightWidth: 16,
                                              borderWidth: 2,
                                              borderColor: Colors.SECONDARY,
                                          }
                                        : {},
                                ]}
                                onPress={() => {
                                    let temp = stepsResidential

                                    temp[i].options.forEach((x, y) => {
                                        temp[i].options[y].selected = false
                                    })

                                    temp[i].options[index].selected = true
                                    setStepsResidential(temp)
                                    if (constructionType.text == 'Commercial') {
                                        if (
                                            slideIndex ==
                                            stepsCommercial.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsCommercial,
                                                    estimationType:
                                                        'Commercial',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSlideIndex(slideIndex + 1)
                                            swiper?.current.scrollBy(1)
                                        }
                                    } else if (
                                        constructionType.text ==
                                            'Residential' &&
                                        workType.text ==
                                            'Grey Structure & Finishing'
                                    ) {
                                        if (
                                            slideIndex ==
                                            stepsResidentialFinishing.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsResidentialFinishing,
                                                    estimationType:
                                                        'Residential (Finishing)',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSlideIndex(slideIndex + 1)
                                            swiper?.current.scrollBy(1)
                                        }
                                    } else {
                                        if (
                                            slideIndex ==
                                            stepsResidential.length - 1
                                        ) {
                                            navigation.navigate(
                                                'EstimationDetailedResult',
                                                {
                                                    steps: stepsResidential,
                                                    estimationType:
                                                        'Residential',
                                                    estimate: estimate(),
                                                    selectedLang: selectedLang,
                                                    coveredArea: coveredArea,
                                                },
                                            )
                                        } else {
                                            setSlideIndex(slideIndex + 1)
                                            swiper?.current.scrollBy(1)
                                        }
                                    }
                                }}>
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
                                <View style={{flex: 1, paddingHorizontal: 20}}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: Colors.PRIMARY,
                                            fontWeight: 'bold',
                                        }}>
                                        {selectedLang == 'ur'
                                            ? item.textUrdu
                                            : item.text}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: Colors.PRIMARY,
                                        }}>
                                        {item?.sub}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            ))
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
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
                            width: 60,
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
                            marginLeft: -60,
                            fontSize: 20,
                            color: Colors.PRIMARY,
                        }}>
                        Detailed Cost Estimator
                    </Text>
                </View>
                <Swiper
                    scrollEnabled={false}
                    ref={swiper}
                    showsPagination={false}
                    showsButtons={false}
                    pagingEnabled={false}>
                    {renderSlides()}
                </Swiper>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingBottom: 10,
                        paddingTop: 10,
                        borderTopColor: Colors.SECONDARY,
                        borderTopWidth: 5,
                    }}></View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    service: {
        backgroundColor: Colors.LIGHTER_GRAY,
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
    slide: {
        flex: 1,
        padding: 15,
        paddingVertical: 0,
        //backgroundColor: Colors.LightOpacity
    },
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

export default DetailedEstimator
