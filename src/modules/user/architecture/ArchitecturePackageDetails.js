import React, {useState, useEffect} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Image,
    Linking,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'
import {architecturePkgStyles as styles} from '../../../styles/ArchitectureStyles'
import {getCurrentPosition} from '../../../helpers/MapsHelper'

const ArchitecturePackageDetails = ({navigation, route}) => {
    const {pkg, type} = route?.params

    const [currentLocation, setCurrentLocation] = useState({
        latitude: null,
        longitude: null,
        latitudeDelta: 0.003,
        longitudeDelta: 0.004,
    })
    const [loading, setLoading] = useState(false)
    const [geoReady, setGeoReady] = useState(false)
    const [address, setAddress] = useState('')
    const [subAddress, setSubAddress] = useState('')
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)
    const [option4, setOption4] = useState(false)
    const [option5, setOption5] = useState(false)
    const [option6, setOption6] = useState(false)
    const [option7, setOption7] = useState(false)

    useEffect(() => {
        getCurrentPosition(
            setCurrentLocation,
            setAddress,
            setSubAddress,
            setGeoReady,
        )
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground style={{flex: 1}} source={Images.BACKGROUND}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.center}>
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
                            {type == 0 ? 'Residential' : 'Commerical '}
                        </Text>
                    </View>
                    <View style={{flex: 1, padding: 10}}>
                        <Text style={styles.features}>
                            Features offered in this package
                        </Text>
                        {pkg.details.map((element, index) => (
                            <View style={styles.pkgItem}>
                                <Text style={styles.pkgItemText}>
                                    {index + 1}. {element}
                                </Text>
                            </View>
                        ))}
                        <Text style={styles.bold}>Addons</Text>
                        <Text style={{padding: 10, color: Colors.PRIMARY}}>
                            Please select options to add extra features
                        </Text>
                        {type == 1 && (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => setOption1(!option1)}>
                                {option1 && (
                                    <View style={styles.selectedOption}>
                                        <Feather
                                            name={'check'}
                                            color={Colors.WHITE}
                                            size={12}
                                        />
                                    </View>
                                )}
                                <Image
                                    source={
                                        type == 0
                                            ? Images._25x50
                                            : Images.COMMERCIAL_EXTERIOR
                                    }
                                    style={styles.commImg}
                                />
                                <Text style={styles.itemText}>
                                    Customized Front Elevation
                                </Text>
                            </TouchableOpacity>
                        )}
                        {type == 1 && (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => setOption2(!option2)}>
                                {option2 && (
                                    <View style={styles.selectedOption}>
                                        <Feather
                                            name={'check'}
                                            color={Colors.WHITE}
                                            size={12}
                                        />
                                    </View>
                                )}
                                <Image
                                    source={Images._2D_PLAN}
                                    style={{width: 100, height: 100}}
                                />
                                <Text style={styles.itemText}>2D Plans</Text>
                            </TouchableOpacity>
                        )}
                        {type == 1 && (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => setOption3(!option3)}>
                                {option3 && (
                                    <View style={styles.selectedOption}>
                                        <Feather
                                            name={'check'}
                                            color={Colors.WHITE}
                                            size={12}
                                        />
                                    </View>
                                )}
                                <Image
                                    source={Images._3D_PLAN}
                                    style={{width: 100, height: 100}}
                                />
                                <Text style={styles.itemText}>3D Plans</Text>
                            </TouchableOpacity>
                        )}
                        {type == 1 && (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => setOption4(!option4)}>
                                {option4 && (
                                    <View style={styles.selectedOption}>
                                        <Feather
                                            name={'check'}
                                            color={Colors.WHITE}
                                            size={12}
                                        />
                                    </View>
                                )}
                                <Image
                                    source={Images.BROCHURE}
                                    style={{width: 100, height: 100}}
                                />
                                <Text style={styles.itemText}>Brochure</Text>
                            </TouchableOpacity>
                        )}
                        {type == 0 && (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => setOption5(!option5)}>
                                {option5 && (
                                    <View style={styles.selectedOption}>
                                        <Feather
                                            name={'check'}
                                            color={Colors.WHITE}
                                            size={12}
                                        />
                                    </View>
                                )}
                                <Image
                                    source={Images.PLUMBING_DRAWINGS}
                                    style={{width: 100, height: 100}}
                                />
                                <Text style={styles.itemText}>
                                    Plumbing Drawings
                                </Text>
                            </TouchableOpacity>
                        )}
                        {type == 0 && (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => setOption6(!option6)}>
                                {option6 && (
                                    <View style={styles.selectedOption}>
                                        <Feather
                                            name={'check'}
                                            color={Colors.WHITE}
                                            size={12}
                                        />
                                    </View>
                                )}
                                <Image
                                    source={Images.ELECTRICAL_DRAWINGS}
                                    style={{width: 100, height: 100}}
                                />
                                <Text style={styles.itemText}>
                                    Electrical Drawings
                                </Text>
                            </TouchableOpacity>
                        )}
                        {type == 0 && (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => setOption7(!option7)}>
                                {option7 && (
                                    <View style={styles.selectedOption}>
                                        <Feather
                                            name={'check'}
                                            color={Colors.WHITE}
                                            size={12}
                                        />
                                    </View>
                                )}
                                <Image
                                    source={Images.INTERIOR_DESIGN}
                                    style={{width: 100, height: 100}}
                                />
                                <Text style={styles.itemText}>
                                    Interior Design
                                </Text>
                            </TouchableOpacity>
                        )}
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity
                                style={styles.quotationBtn}
                                onPress={() => {
                                    let details = `${
                                        type == 0
                                            ? 'Residential '
                                            : 'Commercial'
                                    }${'<br/>Options: '}${
                                        option1
                                            ? 'Customized Front Elevation, '
                                            : ''
                                    }${option2 ? '2D Plans, ' : ''}${
                                        option3 ? '3D Plans, ' : ''
                                    }${option4 ? 'Borchure ' : ''}${
                                        option5 ? 'Plumbing Drawings ' : ''
                                    }${option6 ? 'Electrical Drawings ' : ''}${
                                        option7 ? 'Interior Design ' : ''
                                    }`
                                    navigation.navigate('ArchitectureForm', {
                                        details: details,
                                        service: `${
                                            type == 0
                                                ? 'Residential'
                                                : 'Commercial'
                                        }`,
                                    })
                                }}>
                                <Text
                                    style={{
                                        color: Colors.SECONDARY,
                                        paddingRight: 5,
                                        fontSize: 16,
                                    }}>
                                    GET QUOTATION
                                </Text>
                                {loading && (
                                    <ActivityIndicator color={Colors.WHITE} />
                                )}
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                marginVertical: 16,
                                fontSize: 16,
                                textAlign: 'center',
                            }}>
                            OR
                        </Text>
                        <TouchableOpacity
                            style={styles.support}
                            onPress={() =>
                                Linking.openURL('tel:+923359908019')
                            }>
                            <View
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: Colors.PRIMARY,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderTopLeftRadius: 10,
                                    borderBottomLeftRadius: 10,
                                }}>
                                <AntDesign
                                    name={'customerservice'}
                                    color={Colors.SECONDARY}
                                    size={48}
                                />
                            </View>
                            <View style={{flex: 1, paddingLeft: 20}}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: Colors.PRIMARY,
                                        fontWeight: 'bold',
                                    }}>
                                    Contact us
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: Colors.PRIMARY,
                                    }}>
                                    Our representative will talk to you and
                                    understand the problem
                                </Text>
                                <TouchableOpacity
                                    style={styles.contactContainer}
                                    onPress={() =>
                                        Linking.openURL('tel:+923359908019')
                                    }>
                                    <Text
                                        style={{
                                            flex: 1,
                                            color: Colors.SECONDARY,
                                            paddingLeft: 5,
                                        }}>
                                        Call Now
                                    </Text>
                                    <Feather
                                        name={'chevron-right'}
                                        color={Colors.SECONDARY}
                                        size={16}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ArchitecturePackageDetails
