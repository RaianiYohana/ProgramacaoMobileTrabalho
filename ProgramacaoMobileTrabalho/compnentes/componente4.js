// Quetao 4 - crie um componente que exiba uma lista de itens usando a FlatList. A lista deve ser passada usando props.
import React from  "react";
import { View, Text, FlatList } from "react-native";




  
function mostrarItemLista(item){
    return ( 
      <View >
        <Text >{item}</Text>
      </View>
    )
  }
  
  export default function componente4(props){
    return (
        
        <FlatList
          
          data={ props.itens }
          renderItem={({item}) => mostrarItemLista(item)}
        />
    )
}