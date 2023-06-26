import { Dimensions } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('window').width
export const DEFAULT_SPACING = 24
export const getBoxShadow = () => {
   // box shadow generated from https://ethercreative.github.io/react-native-shadow-generator/
  // to be the same on both iOS and Android
  return {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  }
}