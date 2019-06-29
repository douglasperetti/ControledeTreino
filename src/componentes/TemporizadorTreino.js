import React from 'react'

import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    AppRegistry 
} from 'react-native'
import { Button } from 'native-base'
import FormatTime from 'minutes-seconds-milliseconds' 

export default class TemporizadorTreino extends React.Component {

    constructor() {
        super()
        this.state = {
            tempoDecorrido: null,
            correndo: false,
            iniciarTempo: null
        }
    }

    startStop(){
        return <Button
                    onPress={() => this.handlePress()}
                    style={estilos.btnIniciar}
                >
        <Text style={estilos.txtBtnDescansoIniciar}>{this.state.correndo ? 'FINALIZAR TREINO' : 'INICIAR TREINO'}</Text>
    </Button>
    }

    handlePress(){
        if(this.state.correndo == true) {
            clearInterval(this.intervalo)

            this.setState({correndo: false})
            return
        }

        this.setState({iniciarTempo: new Date()})

        this.intervalo = setInterval(() => {
            this.setState({
                tempoDecorrido : new Date() - this.state.iniciarTempo,
                correndo : true
            })
        }, 30)
    }

    render() {
        return (
            <View>
                <View style={estilos.viewTempoTreino}>
                    <Text style={estilos.textTempoTreino}>Tempo total de treino: </Text>
                    <Text style={estilos.textTempoTreino}>
                        {FormatTime(this.state.tempoDecorrido)}
                    </Text>
                </View>
                <View style={estilos.viewBtnDescansoIniciar}>
                    {this.startStop()}
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