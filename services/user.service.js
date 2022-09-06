const { ObjectId } = require("mongodb")
const UserEntity = require("../entities/user.entity")
const UserModel = require("../models/user.model")

const userModel = new UserModel()

/**
 * Find all user
 *
 * @returns {UserEntity}
 */
const list = async () => {
    const users = await userModel.findAll()
    const entities = []

    // Mapping to list of entities
    await users.forEach((item) => {
        item.id = item._id
        entities.push(new UserEntity(item))
    })
    return entities
}

/**
 * Get single user
 *
 * @param {string} userID
 * @returns
 */
const show = async (userID) => {
    const userObjectID = ObjectId.createFromHexString(userID)
    const user = await userModel.find({ _id: userObjectID })

    const userEntity = new UserEntity(user)
    return user
}

/**
 * Create user resource
 *
 * @param {UserEntity} userEntity
 */
const create = async (userEntity) => {
    const user = await userModel.create(userEntity)
    console.log("Success creating user, inserted id: " + user.insertedId)

    return {
        insertedId: user.insertedId,
    }
}

module.exports = { create, list, show }
