import { SQLite } from 'expo'
var dbPrincipal = SQLite.openDatabase('db.db')

export function criaTabelaTreinos(){
    dbPrincipal.transaction(tx => {
        tx.executeSql(`
        CREATE TABLE IF NOT EXISTS treinos(
            nomeTreino text
        )`)
    })
}