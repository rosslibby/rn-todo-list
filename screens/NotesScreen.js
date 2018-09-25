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
    return <View>
      <FlatList
        data={[
          {text: 'This is note A'},
          {text: 'This is note B'},
          {text: 'This is note C'},
          {text: 'This is note D'}
        ]}
        renderItem={({item, index}) => <Text key={index}>{item.text}</Text>}
      />
    </View>
  }
}
