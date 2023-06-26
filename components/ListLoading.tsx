import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export  function ListLoading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
})