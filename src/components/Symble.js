import React, { useState } from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ({ type, value, character, size, color, complex }) {
  return (
    <View style={[styles.container,{backgroundColor:complex?'#2F60AF':'#484848'}]} >
      <TouchableOpacity
        style={complex ? styles.complex : styles.box}
      >
        {
          character
            ?
            <MaterialCommunityIcons name={character} size={size} color={color} />
            :
            <Text style={type === 'number' ? styles.number : complex?styles.complexText:styles.special} > {value} </Text>
        }
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#484848',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  box: {
    backgroundColor: '#202125',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  number: {
    color: '#E8E9ED',
    fontSize: 30
  },
  special: {
    color: '#86A9D4',
    fontSize: 20
  },
  complex:{
    backgroundColor: '#174FA6',
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  complexText:{
    fontSize: 18,
    color:'#FFF'
  }
})