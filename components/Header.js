import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <View>
      <Text style={{
        fontFamily: 'OpenSans',
        fontWeight: 400,
        fontSize: 80
      }}>{props.title}</Text>
    </View>
  )
}

Header.default = {
    title: '',
    type: 1
}
Header.prototype = {
    title: PropTypes.string,
    type: PropTypes.number
}

export default Header;