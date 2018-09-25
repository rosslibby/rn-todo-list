import React, { Component } from 'react'
import { Button, FlatList, Text, View } from 'react-native'

export default class NotesScreen extends Component {
  _completeItem (index) {
    const { completeItem, state } = this.props
    completeItem(index, state)
  }

  _deleteItem (index) {
    const { deleteItem, state } = this.props
    deleteItem(index, state)
  }

  render () {
    const listStyle = {
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

    const listItemStyle = {
      display: 'flex',
      backgroundColor: '#ffffff',
      borderColor: '#dddddd',
      borderStyle: 'solid',
      borderWidth: .24,
      boxSizing: 'border-box',
      color: '#666',
      listStyle: 'none',
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 30,
      paddingRight: 30,
      fontWeight: '100',
      width: '100%'
    }

    return <View>
      <FlatList
        style={listStyle}
        contentContainerStyle={{ alignItems: 'center' }}
        data={[
          {text: 'This is note A'},
          {text: 'This is note B'},
          {text: 'This is note C'},
          {text: 'This is note D'}
        ]}
        renderItem={({item, index}) => <View>
          <Text
            key={index}
            style={listItemStyle}>{item.text}</Text>
        </View>}
      />
    </View>
  }
}
