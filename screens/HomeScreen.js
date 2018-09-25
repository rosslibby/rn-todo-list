import React, { Component } from 'react'
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native'
import Parse from 'parse/react-native'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize('rnTodoList', 'i$mU45W%S9WjHvrOi5Htmc*a16')
Parse.serverURL = 'https://rn-todo-list.herokuapp.com/parse'

export default class HomeScreen extends Component {
  constructor () {
    super ()

    this.state = { text: '', toastVisibility: 0, toastText: '' }
  }

  addNote (text) {
    // add a note via Parse server
    if (this.state.text.trim() !== '') {
      const Note = Parse.Object.extend('Note')
      const note = new Note()
      note.set('text', text)
      note.set('completed', false)
      note.set('deleted', false)
      note.save()
      this.setState({text: ''})
      this._showToast('Your note was added successfully')
    } else {
      this._showToast('You must enter some text')
    }
  }

  _showToast (text) {
    this.setState({toastText: text})

    let interval = 1
    const timer = setInterval(() => {
      interval -= .01
      this.setState({
        toastVisibility: interval
      }, () => {
        console.log(`interval: ${interval}`)
      })
      if (interval <= 0)
        clearInterval(timer)
    }, 5)
  }

  render () {
    const textInputStyle = {
      backgroundColor: '#fff',
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 14,
      paddingRight: 14,
      fontSize: 18,
      fontWeight: '100',
      color: 'rgba(0, 0, 0, .6)',
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: .5,
      shadowRadius: 2,
      elevation: 0,
      marginTop: 20,
      marginBottom: 20,
      overflow: 'hidden',
      borderRadius: 4,
      width: '94%',
      marginLeft: '3%',
      marginRight: '3%'
    }

    const labelStyle = {
      fontSize: 32,
      fontWeight: '100',
      color: '#9a9a9a',
      width: '100%',
      textAlign: 'center',
      paddingTop: 14
    }

    const buttonStyle = {
      backgroundColor: '#2196f3',
      marginLeft: '3%',
      marginRight: '3%',
      borderRadius: 4
    }

    const toastStyle = {
      backgroundColor: 'rgba(0, 0, 0, .7)',
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: .5,
      shadowRadius: 2,
      elevation: 0,
      borderRadius: 4,
      width: '94%',
      marginLeft: '3%',
      marginRight: '3%',
      padding: 14,
      position: 'absolute',
      bottom: 14
    }

    const toastTextStyle = {
      color: 'white',
      textAlign: 'center'
    }

    return <View style={{ height: '100%' }}>
      <Text style={labelStyle}>Add a note</Text>
      <TextInput
        style={textInputStyle}
        onChangeText={text => this.setState({text})}
        value={this.state.text}
      />
      <View style={buttonStyle}>
        <Button title='Add note'
          color='#fff'
          onPress={text => this.addNote(this.state.text)} />
      </View>
      <View style={toastStyle} opacity={this.state.toastVisibility}>
        <Text style={toastTextStyle}>{this.state.toastText}</Text>
      </View>
    </View>
  }
}
