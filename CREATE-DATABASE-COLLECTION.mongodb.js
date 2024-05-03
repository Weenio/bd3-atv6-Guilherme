/*Define o nome do banco de dados*/

const database = 'BD3-NoSQL-AtlasMongoDB'

/*Define o nome da collection*/

const collection = 'bd3-atv6-Guilherme'

/*Acessa o banco de dados*/

use(database)

/*Cria a collection*/

db.createCollection(collection)