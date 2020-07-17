import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default function(){
  return(
    <View style={{width:'100%', height:'100%'}} >
      <View style={{ paddingHorizontal:20,paddingTop:40, width:'100%',height:'40%',flexDirection:'row', justifyContent:'space-between',alignItems:'center'}} >
        <TouchableOpacity style={{height:'100%', justifyContent:'center',alignItems:'center'}} >
          <Text style={{color:'#76797E',fontSize:16,fontWeight:'normal'}} > GRAU </Text>
        </TouchableOpacity>
        <View style={{justifyContent:'center',alignItems:'center',height:'100%'}} >
          <View style={{width:4,height:4,borderRadius:4,backgroundColor:'#76797E',marginVertical:1}} />
          <View style={{width:4,height:4,borderRadius:4,backgroundColor:'#76797E',marginVertical:1}} />
          <View style={{width:4,height:4,borderRadius:4,backgroundColor:'#76797E',marginVertical:1}} />
        </View>
      </View>
      <View style={{height:'50%', alignItems:'flex-end', paddingRight:20}} >
        <Text style={{color:'#DBDCE0',fontSize:45}} > 9+8-5% </Text>
      </View>
      <View style={{height:'10%',alignItems:'center', justifyContent:'flex-end',paddingBottom:5}} >
        <View style={{ width:25,height:4,borderRadius:6,backgroundColor:'#DBDCE0' }} />
      </View>
    </View>
  )
}