import React from 'react'
import {Image} from 'react-native'

import Images from '../../../../assets/paths'

const RenderImage = type => {
    const image =
        type === 'renovation'
            ? Images.RENOVATION
            : type === 'architecture'
            ? Images.ARCHITECTURE
            : Images.CONSTRUCTION

    return <Image source={image} style={{width: 64, height: 64}} />
}

export default RenderImage
