import React, { Component } from 'react';
import { Input, Card } from 'react-native-elements'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import Header from '../../componentes/Header';
import StatusBar from '../../componentes/StatusBar';
import { criaTabelaTreinos } from '../../DAO/criacaoTabelasApp'
import { Button } from 'native-base'
import ModalTreino from '../../componentes/ModalTreino'
import { busca, CadastroTreinos } from '../../functions/crudExercicios'




export default class SelecionaExercicios extends Component {

  componentDidMount() {
    this.buscaDadosBanco()
  }

  constructor() {
    super()
    this.state = {
      dados:[],
      abreModal:false,
      nomeTreino: ''
    }
  }

  async buscaDadosBanco(){
    let result = await busca()
    if(result.length > 0){
      for (let i = 0; i < result.length; i++){
        result[i].nomeTreino = this.props.navigation.getParam('nomeDoTreino')
      }

      this.setState({dados:result})
    }
  }

  render() {
    return (
      <ImageBackground style={estiloCadastroDeTreinos.container}
        source={require('../../img/Teladefundo.jpg')}>
        <StatusBar />
        <Header
          titulo='Seleciona Exercicios'
          mostraVoltar={true}
          voltar={() => this.props.navigation.navigate('MenuPrincipal')}
        />

        <ModalTreino
          fechar={()=> this.setState({abreModal:false})}
          visible ={this.state.abreModal}
          data ={this.state.dados}
        />
        <ScrollView>
          <View style={estiloCadastroDeTreinos.viewPrincipal}>
            <View style={estiloCadastroDeTreinos.viewTitulo}>
              <Text style={estiloCadastroDeTreinos.txtTitulo}>CONTROLE</Text>
              <Text style={estiloCadastroDeTreinos.txtTitulo}>DE TREINO</Text>
            </View>
            <View style={[estiloCadastroDeTreinos.viewComponentes, { backgroundColor: '' }]}>
              <Button
                full
                rounded
                style={estiloCadastroDeTreinos.btnCadastrar}
                onPress={()=> this.setState({abreModal:true})}
                >
                <Text style={estiloCadastroDeTreinos.txtBtn}>Selecionar Exercício</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}


const estiloCadastroDeTreinos = StyleSheet.create({
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
  placeholdercolor:{
    color:'#ccc'
  }

})
export { SelecionaExercicios }