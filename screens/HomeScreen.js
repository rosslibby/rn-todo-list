import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

export default class HomeScreen extends Component {
  constructor () {
    super ()

    this.state = {
      text: 'What do you need to do?'
    }
  }

  render () {
    const textInputStyle = {
      backgroundColor: '#fff',
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 30,
      paddingRight: 30,
      fontSize: 18,
      fontWeight: 'thin',
      color: 'rgba(0, 0, 0, .6)',
      boxSizing: 'border-box',
      border: 'none',
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: .5,
      shadowRadius: 2,
      elevation: 0,
      marginTop: 20,
      marginBottom: 20,
      overflow: 'hidden',
      borderRadius: 4
    }

    return <View>
      <TextInput
        style={textInputStyle}
        onChangeText={text => this.setState({text})}
        value={this.state.text}
      />
    </View>
  }
}
