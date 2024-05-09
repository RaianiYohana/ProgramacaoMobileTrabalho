import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';

export default function App() {

  function msg(){
    Alert.alert("Botão foi clickado!")
  }
  function mostrarItemLista(item){
    return ( 
      <View style={styles.item}>
        <Text >{item}</Text>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >App de IMC do IFC</Text>
     
      
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
  title: {
    marginTop: '10%',
    fontSize: 20
  },
  logo: {
    width: 50,
    height: 50,
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    width:'70%'
  },
  buttonContainer:{
    marginTop: '5%', 
    width: '70%',
  },
  list:{
    width:'70%',
  },
  item:{
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    borderColor: 'black',
    borderBottomWidth: 1
  }
});