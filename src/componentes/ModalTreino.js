import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Button, Card } from 'react-native-elements';
import ModalInfoExercicio from '../componentes/ModalInfoExercicio'

export default class ModalTreino extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: [],
            abreModalInfo:false,
            dadosExercicio:[],
        }
    }


    componentWillReceiveProps(props) {
        this.setState({ result: props.data})
    }

    abreModalInfo(dado){
        this.setState({
            dadosExercicio:dado,
            abreModalInfo:true
        })
    }


    itensLista = ({ item }) => (
    
        <TouchableOpacity onPress={()=> this.abreModalInfo(item)}>
            <Card  containerStyle={{borderRadius:15, elevation:10, marginBottom:10}}>
                    <Text>{item.nomeExercicio}</Text>
                    <Text>{item.observacaoExercicio}</Text>

            </Card>

        </TouchableOpacity>

    )

    render() {
        return (
            <View style={estilo.viewPrincipal}>
            <ModalInfoExercicio
                dadosExercicio = {this.state.dadosExercicio}
                visible = {this.state.abreModalInfo}
                fechar ={()=> this.setState({abreModalInfo:false})}
            />
                <Modal onRequestClose={this.props.fechar} visible={this.props.visible} animationType='slide'>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.props.data}
                            renderItem={this.itensLista}
                        />
                    </View>
                    <Button title={'Fechar'} onPress={this.props.fechar} />
                </Modal>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    viewPrincipal: {
        flex: 1
    }
})
