import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

import Feather from 'react-native-vector-icons/Feather'

import Colors from '../constants/Colors'
import {ArchitectureFormStyles as styles} from '../styles/FormStyles'

const ImageOptionsModal = ({
    onChangeImageOptionsModal,
    media,
    onChangeMedia,
    onChangeProgressModal,
    onChangeProgress,
}) => {
    console.log(media, 'media')
    const {darkOpacity, openCamCont, openCam, picsStyle, textSmall} = styles
    return (
        <>
            <TouchableOpacity
                style={darkOpacity}
                onPress={() => onChangeImageOptionsModal(false)}
            />
            <View style={openCamCont}>
                <TouchableOpacity
                    style={openCam}
                    onPress={() => {
                        ImagePicker.openCamera({
                            width: 512,
                            height: 512,
                            includeExif: true,
                            includeBase64: true,
                            mediaType: 'photo',
                        })
                            .then(image => {
                                let photo = {
                                    uri:
                                        `data:${image.mime};base64,` +
                                        image.data,
                                    width: image.width,
                                    height: image.height,
                                    mime: image.mime,
                                }
                                onChangeMedia(photo)
                                onChangeProgressModal(false)
                                onChangeProgress(0)
                                onChangeImageOptionsModal(false)
                            })
                            .catch(error =>
                                console.log(
                                    error,
                                    'Error picking image from camera',
                                ),
                            )
                    }}>
                    <Feather
                        name={'camera'}
                        size={48}
                        color={Colors.SECONDARY}
                    />
                    <Text style={textSmall}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={openCam}
                    onPress={() => {
                        ImagePicker.openPicker({
                            width: 512,
                            height: 512,
                            includeExif: true,
                            includeBase64: true,
                            mediaType: 'photo',
                        })
                            .then(image => {
                                let photo = {
                                    uri:
                                        `data:${image.mime};base64,` +
                                        image.data,
                                    width: image.width,
                                    height: image.height,
                                    mime: image.mime,
                                }
                                onChangeMedia(photo)
                                onChangeProgressModal(false)
                                onChangeProgress(0)
                                onChangeImageOptionsModal(false)
                            })
                            .catch(error =>
                                console.log(
                                    error,
                                    'Error uploading image from gallery',
                                ),
                            )
                    }}>
                    <Feather
                        name={'image'}
                        size={48}
                        color={Colors.SECONDARY}
                    />
                    <Text style={picsStyle}>Gallery</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ImageOptionsModal
