import { StyleSheet, Text, TextInput, View } from 'react-native';
import { React, useState } from "react";
import Componente1 from './compnentes/componente1';
import Componente2 from './compnentes/componente2';
import Componente3 from './compnentes/componente3';
import Componente4 from './compnentes/componente4';

export default function App() {
  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [lista, setLista] = useState([]);

  function mostrarMensagem() {
    var imc = peso / (altura * altura)
    setLista([...lista, "Peso: " + peso + ", altura: " + altura + ", nIMC: " + imc.toFixed(2)])
  }

  return (
    <View style={styles.container}>
      <Componente1 cor="purple" tamanho={45} titulo={"App de IMC"}></Componente1>
      {/* Segunda questao */}
      <Componente2
        funcao={setPeso}
        titulo="Peso"
        sugestao='Ex 50.5'
        tipoTeclado='numeric' ></Componente2>
      <Componente2 funcao={setAltura} titulo="altura" sugestao='1.68' tipoTeclado='numeric' ></Componente2>
      < Componente3
        larguraBotao={100}
        mostrarMensagemBt={mostrarMensagem}
      ></Componente3>

      < Componente4 itens={lista}> </Componente4>

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
  }

})
