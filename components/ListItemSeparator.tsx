import React from 'react'
import { StyleSheet, View } from 'react-native'

export function ListItemSeparator() {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    height: 8,
  }
})