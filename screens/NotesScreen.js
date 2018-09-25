import React, { Component } from 'react'
import { AsyncStorage, Button, FlatList, Text, View } from 'react-native'
import Parse from 'parse/react-native'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize('rnTodoList', 'i$mU45W%S9WjHvrOi5Htmc*a16')
Parse.serverURL = 'https://rn-todo-list.herokuapp.com/parse'

export default class NotesScreen extends Component {
  constructor () {
    super()

    this.state = {
      notes: []
    }
  }

  _completeItem (index) {
    const { completeItem, state } = this.props
    completeItem(index, state)
  }

  _deleteItem (index) {
    const { deleteItem, state } = this.props
    deleteItem(index, state)
  }

  _getNotes () {
    const Note = Parse.Object.extend('Note')
    const query = new Parse.Query(Note)
    let notesArray = []
    query.select('text', 'completed', 'deleted')
    query.descending('createdAt')
    query.find().then(results => results.map(result => result.get('text')))
    .then(notes => {
      if (notes !== this.state.notes)
        this.setState({ notes })
    })
  }

  componentDidMount () {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {
        this._getNotes()
      }
    )
  }

  componentWillUnmount () {
    this.didFocusListener.remove()
  }

  render () {
    const listStyle = {
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: .5,
      shadowRadius: 1,
      elevation: 0,
      marginTop: 10,
      marginBottom: 10,
      overflow: 'hidden',
      borderRadius: 4,
      height: '100%'
    }

    const listItemStyle = {
      display: 'flex',
      backgroundColor: '#ffffff',
      borderColor: '#dddddd',
      borderStyle: 'solid',
      borderWidth: .24,
      color: '#666',
      marginTop: 6,
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 14,
      paddingRight: 14,
      fontWeight: '100',
      maxWidth: '94%',
      minWidth: '94%',
      marginRight: '3%',
      marginLeft: '3%'
    }

    const swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => this.deleteNote(rowData)
    }]

    return <View>
      <FlatList
        style={listStyle}
        contentContainerStyle={{ alignItems: 'center' }}
        data={this.state.notes}
        renderItem={({item, index}) => <View>
          <Text
            style={listItemStyle}>{item}</Text>
        </View>}
        keyExtractor={(item, index) => `key_${index}`}
      />
    </View>
  }
}
