import { dbPrincipal } from '../DAO/criacaoTabelasApp'


export function cadastroExercicios(nome, observacao) {
    return new Promise(result => {
        dbPrincipal.transaction(tx => {
            tx.executeSql('INSERT INTO exercicios (nomeExercicio, observacaoExercicio) values(?, ?)', [nome, observacao], (err, data) => {
                result(true)
            })
        })
    })
}

export function busca() {
    return new Promise(result => {
        dbPrincipal.transaction(tx => {
            tx.executeSql(`
            SELECT  
                rowId,
                nomeExercicio ,
                observacaoExercicio
            FROM 
                exercicios`, [], (err, data) => {
                if(data.rows.length > 0){
                    result(data.rows._array)
                }
            })
        })
    })
}

export function buscaTreinos() {
    return new Promise(result => {
        dbPrincipal.transaction(tx => {
            tx.executeSql(`
            SELECT  
                * 
            FROM 
                treinos
            `, [], (err, data) => {
                if(data.rows.length > 0){
                    result(data.rows._array)
                }
            })
        })
    })
}

export function CadastroTreinos(nome) {
    return new Promise(result => { 
        dbPrincipal.transaction(tx => { // aqui começa a transação do banco
            tx.executeSql('INSERT INTO treinos (nomeTreino) values(?)', [nome], (err, data)=> {
                result(true)  
            })
        })
        
    })
}

export function InsereExerciciosNoTreino(dados){
    return new Promise(result => {
        dbPrincipal.transaction(tx => {
            tx.executeSql(`
                INSERT INTO 
                    informacaoExercicio(
                        numeroDeSeries, 
                        numeroDeRepeticoes, 
                        carga, 
                        tempoDeDescanso, 
                        nomeExercicio, 
                        observacaoExercicio,
                        nomeTreino
                    ) 
                values(?, ?, ?, ?, ?, ?, ?)`, 
                [
                    dados.numeroDeSeries, 
                    dados.numeroDeRepeticoes, 
                    dados.carga, 
                    dados.tempoDeDescanso, 
                    dados.nomeExercicio, 
                    dados.observacaoExercicio,
                    dados.nomeTreino
                ], (err, data)=> {
               result(true) 
            })
        })
    })
}