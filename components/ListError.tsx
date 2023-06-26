import { QueryObserverBaseResult } from '@tanstack/react-query'
import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export  function ListError({ refetch }: { refetch: QueryObserverBaseResult['refetch'] }) {
  const onPress = () => refetch()

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{'Error while fetching ;('}</Text>
      <Button onPress={onPress} title={'Please try again'} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  }
})