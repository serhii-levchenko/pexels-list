import { createClient } from 'pexels'
import Constants from 'expo-constants'

export const pexelsClient = createClient(Constants.expoConfig?.extra?.pexelsApiKey)