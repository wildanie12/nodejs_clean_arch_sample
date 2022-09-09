const { ObjectId } = require("mongodb")
const HttpError = require("../entities/common/http.error")
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

/**
 * Update user resource by ID
 *
 * @param {UserEntity} userEntity user entity payload to update
 * @param {string} id id user to update
 * @returns {Object} object
 */
const update = async (userEntity, id) => {
    const update = await userModel.update(userEntity, { _id: ObjectId.createFromHexString(id) })
    if (!update.ok) throw new HttpError("Cannot update user data", { code: 500, filename: "user.service.js" })

    return { id: update.value._id }
}

const destroy = async (id) => {
    const data = await userModel.delete({ _id: ObjectId.createFromHexString(id) })
    if (!data.value) {
        throw new HttpError("cannot find user with id: " + id, { code: 400, filename: "user.service.js" })
    }

    return { id: data.value._id }
}

module.exports = { create, list, show, update, destroy }
