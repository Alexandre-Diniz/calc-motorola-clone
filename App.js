import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NumericKeyboard from './src/components/NumericKeyboard'
import SimpleMath from './src/components/SimpleMath'

export default function App() {
  return (
    <View style={styles.container} >
      <View style={{flexDirection:'row', flex:2}} >

      </View>
      <View style={{flexDirection:'row', flex:4}} >
        <View style={{flex:6}} >
          <NumericKeyboard />
        </View>
        <View style={{height:'100%',width:1,backgroundColor:'#36373B'}} />
        <View style={{flex:2}} >
          <SimpleMath/>
        </View>
        <View style={{flex:1}} >

        </View>
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
