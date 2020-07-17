import React, { useState } from 'react'
import {
  Animated,
  Dimensions,
  View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import ComplexMath from './ComplexMath'

const widthScreen = Dimensions.get('window').width

export default function () {
  const [shift, setShift] = useState(widthScreen * 0.9)
  return (
    <Animated.View
      onMoveShouldSetResponder={event => {
        if (event.touchHistory.touchBank[0].startPageX > widthScreen * 0.9) {
          if (event.touchHistory.touchBank[0].currentPageX > 0.2 * widthScreen && event.touchHistory.touchBank[0].currentPageX < 0.9 * widthScreen) {
            setShift(parseInt(event.touchHistory.touchBank[0].currentPageX))
            console.log(parseInt(event.touchHistory.touchBank[0].currentPageX * 100 / widthScreen))
          } else if (event.touchHistory.touchBank[0].currentPageX >= 0.9 * widthScreen) {
            setShift(parseInt(widthScreen * 0.9))
            console.log(parseInt(event.touchHistory.touchBank[0].currentPageX * 100 / widthScreen))
          } else if (event.touchHistory.touchBank[0].currentPageX <= 0.2 * widthScreen) {
            setShift(parseInt(widthScreen * 0.2))
            console.log(parseInt(event.touchHistory.touchBank[0].currentPageX * 100 / widthScreen))
          }
        } 
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#174FA6',
        left: shift,
        flexDirection: 'row',
        position: 'absolute',
        height: '100%',
      }} >
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#174FA6', width: 0.1 * widthScreen, height: '100%' }}
      >
        <MaterialIcons name={shift>0.6*widthScreen?"keyboard-arrow-left":"keyboard-arrow-right"} size={24} color="#CCE3F6" />
      </View>
      <View style={{ width: widthScreen * 0.7, height: '100%', backgroundColor: '#174FA6' }} >
        <ComplexMath />
      </View>
    </Animated.View>
  )
}