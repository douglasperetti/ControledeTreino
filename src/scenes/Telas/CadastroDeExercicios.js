import React, { Component } from 'react';
import { Input } from 'react-native-elements'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import Header from '../../componentes/Header';
import StatusBar from '../../componentes/StatusBar';
import { criaTabelaExercicios } from '../../DAO/criacaoTabelasApp'
import { cadastroExercicios, teste } from '../../functions/crudExercicios'
import { Button } from 'native-base'



export default class CadastroDeExercicios extends Component {

  componentDidMount() {
    criaTabelaExercicios()
    // teste()
  }

  constructor() {
    super()
    this.state = {
      nomeExercicio: '',
      observacao: ''
    }
  }

  async cadastrar(nome, obs){
    let result = await cadastroExercicios(nome, obs)
    if(result){
      Alert.alert('Aviso!','Exercício cadastrado com sucesso! Deseja cadastrar um novo exercício?',
        [{
          text: 'Sim', onPress: () => this.setState({nomeExercicio: '', observacao: ''})
        },
          {
            text: 'Não', onPress:() => this.props.navigation.navigate('MenuPrincipal')
          }])
      }
      
      
    }
  

  render() {
    return (
      <ImageBackground style={estiloCadastroDeExercicios.container}
        source={require('../../img/Teladefundo.jpg')}>
        <StatusBar />
        <Header
          titulo='Cadastro de Exercícios'
          mostraVoltar={true}
          voltar={() => this.props.navigation.navigate('MenuPrincipal')}
        />
        
        <ScrollView>
        <KeyboardAvoidingView behavior='position'>
          <View style={estiloCadastroDeExercicios.viewPrincipal}>
            <View style={estiloCadastroDeExercicios.viewTitulo}>
              <Text style={estiloCadastroDeExercicios.txtTitulo}>CONTROLE</Text>
              <Text style={estiloCadastroDeExercicios.txtTitulo}>DE TREINO</Text>
            </View>
            <View style={[estiloCadastroDeExercicios.viewComponentes]}>
              <Input
                value={this.state.nomeExercicio}
                autoFocus={true}
                placeholder='Nome do Exercício'
                placeholderTextColor={'#ccc'}
                onChangeText={(nomeExercicio) => this.setState({ nomeExercicio })}
                onSubmitEditing={() => this.inputObs.focus()}
                inputContainerStyle={estiloCadastroDeExercicios.input}
              />
            </View>
            <View style={[estiloCadastroDeExercicios.viewComponentes]}>
              <Input
                value={this.state.observacao}
                ref={ref => this.inputObs = ref}
                placeholder='Observação'
                placeholderTextColor={"#ccc"}
                onChangeText={(observacao) => this.setState({ observacao })}
                inputContainerStyle={estiloCadastroDeExercicios.input}
                style={estiloCadastroDeExercicios.input}
              />
            </View>
            <View style={[estiloCadastroDeExercicios.viewComponentes, { backgroundColor: '' }]}>
              <Button
                full
                rounded
                //onPress={() => cadastroExercicios(this.state.nomeExercicio, this.state.observacao)}
                onPress={()=> this.cadastrar(this.state.nomeExercicio, this.state.observacao)}
                style={estiloCadastroDeExercicios.btnCadastrar}>
                <Text style={estiloCadastroDeExercicios.txtBtn}>Cadastrar</Text>
              </Button>
            </View>
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
       
      </ImageBackground>
    );
  }
}



const estiloCadastroDeExercicios = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#1e272e'
  },
  viewPrincipal: {
    borderColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 20,
    flex: 1,

  },

  viewComponentes: {
    marginTop: 80,
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 0,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 20
  },
  viewTitulo: {
    alignItems: 'center',
    marginTop: 100
  },
  txtTitulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnCadastrar: {
    backgroundColor: 'red'
  },
  txtBtn: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
  },
  input:{
    backgroundColor: '#fff', 
    borderRadius: 25
  },
  placeHolderColor:{
    color:'#e67e22'
  }

})
export { CadastroDeExercicios }