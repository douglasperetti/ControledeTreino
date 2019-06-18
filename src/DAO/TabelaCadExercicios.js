import { SQLite } from 'expo'
var dbPrincipal = SQLite.openDatabase('db.db')

export function criaTabelaExercicios() {
    dbPrincipal.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS exercicios(
		        nomeExercicio text,
		        observacaoExercicio text
	    )
        `)
    })
}