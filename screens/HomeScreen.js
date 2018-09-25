import React, { Component } from 'react'
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native'
import Parse from 'parse/react-native'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize('rnTodoList', 'i$mU45W%S9WjHvrOi5Htmc*a16')
Parse.serverURL = 'https://rn-todo-list.herokuapp.com/parse'

export default class HomeScreen extends Component {
  constructor () {
    super ()

    this.state = {
      text: ''
    }
  }

  addNote (text) {
    // add a note via Parse server
    const Note = Parse.Object.extend('Note')
    const note = new Note()
    note.set('text', text)
    note.set('completed', false)
    note.set('deleted', false)
    note.save()
    this.setState({text: ''})
  }

  render () {
    const textInputStyle = {
      backgroundColor: '#fff',
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 30,
      paddingRight: 30,
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
      borderRadius: 4
    }

    const labelStyle = {
      fontSize: 24,
      fontWeight: 'bold'
    }

    return <View>
      <Text style={labelStyle}>Add a note</Text>
      <TextInput
        style={textInputStyle}
        onChangeText={text => this.setState({text})}
        value={this.state.text}
      />
      <Button title='Add note'
        onPress={text => this.addNote(this.state.text)} />
    </View>
  }
}
