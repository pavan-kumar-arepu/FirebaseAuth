import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyle from '../../assets/styles/globalStyle'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
    <View>
      <Header title={'Arepu Pavan Kumar'} type={1}/>
      <Button title={'Button Click1'}/>
      <Button title={'Button Click2'} isDisabled={true}/>
    </View>
    </SafeAreaView>
  )
}

export default Home