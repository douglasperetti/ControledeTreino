import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, FlatList } from 'react-native'
import { Card } from 'react-native-elements';
import Header from '../../componentes/Header';
import StatusBar from '../../componentes/StatusBar';
import { buscaTreinos } from '../../functions/crudExercicios'
export default class MeusTreinos extends React.Component {

    constructor() {
        super()
        this.state = {
            dados: []
        }
    }

    componentDidMount() {
        this.buscaDadosBanco()
    }

    async buscaDadosBanco() {
        let result = await buscaTreinos()
        if (result.length > 0) {
            this.setState({ dados: result })
        }
    }


    itensLista = ({ item }) => (
        <TouchableOpacity>
            <Card containerStyle={{ borderRadius: 15, elevation: 10, marginBottom: 10 }}>
                <Text>{item.nomeTreino}</Text>
            </Card>

        </TouchableOpacity>
    )

    render() {
        return (
            <ImageBackground style={estilos.container}
                source={require('../../img/Teladefundo.jpg')}>
                <StatusBar />
                <Header titulo='Meus Treinos' />
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.dados}
                        renderItem={this.itensLista}
                    />
                </View>
            </ImageBackground >

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
})