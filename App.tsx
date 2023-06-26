import { StyleSheet, SafeAreaView } from 'react-native'
import { List } from './components/List'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={styles.container}>
          <List />
        </SafeAreaView>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
})
