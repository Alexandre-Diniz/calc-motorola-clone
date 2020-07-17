import React, { useState } from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native'

export default function ({ type, value }) {
  return (
    <View style={styles.container} >
      <TouchableOpacity
        style={styles.box}
      >
        <Text style={type === 'number' ? styles.number : styles.special} > {value} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#484848',
    flex: 1,
    width:'100%',
    height:'100%'
  },
  box: {
    backgroundColor: '#202125',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  },
  number: {
    color: '#E8E9ED',
    fontSize: 30
  },
  special: {
    color: '#86A9D4',
    fontSize: 20
  }
})