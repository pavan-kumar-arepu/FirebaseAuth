import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyle from '../../assets/styles/globalStyle'

const Home = () => {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
    <View>
      <Text>Welcome Pavan!</Text>
    </View>
    </SafeAreaView>
  )
}

export default Home