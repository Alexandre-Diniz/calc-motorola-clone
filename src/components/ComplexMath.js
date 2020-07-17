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
        <Symble complex type='special' value={'INV'} />
        <Symble complex type='special' value={'RAD'} />
        <Symble complex type='special' value={'%'} />
      </View>
      <View style={styles.row} >
        <Symble complex type='special' value={'sin'} />
        <Symble complex type='special' value={'cos'} />
        <Symble complex type='special' value={'tan'} />
      </View>
      <View style={styles.row} >
        <Symble complex type='special' value={'ln'} />
        <Symble complex type='special' value={'log'} />
        <Symble complex type='special' value={'sqrt'} />
      </View>
      <View style={styles.row} >
        <Symble complex type='special' value={'pi'} />
        <Symble complex type='special' value={'e'} />
        <Symble complex type='special' value={'^'} />
      </View>
      <View style={styles.row} >
        <Symble complex type='special' value={'('} />
        <Symble complex type='special' value={')'} />
        <Symble complex type='special' value={'!'} />
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
    alignItems: 'center',
    backgroundColor:'#174FA6'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'#2F60AF'
  }
})