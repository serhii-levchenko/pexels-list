import { Image } from 'expo-image'
import { Photo } from 'pexels'
import React from 'react'
import { Button, Modal, StyleSheet, View } from 'react-native'
import { SCREEN_WIDTH } from '../services/theme'

export interface ImageModalProps {
  image: Photo
  close: () => void
} 

// animation can be improved by using react-native-reanimated new feature with shared elements transition
export  function ImageModal({ close, image }: ImageModalProps) {
  return (
    <Modal
      presentationStyle="overFullScreen"
      animationType="fade"
      onRequestClose={close}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          contentFit='contain'
          source={image.src.large}
        />
        <View style={styles.footer}>
          <Button  title={'Close'} onPress={close} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000', 
    justifyContent: 'center',
  },
  image: {
    width: SCREEN_WIDTH, 
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  }
})