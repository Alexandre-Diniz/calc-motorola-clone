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
  const [lastValue, setLastValue] = useState(widthScreen)
  const [start, setStart] = useState(widthScreen)
  return (
    <Animated.View
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
        onTouchEnd={event=>{
          if(event.nativeEvent.pageX>0.2*widthScreen && event.nativeEvent.pageX<0.9*widthScreen){
            if(event.nativeEvent.pageX>0.55*widthScreen){
              setShift(0.9*widthScreen)
            } else {
              setShift(0.2*widthScreen)
            }
          }
          console.log(event.nativeEvent.pageX,shift)
        }}
        onMoveShouldSetResponder={event => {
          setStart(event.touchHistory.touchBank[0].startPageX)
          //console.log('event: ', event)
          //console.log(event.touchHistory.touchBank[0].currentPageX)

          if (event.nativeEvent.locationX) {
            //console.log(event.touchHistory.touchBank[0].startPageX,widthScreen * 0.9)
            if (event.touchHistory.touchBank[0].startPageX > widthScreen * 0.9) {
              if (event.touchHistory.touchBank[0].currentPageX > 0.2 * widthScreen && event.touchHistory.touchBank[0].currentPageX < 0.9 * widthScreen) {
                setShift(parseInt(event.touchHistory.touchBank[0].currentPageX))
              } else if (event.touchHistory.touchBank[0].currentPageX >= 0.9 * widthScreen) {
                setShift(parseInt(widthScreen * 0.9))
              } else if (event.touchHistory.touchBank[0].currentPageX <= 0.2 * widthScreen) {
                setShift(parseInt(widthScreen * 0.2))
              }
            } else if (event.touchHistory.touchBank[0].startPageX > widthScreen * 0.2 && event.touchHistory.touchBank[0].startPageX < widthScreen * 0.3) {
              if (event.touchHistory.touchBank[0].currentPageX > 0.2 * widthScreen && event.touchHistory.touchBank[0].currentPageX < 0.9 * widthScreen) {
                setShift(parseInt(event.touchHistory.touchBank[0].currentPageX))
                setLastValue(parseInt(event.touchHistory.touchBank[0].currentPageX))
              } else if (event.touchHistory.touchBank[0].currentPageX >= 0.9 * widthScreen) {
                setShift(parseInt(widthScreen * 0.9))
              } else if (event.touchHistory.touchBank[0].currentPageX <= 0.2 * widthScreen) {
                setShift(parseInt(widthScreen * 0.2))
              }
            } else if (event.touchHistory.touchBank[0].startPageX > widthScreen * 0.9 && event.touchHistory.touchBank[0].startPageX < widthScreen * 0.9) {
              null
            }
          }

        }}
      >
        <MaterialIcons name={shift > 0.6 * widthScreen ? "keyboard-arrow-left" : "keyboard-arrow-right"} size={24} color="#CCE3F6" />
      </View>
      <View style={{ width: widthScreen * 0.7, height: '100%', backgroundColor: '#174FA6' }} >
        <ComplexMath />
      </View>
    </Animated.View>
  )
}