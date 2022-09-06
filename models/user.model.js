const mongo = require("../database/mongo")

const objectHelper = require("../app/http/helpers/object.helper")
class UserModel {
    constructor() {
        this.collection = mongo.db.collection("user")
    }

    findAll = async (query = {}) => {
        const tx = this.collection.find(query)
        return tx
    }

    find = async (query) => {
        const data = await this.collection.findOne(query)
        return data
    }

    create = async (data) => {
        const tx = await this.collection.insertOne(data)
        return tx
    }

    update = async (data, query) => {
        const sanitized = objectHelper.compactNested(data)

        const tx = await this.collection.findOneAndUpdate(query, { $set: sanitized })
        return tx
    }

    delete = async (query) => {
        const result = await this.collection.deleteOne(query)
        return result
    }

    createMany = async (data) => {
        const tx = await this.collection.insertMany(data)
        return tx
    }

    updateMany = async (data, query) => {
        const tx = await this.collection.updateMany(query, update)
        return tx
    }

    deleteMany = async (query) => {
        const result = await this.collection.deleteMany(query)
        return result
    }
}

module.exports = UserModel
