import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'

import NumericKeyboard from './src/components/NumericKeyboard'
import SimpleMath from './src/components/SimpleMath'
import ExpandButton from './src/components/ExpandButton'

export default function App() {
  return (
    <View style={styles.container} >
      <View style={{ flexDirection: 'row', flex: 2 }} >

      </View>
      <View style={{ flexDirection: 'row', flex: 4 }} >
        <View style={{ height: '100%', width: '60%' }} >
          <NumericKeyboard />
        </View>
        <View style={{ height: '100%', width: 1, backgroundColor: '#36373B' }} />
        <View style={{ height: '100%', width: '30%' }} >
          <SimpleMath />
        </View>
        {/* <View style={{ height: '100%', width: '10%' }}
          onMoveShouldSetResponder={event => {
            //console.log(parseInt(event.touchHistory.touchBank[0].currentPageX))
            console.log(event)
          }} >
          <ExpandButton />
        </View> */}
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
