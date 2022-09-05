
const { MongoClient } = require('mongodb')

const dbURI = `mongodb://localhost:27017`
const client = new MongoClient(dbURI)

const ping = async () => {
    try {
        db = client.db('mengjs_testing').command({ ping: 1 })
        console.log(`[database]: Connected to mongodb database, uri: ${dbURI}`)
        return db
    } catch (err) {
        await client.close()
        console.error(`[database]: Failed to connect to mongodb, uri: ${dbURI}, err: ${err.message}`)
    }
}


module.exports = { db: client.db('mengjs_testing'), ping }

