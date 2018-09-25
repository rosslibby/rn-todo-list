import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import NotesScreen from '../screens/NotesScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'New',
  tabBarIcon: ({ focused }) => <TabBarIcon
    focused={focused}
    name='ios-create' />
}

const NotesStack = createStackNavigator({
  Notes: NotesScreen
})

NotesStack.navigationOptions = {
  tabBarLabel: 'Notes',
  tabBarIcon: ({ focused }) => <TabBarIcon
    focused={ focused }
    name='ios-list' />
}

export default createBottomTabNavigator({
  HomeStack,
  NotesStack
})
