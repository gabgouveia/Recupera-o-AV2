import * as React from 'react-native'
import { useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function Cadastro() {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const [tecnico, setTecnico] = useState({
    nome: '',
    idade: '',
    nacionalidade: '',
    experiencia: '',
  });

  function handleInputChange(field, value) {
    setTecnico({
      ...tecnico,
      [field]: value,
    });
  }

  function cadastrar() {
    console.log(tecnico);
    setIsVisible(true)
  }

  function lista() {
    console.log(tecnico);
    navigation.navigate('list')
  }

  // useEffect(() => {
  //   fetchFormulario();
  // }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formulário</Text>
      
      <TextInput
        style={styles.input}
        placeholder = 'Nome'
        value={tecnico.nome}
        onChangeText={(text) => handleInputChange('nome', text)}
      />

      <TextInput
        style={styles.input}
        placeholder = 'Idade'
        value={tecnico.idade}
        onChangeText={(text) => handleInputChange('idade', text)}
      />

      <TextInput
        style={styles.input}
        placeholder = 'Nacionalidade'
        value={tecnico.nacionalidade}
        onChangeText={(text) => handleInputChange('nacionalidade', text)}
      />

      <TextInput
        style={styles.input}
        placeholder = 'Experiência'
        value={tecnico.experiencia}
        onChangeText={(text) => handleInputChange('experiencia', text)}
      />
{isVisible && (
<View style={styles.lista}>
<Text style={styles.inputValue}>Nome: {tecnico.nome}</Text>
<Text style={styles.inputValue}>Idade: {tecnico.idade}</Text>
<Text style={styles.inputValue}>Nacionalidade: {tecnico.nacionalidade}</Text>
<Text style={styles.inputValue}>Experiencia em anos: {tecnico.experiencia}</Text>
</View>)}
  <View style={styles.btnContainer}>
    <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTxt}>cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={lista}>
        <Text style={styles.btnTxt}>Ver lista de jogadores</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 30,
        fontWeight: 'bold'
      },
      input:{
        color: "black",
        fontSize: 15,
        padding: 9,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#FFFF",
        borderRadius: 5,
        marginBottom: 12,
        margin: 10
      },
      inputValue:{
        fontSize: 14,
        width: '60%',
        color: 'black',
        marginBottom: 20
      },
      btn: {
        color:"white",
        marginTop: 10,
        padding: 15,    
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "gray",
        height: 50,
        margin: 20
      },
      btnTxt: {
        fontFamily: "Arial",
        color: "white",
      },
      btnContainer: {
        flex: 1,
        flexDirection: "row"
      },
      textInput: {
        fontSize: 16,
        width: '60%',
        marginBottom: 5,
        color: "black"
      },
})