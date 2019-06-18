import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image
} from 'react-native';
import Header from '../../componentes/Header';
import StatusBar from '../../componentes/StatusBar';
import { Button } from 'native-base'
import { criaTabelainformacaoExercicio } from '../../DAO/criacaoTabelasApp'




export default class MenuPrincipal extends Component {

  componentDidMount(){
    criaTabelainformacaoExercicio()
  }


  render() {
    return (
      <ImageBackground style={estiloCadastroDeExercicios.container}
        source={require('../../img/Teladefundo.jpg')}>
        <StatusBar />
        <Header titulo='Menu Principal' />
        <ScrollView>
          <View style={estiloCadastroDeExercicios.viewPrincipal}>
            <View style={estiloCadastroDeExercicios.viewTitulo}>
              <Text style={estiloCadastroDeExercicios.txtTitulo}>CONTROLE</Text>
              <Text style={estiloCadastroDeExercicios.txtTitulo}>DE TREINO</Text>
            </View>
            <View style={[estiloCadastroDeExercicios.viewComponentes, { borderColor: null, borderWidth: 0, backgroundColor: null}]}>
              <Button full style={estiloCadastroDeExercicios.btnS} onPress={() => this.props.navigation.navigate('MeusTreinos')} >
                <Text style={estiloCadastroDeExercicios.txtBtn}>Meus Treinos</Text>
              </Button>
            </View>
            <View style={[estiloCadastroDeExercicios.viewComponentes, { borderColor: null, borderWidth: 0, backgroundColor: null, paddingVertical: 20 }]}>
              <Button full style={estiloCadastroDeExercicios.btnS} rounded onPress={() => this.props.navigation.navigate('CadastroDeExercicios')}>

                <Text style={estiloCadastroDeExercicios.txtBtn}>Cadastro de Exercícios</Text>
              </Button>
            </View>
            <View style={[estiloCadastroDeExercicios.viewComponentes, { borderColor: null, borderWidth: 0, backgroundColor: null, paddingVertical: 20 }]}>
              <Button full style={estiloCadastroDeExercicios.btnS} rounded onPress={() => this.props.navigation.navigate('CadastroDeTreinos')} >
                <Text style={estiloCadastroDeExercicios.txtBtn}>Cadastro de Treinos</Text>
              </Button>
            </View>
          </View>
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
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 10,
    backgroundColor: '#fff',

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
  btnS: {
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius:10,
    paddingVertical:5,
    alignItems:'center',
    justifyContent:'center',

  },
  txtBtn: {
    fontWeight: 'bold',
    fontSize: 18,
    

  }


})
