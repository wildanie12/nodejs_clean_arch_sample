const mongo = require("../database/mongo")

const UserEntity = require("../entities/user.entity")

const objectHelper = require("../app/http/helpers/object.helper")
class UserModel {
    constructor() {
        this.collection = mongo.db.collection("user")
    }

    /**
     * Find All user
     *
     * @param {Object} query query filter object to select
     * @returns
     */
    findAll = async (query = {}) => {
        const tx = this.collection.find(query)
        return tx
    }

    /**
     * Find user
     *
     * @param {Object} query query filter object to select
     * @returns
     */
    find = async (query) => {
        const data = await this.collection.findOne(query)
        return data
    }

    /**
     * Create user
     *
     * @param {UserEntity} data
     * @returns
     */
    create = async (data) => {
        const tx = await this.collection.insertOne(data)
        return tx
    }

    /**
     * Update user
     *
     * @param {UserEntity} data
     * @param {Object} query
     * @returns
     */
    update = async (data, query) => {
        const sanitized = objectHelper.compactNested(data)

        const tx = await this.collection.findOneAndUpdate(query, { $set: sanitized })
        return tx
    }

    /**
     * Delete user
     *
     * @param {Object} query
     * @returns
     */
    delete = async (query) => {
        const result = await this.collection.findOneAndDelete(query)
        return result
    }

    /**
     * Create multiple user resource
     *
     * @param {Array.<UserEntity>} data
     * @returns
     */
    createMany = async (data) => {
        const tx = await this.collection.insertMany(data)
        return tx
    }

    /**
     * Update multiple user resource
     *
     * @param {UserEntity} data
     * @param {Object} query
     * @returns
     */
    updateMany = async (data, query) => {
        const tx = await this.collection.updateMany(query, update)
        return tx
    }

    /**
     * Delete multiple user resource
     *
     * @param {Object} query
     * @returns
     */
    deleteMany = async (query) => {
        const result = await this.collection.deleteMany(query)
        return result
    }
}

module.exports = UserModel
