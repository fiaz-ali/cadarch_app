import geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding'

import {googleMapsApiKey} from '../api/endpoints'

export const getCurrentPosition = (
    setCurrentLocation,
    setAddress,
    setSubAddress,
    setGeoReady,
) => {
    let geoOptions = {
        enableHighAccuracy: false,
        maximumAge: 60 * 60 * 24,
        timeout: 60000,
    }

    geolocation.getCurrentPosition(
        position => {
            Geocoder.init(googleMapsApiKey)
            Geocoder.from({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
                .then(json => {
                    var addressComponents = json.results[0].address_components
                    setCurrentLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        longitudeDelta: 0.004,
                        latitudeDelta: 0.003,
                    })
                    setAddress(
                        addressComponents[0].long_name +
                            ', ' +
                            addressComponents[1].long_name,
                    )
                    setSubAddress(
                        addressComponents[2].long_name +
                            ', ' +
                            addressComponents[4].long_name +
                            ', ' +
                            addressComponents[5].long_name,
                    )
                    setGeoReady(true)
                })
                .catch(error => console.warn(error))
        },
        error => console.log(error),
        geoOptions,
    )
}
