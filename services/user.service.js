const UserEntity = require("../entities/user.entity")
const UserModel = require("../models/user.model")

const userModel = new UserModel()

const list = async () => {
    const users = await userModel.findAll()
    const entities = []

    // Mapping to list of entities
    await users.forEach((item) => {
        entities.push(new UserEntity(item))
    })
    return entities
}

/**
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

module.exports = { create, list }
