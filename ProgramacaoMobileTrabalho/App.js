import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';
import Componente1 from './compnentes/componente1';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Componente1 cor="purple" tamanho={45} titulo={"App de IMC"}></Componente1>
      
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