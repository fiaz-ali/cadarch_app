import React from 'react'
import {View, Text, TouchableOpacity, Modal, Dimensions} from 'react-native'

import Colors from '../constants/Colors'
import {ProgressModalStyles as styles} from '../styles/FormStyles'

const {width, height} = Dimensions.get('window')

const ProgressModal = ({progressModal, setProgressModal, progress}) => {
    const {
        darkOpacity,
        picUploadCont,
        progressBarStyle,
        progressBarPercentage,
    } = styles

    return (
        <Modal visible={progressModal} transparent={true}>
            <TouchableOpacity
                style={darkOpacity}
                onPress={() => setProgressModal(false)}
            />
            <View style={picUploadCont}>
                <Text style={{color: Colors.PRIMARY}}>
                    Uploading Picture ({progress})%
                </Text>
                <View style={progressBarStyle}>
                    <View
                        style={[
                            progressBarPercentage,
                            {width: (width - 40) * (progress / 100)},
                        ]}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ProgressModal
