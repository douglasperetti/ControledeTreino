import { buscaExerciciosTreino } from '../../functions/crudExercicios'

import React, { Component } from 'react';
import { Input, Card } from 'react-native-elements'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { Button } from 'native-base'

import Header from '../../componentes/Header';
import StatusBar from '../../componentes/StatusBar';

export default class IniciarTreino extends Component {

    constructor() {
        super()
        this.state = {
            dadosTreino: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            dadosTreino: nextProps.navigation.getParam('dadosDoSeuTreino')
        }
    }

    componentDidMount() {
        this.buscaExercicios(this.state.nomeTreino)
    }

    async buscaExercicios(nomeTreino) {
        let result = await buscaExerciciosTreino(nomeTreino)
        if (result.length > 0) {
            this.setState({ dadosTreino: result })
        }
    }

    render() {
        return (
            <ImageBackground style={estilos.container}
                source={require('../../img/Teladefundo.jpg')}>
                <StatusBar />
                <Header
                    titulo='Iniciar Treino'
                    mostraVoltar={true}
                    voltar={() => this.props.navigation.navigate('MeusTreinos')}
                />
                <View style={estilos.viewPrincipal}>
                    <View style={estilos.viewNomeTreino}>
                        <Text style={estilos.textNomeDoTreino}>Nome do treino: </Text>
                        <Text style={estilos.nomeDoTreino}>{this.state.dadosTreino[0].nomeTreino}</Text>
                    </View>

                    <View style={estilos.viewDadosDoExercicio}>
                        <View style={estilos.linhasInfExercicio}>
                            <Text style={estilos.textInfExercicios}>Nome do exercício: </Text>
                            <Text style={estilos.infExercicios}>{this.state.dadosTreino[0].nomeExercicio}</Text>
                        </View>

                        <View style={estilos.linhasInfExercicio}>
                            <Text style={estilos.textInfExercicios}>Quantidade de séries: </Text>
                            <Text style={estilos.infExercicios}>{this.state.dadosTreino[0].numeroDeSeries}</Text>
                        </View>

                        <View style={estilos.linhasInfExercicio}>
                            <Text style={estilos.textInfExercicios}>Carga: </Text>
                            <Text style={estilos.infExercicios}>{this.state.dadosTreino[0].carga}</Text>
                        </View>

                        <View style={estilos.linhasInfExercicio}> 
                            <Text style={estilos.textInfExercicios}>Tempo de descanso: </Text>
                            <Text style={estilos.infExercicios}>{this.state.dadosTreino[0].tempoDeDescanso}</Text>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        )
    }

}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#1e272e'
    },
    viewPrincipal: {
        flex: 1
    },
    viewNomeTreino: {
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textNomeDoTreino: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25
    },
    nomeDoTreino: {
        color: '#FFF',
        fontSize: 25
    },
    textInfExercicios: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    },
    infExercicios: {
        color: '#FFF',
        fontSize: 15
    },
    viewDadosDoExercicio: {
        marginTop: 60,
        marginLeft: 43,
        justifyContent: 'center'
    },
    linhasInfExercicio:{
        flexDirection: 'row'
    }
})