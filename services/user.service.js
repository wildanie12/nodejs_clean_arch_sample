const UserEntity = require("../entities/user.entity")
const UserModel = require("../models/user.model")

const userModel = new UserModel()

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

module.exports = { create }
