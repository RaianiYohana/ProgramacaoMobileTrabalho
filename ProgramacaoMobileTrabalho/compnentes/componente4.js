// Quetao 4 - crie um componente que exiba uma lista de itens usando a FlatList. A lista deve ser passada usando props.
import React from  "react";
import { View, Text, FlatList } from "react-native";




  
function mostrarItemLista(item){
    return ( 
      <Text >{item}</Text>
    )
  }
  
  export default function componente4(props){
    console.log(props.itens);
    return (
        
        <FlatList style={{width:'70%'}} data={ props.itens }
          renderItem={({item}) => mostrarItemLista(item)}
        />
    )
}