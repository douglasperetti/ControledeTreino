import React from 'react'

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'

export default class TemporizadorTreino extends React.Component {

    constructor() {
        super()
        this.state = {
            min: 0,
            seg: 0,
        }
    }

    iniciaCronometro(nSeries) {
        console.log(nSeries)
    }

    render() {
        return (
            <View>
                <View style={estilos.viewTempoTreino}>
                    <Text style={estilos.textTempoTreino}>Tempo total de treino: </Text>
                    {
                        this.state.min < 10
                            ?
                            <Text style={estilos.textTempoTreino}>0{this.state.min}</Text>
                            :
                            <Text style={estilos.textTempoTreino}>{this.state.min}</Text>
                    }

                    <Text style={estilos.textTempoTreino}>:</Text>

                    {
                        this.state.seg < 10
                            ?
                            <Text style={estilos.textTempoTreino}>0{this.state.seg}</Text>
                            :
                            <Text style={estilos.textTempoTreino}>{this.state.seg}</Text>
                    }
                </View>
                <View style={estilos.viewBtnDescansoIniciar}>
                    <Button
                        //onPress={() => this.iniciaCronometro(this.state.numeroDeSeries)}
                        style={estilos.btnIniciar}>
                        <Text style={estilos.txtBtnDescansoIniciar}>INICIAR TREINO</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    viewTempoTreino: {
        flexDirection: 'row',
        marginTop: 52,
        marginLeft: 43
    },
    textTempoTreino: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '100'
    },
    btnIniciar: {
        width: 280,
        borderWidth: 1,
        height: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: 'red'
    },
    viewBtnDescansoIniciar: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtnDescansoIniciar: {
        color: '#FFF'
    }
})