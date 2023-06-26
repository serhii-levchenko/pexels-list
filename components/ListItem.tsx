import { Image } from 'expo-image'
import { Photo } from 'pexels'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { DEFAULT_SPACING, SCREEN_WIDTH, getBoxShadow } from '../services/theme'
import { ImageModal } from './ImageModal'
import { useModal } from '../hooks/useModal'

const ITEM_PADDING = 16
const IMAGE_SIZE = SCREEN_WIDTH - DEFAULT_SPACING * 2 - ITEM_PADDING * 2
export const ESTIMATED_ITEM_HEIGHT = 366

export interface ListItemProps {
  item: Photo
} 

export  function ListItem({ item }: ListItemProps) {
  const [isOpened, { open, close }] = useModal()

  return (
    <>
      <Pressable style={styles.item} onPress={open}>
        <Image
          style={styles.image}
          source={item.src.tiny}
          contentFit="cover"
        />
        <Text style={styles.title}>
          by {item.photographer}
        </Text>
      </Pressable>
      {isOpened ? (
        <ImageModal
          image={item}
          close={close}
        />
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    ...getBoxShadow(),
    alignItems: 'center',
    padding: ITEM_PADDING,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 4,
  },
  title: {
    marginTop: 12,
    fontSize: 16,
  },
})