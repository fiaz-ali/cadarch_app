import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    StyleSheet,
} from 'react-native'

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import Geocoder from 'react-native-geocoding'
import MapView from 'react-native-maps'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {ArchitectureFormStyles as styles} from '../styles/FormStyles'
import {googleMapsApiKey} from '../api/endpoints'
import Colors from '../constants/Colors'

const MapModal = ({
    onChangeMapModal,
    currentLocation,
    onChangeCurrentLocation,
    address,
    onChangeAddress,
    subAddress,
    onChangeSubAddress,
    onChangeGeoReady,
}) => {
    const {
        openMapModal,
        openMapClick,
        locationText,
        autoCompleteCont,
        mapMarker,
        closeMapModal,
        confirmLocText,
        mapPin,
        textBold,
    } = styles
    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <View style={openMapModal}>
                    <TouchableOpacity
                        style={openMapClick}
                        onPress={() => onChangeMapModal(false)}>
                        <Feather name={'arrow-left'} size={24} />
                    </TouchableOpacity>
                    <Text style={locationText}>Select location</Text>
                </View>
                <View style={{flex: 1}}>
                    <MapView
                        style={StyleSheet.absoluteFill}
                        region={{
                            latitude: currentLocation?.latitude,
                            longitude: currentLocation?.longitude,
                            latitudeDelta: currentLocation?.latitudeDelta,
                            longitudeDelta: currentLocation?.longitudeDelta,
                        }}
                        initialRegion={{
                            latitude: currentLocation?.latitude,
                            longitude: currentLocation?.longitude,
                            latitudeDelta: 0.003,
                            longitudeDelta: 0.004,
                        }}
                        onRegionChangeComplete={region =>
                            setCurrentLocation({
                                longitude: region.longitude,
                                latitude: region.latitude,
                                latitudeDelta: region.latitudeDelta,
                                longitudeDelta: region.longitudeDelta,
                            })
                        }
                    />
                    <View style={autoCompleteCont}>
                        <GooglePlacesAutocomplete
                            placeholder="Search for your address"
                            minLength={1}
                            autoFocus={false}
                            fetchDetails={true}
                            renderDescription={row => row.description}
                            onPress={(data, details = null) => {
                                Geocoder.init(googleMapsApiKey)
                                Geocoder.from(details.formatted_address)
                                    .then(json => {
                                        var location =
                                            json.results[0].geometry.location
                                        onChangeCurrentLocation({
                                            latitude: location.lat,
                                            longitude: location.lng,
                                            longitudeDelta: 0.004,
                                            latitudeDelta: 0.003,
                                        })
                                    })
                                    .catch(error => console.warn(error))
                            }}
                            query={{
                                key: googleMapsApiKey,
                                language: 'en', // language of the results
                                types: 'geocode', // default: 'geocode'
                                components: 'country:pk',
                            }}
                            styles={{
                                textInputContainer: {
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderTopWidth: 0,
                                    borderBottomWidth: 0,
                                },
                                textInput: {
                                    marginLeft: 0,
                                    marginRight: 0,
                                    height: 38,
                                    color: '#5d5d5d',
                                    fontSize: 16,
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb',
                                },
                                poweredContainer: {
                                    display: 'none',
                                },
                            }}
                            currentLocation={false}
                            nearbyPlacesAPI="GooglePlacesSearch"
                            GooglePlacesSearchQuery={{
                                rankby: 'distance',
                                type: 'cafe',
                            }}
                            GooglePlacesDetailsQuery={{
                                fields: 'formatted_address',
                            }}
                            filterReverseGeocodingByTypes={[
                                'locality',
                                'administrative_area_level_3',
                            ]}
                            debounce={200}
                        />
                    </View>
                    <TouchableOpacity style={mapMarker}>
                        <FontAwesome5
                            name={'map-marker-alt'}
                            color={Colors.PRIMARY}
                            size={28}
                            style={{padding: 5}}
                        />
                        <View style={{flex: 1, padding: 5}}>
                            <Text style={textBold}>{address}</Text>
                            <Text style={{color: Colors.PRIMARY}}>
                                {subAddress}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={closeMapModal}
                        onPress={() => {
                            onChangeMapModal(false)
                            Geocoder.init(googleMapsApiKey)
                            Geocoder.from({
                                latitude: currentLocation?.latitude,
                                longitude: currentLocation?.longitude,
                            })
                                .then(json => {
                                    var addressComponents =
                                        json.results[0].address_components
                                    onChangeAddress(
                                        addressComponents[0].long_name +
                                            ', ' +
                                            addressComponents[1].long_name,
                                    )
                                    onChangeSubAddress(
                                        addressComponents[2].long_name +
                                            ', ' +
                                            addressComponents[4].long_name +
                                            ', ' +
                                            addressComponents[5].long_name,
                                    )
                                    onChangeGeoReady(true)
                                })
                                .catch(error => console.warn(error))
                        }}>
                        <Text style={confirmLocText}>Confirm Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={mapPin}>
                    <FontAwesome5
                        name={'map-pin'}
                        color={Colors.PRIMARY}
                        size={40}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

export default MapModal
