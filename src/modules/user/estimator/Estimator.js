import React, {useState, useRef} from 'react'
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Swiper from 'react-native-swiper'

import {DATA, DATA_1, DATA_2} from '../../../data/dummy-data'
import Colors from '../../../constants/Colors'
import Images from '../../../assets/paths'
import BorderBottom from '../../../components/BorderBottom'
import {estimatorStyles} from '../../../styles/EstimatorStyles'

const Estimator = ({navigation}) => {
    const {
            container,
            header,
            backIcon,
            screenTitle,
            option,
            slide,
            count,
            selected,
            optionCont,
            image,
            textCont,
            heading,
        } = estimatorStyles,
        {BACKGROUND, ESTIMATOR} = Images,
        {PRIMARY} = Colors,
        {pop, navigate} = navigation

    const swiper = useRef(null)

    const [selectedLang, setSelectedLang] = useState('en')
    const [slideIndex, setSlideIndex] = useState(0)
    const [constructionTypeIndex, setConstructionTypeIndex] = useState(0)
    const [locationIndex, setLocationIndex] = useState(0)
    const [plotSizeIndex, setPlotSizeIndex] = useState(0)
    const [basementIndex, setBasementIndex] = useState(0)
    const [workTypeIndex, setWorkTypeIndex] = useState(0)
    const [estimationTypeIndex, setEstimationTypeIndex] = useState(0)
    const [steps, setSteps] = useState(DATA)

    return (
        <SafeAreaView style={container}>
            <ImageBackground source={BACKGROUND} style={container}>
                <View style={header}>
                    <TouchableOpacity style={backIcon} onPress={() => pop()}>
                        <Feather
                            name={'arrow-left'}
                            color={PRIMARY}
                            size={28}
                        />
                    </TouchableOpacity>
                    <Text style={screenTitle}>Construction Cost Estimator</Text>
                </View>
                <Swiper
                    scrollEnabled={false}
                    ref={swiper}
                    showsPagination={false}
                    pagingEnabled={false}
                    showsButtons={false}>
                    {steps.map((step, i) => (
                        <View key={i.toString()} style={slide}>
                            <Text style={count}>
                                {i + 1}/{steps.length}
                            </Text>
                            <Text style={heading}>
                                {selectedLang == 'en'
                                    ? step.heading
                                    : step.headingUrdu}
                            </Text>
                            <FlatList
                                data={step.options}
                                showsVerticalScrollIndicator={false}
                                renderItem={({item, index}) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            option,
                                            item.selected ? selected : {},
                                        ]}
                                        onPress={() => {
                                            if (i == 0) {
                                                index == 0
                                                    ? setSteps(DATA_1)
                                                    : setSteps(DATA_2)
                                            }
                                            if (constructionTypeIndex == 0) {
                                                switch (i) {
                                                    case 0:
                                                        setConstructionTypeIndex(
                                                            index,
                                                        )
                                                        setSlideIndex(
                                                            slideIndex + 1,
                                                        )
                                                        swiper?.current.scrollBy(
                                                            1,
                                                        )
                                                        break
                                                    case 1:
                                                        setLocationIndex(index)
                                                        break
                                                    case 2:
                                                        setPlotSizeIndex(index)
                                                        break
                                                    case 3:
                                                        setBasementIndex(index)
                                                        break
                                                    case 4:
                                                        setWorkTypeIndex(index)
                                                        break
                                                    case 5:
                                                        setEstimationTypeIndex(
                                                            index,
                                                        )
                                                        break
                                                }
                                            } else {
                                                switch (i) {
                                                    case 0:
                                                        setConstructionTypeIndex(
                                                            index,
                                                        )
                                                        setSlideIndex(
                                                            slideIndex + 1,
                                                        )
                                                        swiper?.current.scrollBy(
                                                            1,
                                                        )
                                                        break
                                                    case 1:
                                                        setLocationIndex(index)
                                                        break
                                                    case 2:
                                                        setWorkTypeIndex(index)
                                                        break
                                                    case 3:
                                                        setEstimationTypeIndex(
                                                            index,
                                                        )
                                                        break
                                                }
                                            }
                                            if (slideIndex != 0) {
                                                let temp = steps
                                                temp[i].options.forEach(
                                                    (x, y) =>
                                                        (temp[i].options[
                                                            y
                                                        ].selected = false),
                                                )
                                                temp[i].options[
                                                    index
                                                ].selected = true
                                                setSteps(temp)
                                                if (
                                                    slideIndex ==
                                                    steps.length - 1
                                                ) {
                                                    constructionTypeIndex == 0
                                                        ? navigate(
                                                              'EstimationResult',
                                                              {
                                                                  estimation:
                                                                      estimate(
                                                                          steps,
                                                                          plotSizeIndex,
                                                                      ),
                                                                  constructionType:
                                                                      steps[0]
                                                                          .options[
                                                                          constructionTypeIndex
                                                                      ],
                                                                  location:
                                                                      steps[1]
                                                                          .options[
                                                                          locationIndex
                                                                      ],
                                                                  plot: steps[2]
                                                                      .options[
                                                                      plotSizeIndex
                                                                  ],
                                                                  basement:
                                                                      steps[3]
                                                                          .options[
                                                                          basementIndex
                                                                      ],
                                                                  workType:
                                                                      steps[4]
                                                                          .options[
                                                                          workTypeIndex
                                                                      ],
                                                                  estimationType:
                                                                      steps[5]
                                                                          .options[
                                                                          estimationTypeIndex
                                                                      ],
                                                                  selectedLang:
                                                                      selectedLang,
                                                              },
                                                          )
                                                        : navigate(
                                                              'EstimationResult',
                                                              {
                                                                  estimation:
                                                                      estimate(
                                                                          steps,
                                                                          plotSizeIndex,
                                                                      ),
                                                                  constructionType:
                                                                      steps[0]
                                                                          .options[
                                                                          constructionTypeIndex
                                                                      ],
                                                                  location:
                                                                      steps[1]
                                                                          .options[
                                                                          locationIndex
                                                                      ],
                                                                  workType:
                                                                      steps[2]
                                                                          .options[
                                                                          workTypeIndex
                                                                      ],
                                                                  estimationType:
                                                                      steps[3]
                                                                          .options[
                                                                          estimationTypeIndex
                                                                      ],
                                                                  selectedLang:
                                                                      selectedLang,
                                                              },
                                                          )
                                                } else {
                                                    setSlideIndex(
                                                        slideIndex + 1,
                                                    )
                                                    swiper?.current.scrollBy(1)
                                                }
                                            }
                                        }}>
                                        <View style={optionCont}>
                                            <Image
                                                source={
                                                    item.icon
                                                        ? item.icon
                                                        : ESTIMATOR
                                                }
                                                style={image}
                                            />
                                        </View>
                                        <View style={textCont}>
                                            <Text
                                                style={{
                                                    fontSize:
                                                        item.subText == ''
                                                            ? 18
                                                            : 16,
                                                    color: PRIMARY,
                                                    fontWeight: 'bold',
                                                    textAlign:
                                                        selectedLang == 'en'
                                                            ? 'left'
                                                            : 'right',
                                                }}>
                                                {selectedLang == 'en'
                                                    ? item.text
                                                    : item.textUrdu}
                                            </Text>
                                            {item.subText != '' && (
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        color: PRIMARY,
                                                    }}>
                                                    {selectedLang == 'en'
                                                        ? item.subText
                                                        : item.subTextUrdu}
                                                </Text>
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    ))}
                </Swiper>
                <BorderBottom />
            </ImageBackground>
        </SafeAreaView>
    )
}

const estimate = (steps, plotSizeIndex) => {
    let estimate = 0
    if (steps[0].options[0].selected) {
        // RESIDENTIAL
        if (
            steps[1].options[0].selected ||
            steps[1].options[3].selected ||
            steps[1].options[4].selected
        ) {
            //CDA // GULBERG // PWD
            if (steps[4].options[0].selected) {
                // GREY STRUCTURE
                if (steps[3].options[0].selected) {
                    // BASEMENT
                    if (steps[5].options[0].selected) {
                        //WITH MATERIAL
                        estimate =
                            1650 * steps[2].options[plotSizeIndex].withBasement
                    } else {
                        // LABOUR RATE
                        estimate =
                            380 * steps[2].options[plotSizeIndex].withBasement
                    }
                } else {
                    // NO BASEMENT
                    if (steps[5].options[0].selected) {
                        //WITH MATERIAL
                        estimate = 1550 * steps[2].options[plotSizeIndex].area
                    } else {
                        // LABOUR RATE
                        estimate = 380 * steps[2].options[plotSizeIndex].area
                    }
                }
            } else {
                // GREY STRUCTURE + FINISHING
                if (steps[3].options[0].selected) {
                    // BASEMENT
                    if (steps[5].options[0].selected) {
                        //WITH MATERIAL
                        estimate =
                            2780 * steps[2].options[plotSizeIndex].withBasement
                    } else {
                        // LABOUR RATE
                        estimate =
                            530 * steps[2].options[plotSizeIndex].withBasement
                    }
                } else {
                    // NO BASEMENT
                    if (steps[5].options[0].selected) {
                        //WITH MATERIAL
                        estimate = 2660 * steps[2].options[plotSizeIndex].area
                    } else {
                        // LABOUR RATE
                        estimate = 480 * steps[2].options[plotSizeIndex].area
                    }
                }
            }
        } else {
            // BAHARIA && DEFENCE
            if (steps[4].options[0].selected) {
                // GREY STRUCTURE
                if (steps[3].options[0].selected) {
                    // BASEMENT
                    if (steps[5].options[0].selected) {
                        //WITH MATERIAL
                        estimate =
                            1725 * steps[2].options[plotSizeIndex].withBasement
                    } else {
                        // LABOUR RATE
                        estimate =
                            380 * steps[2].options[plotSizeIndex].withBasement
                    }
                } else {
                    // NO BASEMENT
                    if (steps[5].options[0].selected) {
                        //WITH MATERIAL
                        estimate = 1675 * steps[2].options[plotSizeIndex].area
                    } else {
                        // LABOUR RATE
                        estimate = 380 * steps[2].options[plotSizeIndex].area
                    }
                }
            } else {
                // GREY STRUCTURE + FINISHING
                if (steps[3].options[0].selected) {
                    // BASEMENT
                    if (steps[5].options[0].selected) {
                        //WITH MATERIAL
                        estimate =
                            3100 * steps[2].options[plotSizeIndex].withBasement
                    } else {
                        // LABOUR RATE
                        estimate =
                            530 * steps[2].options[plotSizeIndex].withBasement
                    }
                } else {
                    // NO BASEMENT
                    if (steps[5].options[0].selected) {
                        //WITH MATERIAL
                        estimate = 2960 * steps[2].options[plotSizeIndex].area
                    } else {
                        // LABOUR RATE
                        estimate = 480 * steps[2].options[plotSizeIndex].area
                    }
                }
            }
        }
    } else {
        if (
            steps[1].options[0].selected ||
            steps[1].options[3].selected ||
            steps[1].options[4].selected
        ) {
            //CDA // GULBERG // PWD
            if (steps[2].options[0].selected) {
                // GREY STRUCTURE
                if (steps[3].options[0].selected) {
                    //WITH MATERIAL
                    estimate = 1750
                } else {
                    // LABOUR RATE
                    estimate = 380
                }
            } else {
                // GREY STRUCTURE & FINISHING
                if (steps[3].options[0].selected) {
                    //WITH MATERIAL
                    estimate = 2550
                } else {
                    // LABOUR RATE
                    estimate = 530
                }
            }
        } else {
            // BAHARIA && DEFENCE
            if (steps[2].options[0].selected) {
                // GREY STRUCTURE
                if (steps[3].options[0].selected) {
                    //WITH MATERIAL
                    estimate = 1750
                } else {
                    // LABOUR RATE
                    estimate = 380
                }
            } else {
                // GREY STRUCTURE & FINISHING
                if (steps[3].options[0].selected) {
                    //WITH MATERIAL
                    estimate = 2550
                } else {
                    // LABOUR RATE
                    estimate = 490
                }
            }
        }
    }
    return estimate
}

export default Estimator
