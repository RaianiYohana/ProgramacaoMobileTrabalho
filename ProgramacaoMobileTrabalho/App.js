import { StyleSheet, Text, TextInput, View} from 'react-native';
import { React, useState } from "react";
import Componente1 from './compnentes/componente1';
import Componente2 from './compnentes/componente2';
import Componente4 from './compnentes/componente4';

export default function App() {
  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  function mostrarItemLista(item){
    return ( 
      <View style={styles.item}>
        <Text >{item}</Text>
      </View>
    )
}
  return (
    <View style={styles.container}>
      <Componente1 cor="purple" tamanho={45} titulo={"App de IMC"}></Componente1>
      {/* Segunda questao */}
      <Componente2 
        funcao={setPeso}
        titulo="Peso"
        sugestao='Ex 75.3'
        tipoTeclado='numeric' ></Componente2>
        <Componente2 funcao={setAltura} titulo="altura" sugestao='1.68' tipoTeclado='numeric' ></Componente2>
        {/*Quarta questao */}
        <Componente4 item={mostrarItemLista}
        
         
        ></Componente4>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    width: '100%'
  },
  item:{
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    borderColor: 'black',
    borderBottomWidth: 1
  }

})
