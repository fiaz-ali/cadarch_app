import React, {useState, useEffect, useContext} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Image,
    TextInput,
    Modal,
    ActivityIndicator,
    Alert,
    StatusBar,
    ImageBackground,
    ScrollView,
} from 'react-native'

import AudioRecord from 'react-native-audio-record'
import Sound from 'react-native-sound'

import Feather from 'react-native-vector-icons/Feather'

import Images from '../../../assets/paths'
import Colors from '../../../constants/Colors'
import {ArchitectureFormStyles as styles} from '../../../styles/FormStyles'
import {
    locationPermission,
    recordPermissions,
    getUriToBase64,
} from '../../../helpers/Functions'
import {
    MapModal,
    ProgressModal,
    ImageOptionsModal,
    renderRecordingView,
} from '../../../components'
import {constructionUrl} from '../../../api/endpoints'
import {AppContext} from '../../../App'
import {postRequest} from '../../../api/axios'
import {options} from '../../../constants/variables'
import {getCurrentPosition} from '../../../helpers/MapsHelper'

const {width} = Dimensions.get('screen')

const ConstructionPackage = ({navigation, route}) => {
    const {pkg, type} = route?.params
    const {token, userInfo} = useContext(AppContext)

    const constructionType = type === 0 ? 'Residential' : 'Commercial'

    const [currentLocation, setCurrentLocation] = useState({
        latitude: null,
        longitude: null,
        latitudeDelta: 0.003,
        longitudeDelta: 0.004,
    })
    const [loading, setLoading] = useState(false)
    const [geoReady, setGeoReady] = useState(false)
    const [details, setDetails] = useState('')
    const [address, setAddress] = useState('')
    const [subAddress, setSubAddress] = useState('')
    const [mapModal, setMapModal] = useState(false)
    const [media, setMedia] = useState([])
    const [progress, setProgress] = useState(0)
    const [progressModal, setProgressModal] = useState(false)
    const [imageOptionsModal, setImageOptionsModal] = useState(false)
    const [recording, setRecording] = useState(false)
    const [audioUri, setAudioUri] = useState('')
    const [audioFile, setAudioFile] = useState('')
    const [recordingUploading, setRecordingUploading] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [area, setArea] = useState('')
    const [plotLocation, setPlotLocation] = useState('')

    useEffect(() => {
        locationPermission()
        recordPermissions()
        getCurrentPosition(
            setCurrentLocation,
            setAddress,
            setSubAddress,
            setGeoReady,
        )
    }, [])

    const onSubmitPress = () => {
        setLoading(true)
        if (details == '' && audioUri == '') {
            Alert.alert(
                'CADArch',
                'Please fill in details or record a voice note.',
            )
            setLoading(false)
        } else {
            const data = {
                userId: userInfo._id,
                constructionPackage: pkg?.text,
                constructionType: constructionType,
                details: details,
                address: address,
                subAddress: subAddress,
                area: area,
                plotLocation: plotLocation,
                location: currentLocation,
                attachments: media,
                audioFile: audioFile,
            }
            postRequest(data, constructionUrl, token).then(res => {
                setLoading(false)
                res == 1
                    ? navigation.reset({
                          index: 0,
                          routes: [{name: 'OrdersStack'}],
                      })
                    : console.log('error in response')
            })
        }
    }

    const audioHandler = () => {
        if (audioUri == '') {
            setRecording(!recording)
            try {
                recording
                    ? AudioRecord.stop().then(audio => {
                          setRecordingUploading(true)
                          setAudioUri(audio)
                          getUriToBase64(audio).then(res => setAudioFile(res))
                      })
                    : (AudioRecord.init(options), AudioRecord.start())
            } catch (error) {
                console.log('Error recording: ', error)
            }
        } else {
            setPlaying(!playing)
            !playing && playAudio()
        }
    }

    const playAudio = () => {
        var sound = new Sound(audioUri, '', error => {
            if (error) {
                console.log('failed to load the file', error)
            } else {
                Sound.setCategory('Playback')
                sound.play(success => success && setPlaying(false))
            }
        })
    }

    const onChangeMapModal = toggle => setMapModal(toggle)
    const onChangeCurrentLocation = loc => setCurrentLocation(loc)
    const onChangeAddress = add => setAddress(add)
    const onChangeSubAddress = add => setSubAddress(add)
    const onChangeGeoReady = toggle => setGeoReady(toggle)
    const onChangeImageOptionsModal = toggle => setImageOptionsModal(toggle)
    const onChangeMedia = img => setMedia([img, ...media])
    const onChangeProgressModal = toggle => setProgressModal(toggle)
    const onChangeProgress = prg => setProgress(prg)

    const renderMedia = ({item, index}) => (
        <View style={styles.imageContainer}>
            <Image source={{uri: item.uri}} style={styles.itemImage} />
            <TouchableOpacity
                style={styles.delPic}
                onPress={() => {
                    let temp = media
                    temp.splice(index, 1)
                    setMedia(temp)
                }}>
                <Feather name={'x'} color={Colors.WHITE} />
            </TouchableOpacity>
        </View>
    )

    const renderPackages = () => {
        const {pkg, type} = route?.params

        return (
            <View style={{alignItems: 'center'}}>
                <Text style={styles.bold}>
                    Please let us know a bit of details for your need or record
                    a voice note
                </Text>
                <View style={[styles.shadow, styles.inputCont]}>
                    <TextInput
                        value={details}
                        keyboardType={'default'}
                        placeholder={'Enter details'}
                        placeholderTextColor={Colors.GRAY}
                        style={styles.detailsInputStyle}
                        multiline={true}
                        onChangeText={text => setDetails(text)}
                    />
                </View>
                <TouchableOpacity
                    style={[styles.shadow, styles.recordingView]}
                    onPress={audioHandler}>
                    {renderRecordingView(
                        audioUri,
                        recording,
                        recordingUploading,
                        playing,
                        setAudioUri,
                        setRecording,
                        setPlaying,
                        setRecordingUploading,
                    )}
                </TouchableOpacity>
                <View style={{marginTop: 10}}>
                    <Text style={styles.bold}>
                        {route?.params.service} Area (sq feet)
                    </Text>
                    <View style={[styles.shadow, styles.mediaCont]}>
                        <TextInput
                            keyboardType={'numeric'}
                            placeholder={'Enter covered area (Optional)'}
                            value={area}
                            placeholderTextColor={Colors.GRAY}
                            style={{width: width - 32, color: Colors.PRIMARY}}
                            onChangeText={text => setArea(text)}
                        />
                    </View>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={styles.bold}>Plot Location</Text>
                    <View style={[styles.shadow, styles.mediaCont]}>
                        <TextInput
                            keyboardType={'default'}
                            placeholder={'Plot Location (Optional)'}
                            value={plotLocation}
                            placeholderTextColor={Colors.GRAY}
                            style={{width: width - 32, color: Colors.PRIMARY}}
                            onChangeText={text => setPlotLocation(text)}
                        />
                    </View>
                </View>
                <Text style={[styles.bold, {marginTop: 15}]}>
                    Attach relevant drawings or floorplans{' '}
                </Text>
                <View style={styles.mediaCont}>
                    <FlatList
                        data={media}
                        horizontal={false}
                        numColumns={3}
                        extraData={true}
                        renderItem={renderMedia}
                    />
                    <View style={styles.imageModalCont}>
                        <TouchableOpacity
                            style={styles.imageModal}
                            onPress={() => setImageOptionsModal(true)}>
                            <Feather
                                name={'plus'}
                                color={Colors.PRIMARY}
                                size={24}
                            />
                        </TouchableOpacity>
                        <Text style={{color: Colors.PRIMARY}}>
                            Upload pictures
                        </Text>
                    </View>
                </View>
                <View style={styles.centur}>
                    <TouchableOpacity
                        style={styles.onSubmit}
                        onPress={onSubmitPress}>
                        <Text style={styles.submitText}>SUBMIT</Text>
                        {loading && <ActivityIndicator color={Colors.WHITE} />}
                    </TouchableOpacity>
                    {mapModal && geoReady && (
                        <Modal
                            visible={mapModal}
                            onRequestClose={() => setMapModal(false)}>
                            <MapModal
                                onChangeMapModal={onChangeMapModal}
                                currentLocation={currentLocation}
                                onChangeCurrentLocation={
                                    onChangeCurrentLocation
                                }
                                address={address}
                                onChangeAddress={onChangeAddress}
                                subAddress={subAddress}
                                onChangeSubAddress={onChangeSubAddress}
                                onChangeGeoReady={onChangeGeoReady}
                            />
                        </Modal>
                    )}
                    <Modal visible={imageOptionsModal} transparent={true}>
                        <ImageOptionsModal
                            onChangeImageOptionsModal={
                                onChangeImageOptionsModal
                            }
                            media={media}
                            onChangeMedia={onChangeMedia}
                            onChangeProgressModal={onChangeProgressModal}
                            onChangeProgress={onChangeProgress}
                        />
                    </Modal>
                    <ProgressModal
                        progress={progress}
                        progressModal={progressModal}
                        onChangeProgressModal={onChangeProgressModal}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={'dark-content'} />
            <ImageBackground source={Images.BACKGROUND} style={{flex: 1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.center}>
                        <TouchableOpacity
                            style={styles.arrowLeft}
                            onPress={() => navigation.pop()}>
                            <Feather
                                name={'arrow-left'}
                                color={Colors.PRIMARY}
                                size={28}
                            />
                        </TouchableOpacity>
                        <Text style={styles.service}>{pkg.text}</Text>
                    </View>
                    <View style={{flex: 1, padding: 10}}>
                        {renderPackages()}
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ConstructionPackage
