import { buscaExerciciosTreino } from '../../functions/crudExercicios'

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Alert
} from 'react-native';
import { Button } from 'native-base'

import Header from '../../componentes/Header';
import StatusBar from '../../componentes/StatusBar';
import TemporizadorTreino from '../../componentes/TemporizadorTreino'

export default class IniciarTreino extends Component {


    constructor() {
        super()
        this.state = {
            dadosTreino: [],
            seriesConcluidas: 0,
            cronometroDescanso: 0,
            tempo: 0,
            min: 0,
            seg: 0,
            terminarTreino : false
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

    setaValores(tempo) {
        let min
        let seg
        if (tempo >= 60) {
            min = Math.floor(tempo / 60)
            seg = tempo % 60
        } else {
            min = 0
            seg = tempo
        }
        this.iniciaCronometro(min, seg)
    }

    iniciaCronometro(min, seg) {
        let cont = 0
        if (min == 0) {
            for (let s = seg; s >= 0; s--) {
                setTimeout(() => this.atualizaEstado(min, s), cont * 1000)
                cont++
            }
        } else {
            for (let m = min; m >= 0; m--) {
                for (let s = seg; s >= 0; s--) {
                    setTimeout(() => this.atualizaEstado(m, s), cont * 1000)
                    cont++
                }
                seg = 59
            }
        }
    }

    atualizaEstado(m, s) {
        if((s == 0) && (m == 0)){
            this.setState({seriesConcluidas : this.state.seriesConcluidas + 1})
            if (this.state.dadosTreino[0].numeroDeSeries !== this.state.seriesConcluidas){
                Alert.alert('Aviso', 'Tempo de descanso esgotado!')
            }
        }

        this.setState({ min: m })
        this.setState({ seg: s })

        if (this.state.seriesConcluidas == this.state.dadosTreino[0].numeroDeSeries){
            this.setState({terminarTreino : true})
            return
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

                    <View style={estilos.viewSeriesConcluidas}>
                        <Text style={estilos.textInfExercicios}>Séries concluídas: </Text>
                        <Text style={estilos.infExercicios}>{this.state.seriesConcluidas}</Text>
                    </View>

                    <View style={estilos.viewTempoDescanso}>
                        <Text style={estilos.textTempoDescanso}>Tempo de descanso: </Text>
                        {
                            this.state.min < 10
                                ?
                                <Text style={estilos.textTempoDescanso}>0{this.state.min}</Text>
                                :
                                <Text style={estilos.textTempoDescanso}>{this.state.min}</Text>
                        }

                        <Text style={estilos.textTempoDescanso}>:</Text>

                        {
                            this.state.seg < 10
                                ?
                                <Text style={estilos.textTempoDescanso}>0{this.state.seg}</Text>
                                :
                                <Text style={estilos.textTempoDescanso}>{this.state.seg}</Text>
                        }
                    </View>

                    <View style={estilos.viewBtnDescansoIniciar}>
                        <Button
                            onPress={() => this.setaValores(this.state.dadosTreino[0].tempoDeDescanso)}
                            style={estilos.btnDescanso}>
                            <Text style={estilos.txtBtnDescansoIniciar}>INICIAR DESCANSO</Text>
                        </Button>
                    </View>
                    <TemporizadorTreino
                        terminarTreino = {this.state.terminarTreino}
                    />
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
        marginTop: 35,
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
        fontSize: 15,
        fontWeight: '100',
    },
    viewDadosDoExercicio: {
        marginTop: 52,
        marginLeft: 43,
        justifyContent: 'center'
    },
    linhasInfExercicio: {
        flexDirection: 'row'
    },
    viewSeriesConcluidas: {
        flexDirection: 'row',
        marginTop: 52,
        marginLeft: 43
    },
    viewTempoDescanso: {
        flexDirection: 'row',
        marginTop: 52,
        marginLeft: 43
    },
    textTempoDescanso: {
        color: 'red',
        fontSize: 15
    },
    viewBtnDescansoIniciar: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnDescanso: {
        width: 280,
        backgroundColor: 'red',
        height: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtnDescansoIniciar: {
        color: '#FFF'
    }
})