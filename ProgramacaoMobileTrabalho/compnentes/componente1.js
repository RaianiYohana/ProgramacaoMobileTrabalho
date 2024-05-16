import React from 'react';
import { StyleSheet, Text } from 'react-native';

var titulo
var corTexto
var tamanhoFonte
export default function Componente1(props){
    return(
    <Text style={[
        {color:props.cor},
        {fontSize:props.tamanho}
    ]} > {props.titulo} </Text>
    )
}