import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import Symble from './Symble'

export default function () {
  return (
    <View style={styles.box} >
      <View style={styles.row} >
        <Symble type='number' value={'7'} />
        <Symble type='number' value={'8'} />
        <Symble type='number' value={'9'} />
      </View>
      <View style={styles.row} >
        <Symble type='number' value={'4'} />
        <Symble type='number' value={'5'} />
        <Symble type='number' value={'6'} />
      </View>
      <View style={styles.row} >
        <Symble type='number' value={'1'} />
        <Symble type='number' value={'2'} />
        <Symble type='number' value={'3'} />
      </View>
      <View style={styles.row} >
        <Symble type='number' value={'0'} />
        <Symble type='number' value={','} />
        <Symble type='number' value={'='} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
})