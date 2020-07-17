import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import Symble from './Symble'

export default function () {
  return (
    <View style={styles.box} >
      <Symble type='special' value={'<='} />
      <Symble type='special' value={'/'} />
      <Symble type='special' value={'x'} />
      <Symble type='special' value={'-'} />
      <Symble type='special' value={'+'} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})