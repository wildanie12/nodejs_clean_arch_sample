const mongo = require('../database/mongo')

class UserModel {

    constructor() {
        this.collection = mongo.db.collection('user')
    }

    create = async (data) => {
        const tx = await this.collection.insertOne(data)
        return data
    }

    update = async (data, query) => {
        const tx = await this.collection.updateOne(query, update)
        return data
    }

    delete = async (query) => {
        const result = await this.collection.deleteOne(query)
        return result
    }

    createMany = async (data) => {
        const tx = await this.collection.insertMany(data)
        return data
    }

    updateMany = async (data, query) => {
        const tx = await this.collection.updateMany(query, update)
        return data
    }

    deleteMany = async (query) => {
        const result = await this.collection.deleteMany(query)
        return result
    }
}

module.exports = UserModel