import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'

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
    const listItemStyle = {
      display: 'flex',
      backgroundColor: '#ffffff',
      borderTop: '1pt solid #dddddd',
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
        data={[
          {text: 'This is note A'},
          {text: 'This is note B'},
          {text: 'This is note C'},
          {text: 'This is note D'}
        ]}
        renderItem={({item, index}) => <Text
          key={index}
          style={listItemStyle}>{item.text}</Text>}
      />
    </View>
  }
}
