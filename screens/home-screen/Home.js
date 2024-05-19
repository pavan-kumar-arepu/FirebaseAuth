import { View, Text, ScrollView } from 'react-native'
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={style.container}>
      <View style={globalStyle.marginBottom24}>
        <Header type={1} title={'Welcome to Home'} />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;