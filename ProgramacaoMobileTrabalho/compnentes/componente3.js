import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function componente3(props){
    return(
        <View style={[
{marginTop: 33},
{width: props.larguraBotao}
        ] }>
<Button
          color='grey'
          title='Calcular o IMC informado'
          onPress={mostrarMensagemBt} />
        </View>
    )
}
