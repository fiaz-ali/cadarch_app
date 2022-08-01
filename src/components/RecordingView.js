import React from 'react'
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import {ArchitectureFormStyles as styles} from '../styles/FormStyles'
import Colors from '../constants/Colors'

const renderRecordingView = (
    audioUri,
    recording,
    recordingUploading,
    playing,
    setAudioUri,
    setRecording,
    setPlaying,
    setRecordingUploading,
) => {
    if (audioUri == '') {
        if (recording) {
            return (
                <View style={styles.row}>
                    <Entypo
                        name={'controller-stop'}
                        color={Colors.SECONDARY}
                        size={24}
                    />
                    <Text style={styles.recordingText}>Recording</Text>
                </View>
            )
        } else {
            if (recordingUploading) {
                return (
                    <View style={styles.row}>
                        <ActivityIndicator color={Colors.SECONDARY} size={24} />
                        <Text style={styles.recordingText}>Uploading ... </Text>
                    </View>
                )
            } else {
                return (
                    <View style={styles.row}>
                        <Feather
                            name={'mic'}
                            color={Colors.SECONDARY}
                            size={24}
                        />
                        <Text style={styles.recordingText}>Record audio</Text>
                    </View>
                )
            }
        }
    } else {
        return (
            <View style={[styles.row, {paddingHorizontal: 16}]}>
                <View style={[styles.row, {flex: 1}]}>
                    <Entypo
                        name={'controller-play'}
                        color={Colors.SECONDARY}
                        size={24}
                    />
                    <Text style={styles.recordingText}>
                        {playing ? 'Playing' : 'Play'}
                    </Text>
                </View>
                {!playing && (
                    <TouchableOpacity
                        style={styles.del}
                        onPress={() => {
                            setAudioUri('')
                            setRecording(false)
                            setPlaying(false)
                            setRecordingUploading(false)
                        }}>
                        <Feather
                            name={'trash'}
                            color={Colors.SECONDARY}
                            size={24}
                        />
                    </TouchableOpacity>
                )}
            </View>
        )
    }
}

export default renderRecordingView
