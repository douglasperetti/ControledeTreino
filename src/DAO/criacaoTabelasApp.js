import { SQLite } from 'expo'
var dbPrincipal = SQLite.openDatabase('db.db')

export function criaTabelaExercicios() {
    dbPrincipal.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS exercicios
            (
		nomeExercicio text,
		observacaoExercicio text
	    )
        `)
    })
}

export function criaTabelaTreinos() {
    dbPrincipal.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS treinos(
                nomeTreino text
            )
        `)
    })
}

export function criaTabelainformacaoExercicio() {
    dbPrincipal.transaction(tx => {
        tx.executeSql(
            `
                CREATE TABLE IF NOT EXISTS informacaoExercicio(
                    numeroDeSeries INTEGER,
                    numeroDeRepeticoes INTEGER,
                    carga REAL, 
                    tempoDeDescanso INTEGER,
                    nomeExercicio TEXT,
                    observacaoExercicio TEXT,
                    nomeTreino TEXT
                )
            `
        )
    })
}




export { dbPrincipal }
