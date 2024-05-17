import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyle from '../../assets/styles/globalStyle'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Tab from '../../components/Tab/Tab'
import style from '../login-screen/style'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
    <View>
      <Header title={'Arepu Pavan Kumar'} type={1}/>
      <Tab title={"Monday 4"}/>
      <Tab title={"Wednesday 6"} isInactive={true}/>
    </View>
    </SafeAreaView>
  )
}

export default Home