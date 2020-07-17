import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'

import NumericKeyboard from './src/components/NumericKeyboard'
import SimpleMath from './src/components/SimpleMath'
import ExpandButton from './src/components/ExpandButton'
import Screen from './src/components/Screen'

export default function App() {
  return (
    <View style={styles.container} >
      <View style={{ flexDirection: 'row', flex: 2, width:'100%',height:'100%', backgroundColor:'#2C3033' }} >
        <Screen/>
      </View>
      <View style={{ flexDirection: 'row', flex: 4 }} >
        <View style={{ height: '100%', width: '65%' }} >
          <NumericKeyboard />
        </View>
        <View style={{ height: '100%', width: 1, backgroundColor: '#36373B' }} />
        <View style={{ height: '100%', width: '25%' }} >
          <SimpleMath />
        </View>
        <View style={{width:'10%',backgroundColor: '#174FA6'}} />
        <ExpandButton />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484848',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
