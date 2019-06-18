import React from 'react'

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default props => (
    <View style={estilo.viewHeader}>
        {
            props.mostraVoltar
                ?
                <TouchableOpacity onPress={() => props.voltar()}>
                    <View style={estilo.setaVoltar}>
                        <Image source={require('../ico/left-arrow.png')} style={estilo.estiloIcone} />
                    </View>
                </TouchableOpacity>

                : null
        }
        <View style={estilo.viewTitulo}>
            <Text style={estilo.estiloTexto}>{props.titulo}</Text>
        </View>

    </View>
)


const estilo = StyleSheet.create({
    viewHeader: {
        height: 40,
        backgroundColor: 'red',
        alignItems: 'center',
        flexDirection: 'row'
    },
    estiloTexto: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
    },
    estiloIcone: {
        width: 35,
        height: 35
    },
    viewTitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    setaVoltar: {
        marginLeft: 10
    }

})