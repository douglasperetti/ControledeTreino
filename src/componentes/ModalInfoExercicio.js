import React from 'react'
import { Modal, View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { InsereExerciciosNoTreino } from '../functions/crudExercicios'
export default class ModalInfoExercicio extends React.Component{

    constructor(props){
        super(props)
        this.state={
            nomeExercicio:'',
            observacaoExercicio:'',
            numeroDeSeries:'',
            numeroDeRepeticoes: '',
            carga: '', 
            tempoDeDescanso: '',
            nomeTreino: ''
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            nomeExercicio:props.dadosExercicio.nomeExercicio,
            observacao:props.dadosExercicio.observacaoExercicio,
            nomeTreino:props.dadosExercicio.nomeTreino
        })
    }

    validaCampoSerie(numeroDeSeries){ 
        
        if(numeroDeSeries == 0 && numeroDeSeries != ''){
            alert('O Valor não pode ser igual a zero')
        }else{
            this.setState({numeroDeSeries})
        }
    }

    validaNumeroDeRepeticoes(numeroDeRepeticoes){ 
        
        if(numeroDeRepeticoes == 0 && numeroDeRepeticoes != ''){
            alert('O Valor não pode ser igual a zero')
        }else{
            this.setState({numeroDeRepeticoes})
        }
    }

    validaCarga(carga){ 
        
        if(carga == 0 && carga != ''){
            alert('O Valor não pode ser igual a zero')
        }else{
            this.setState({carga})
        }
    }

    validaTempoDeDescanso(tempoDeDescanso){ 
        
        if(tempoDeDescanso == 0 && tempoDeDescanso != ''){
            alert('O Valor não pode ser igual a zero')
        }else{
            this.setState({tempoDeDescanso})
        }
    }
    
    insereRegistros(dados){
        InsereExerciciosNoTreino(dados)
        /*numeroDeSeries,
        numeroDeRepeticoes,
        carga, 
        tempoDeDescanso*/ 
    }

    render(){
        return(
            <Modal visible={this.props.visible} onRequestClose={this.props.fechar}>
            <View style={{flex:1}}>
            <Text>{this.state.nomeExercicio}</Text>
            <Text>{this.state.nomeTreino}</Text>
            <View>
                <Input
                    value={this.state.numeroDeSeries}
                    errorMessage={this.state.numeroDeSeries.trim().length == 0 ? 'Campo obrigatório' : null}
                    onChangeText={(numeroDeSeries)=> this.validaCampoSerie(numeroDeSeries)}
                    placeholder = {'Número de séries'}
                />
            </View>

            <View>
                <Input
                    value={this.state.numeroDeRepeticoes}
                    errorMessage={this.state.numeroDeRepeticoes.trim().length == 0 ? 'Campo obrigatório' : null}
                    onChangeText={(numeroDeRepeticoes)=> this.validaNumeroDeRepeticoes(numeroDeRepeticoes)}
                    placeholder = {'Número de repetições'}
                />
            </View>

            <View>
                <Input
                    value={this.state.carga}
                    errorMessage={this.state.carga.trim().length == 0 ? 'Campo obrigatório' : null}
                    onChangeText={(carga)=> this.validaCarga(carga)}
                    placeholder = {'Informe a carga'}
                />
            </View>
            <View>
                <Input
                    value={this.state.tempoDeDescanso}
                    errorMessage={this.state.tempoDeDescanso.trim().length == 0 ? 'Campo obrigatório' : null}
                    onChangeText={(tempoDeDescanso)=> this.validaTempoDeDescanso(tempoDeDescanso)}
                    placeholder = {'Informe o tempo de descanso entre as séries em segundos'}
                />
            </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around' }}>
            <Button title={`Fechar`} onPress={()=> this.props.fechar()}/>
            <Button title={`Salvar`} onPress={()=> this.insereRegistros(this.state)}/>

            </View>
            
            </Modal>
        )
    }
}