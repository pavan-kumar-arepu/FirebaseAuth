import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyle from '../../assets/styles/globalStyle'
import Header from '../../components/Header'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
    <View>
      <Header title={"Arepu Pavan Kumar"} type={1}/>
    </View>
    </SafeAreaView>
  )
}

export default Home