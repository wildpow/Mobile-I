import React from 'react'
import { View, Image, StyleSheet} from 'react-native'

const ImageContainer = () => {
  return (
    <View style={imageWrapper}>
      <Image 
        style={imageProper}
        source={{ uri: 'https://i.ytimg.com/vi/KWq4X'}}    />
    </View>
  )
}

const stlyes = StyleSheet.create({
  imageWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 400
  },
  imageProper: {}
})

const { imageWrapper, imageProper } = styles
export default ImageContainer