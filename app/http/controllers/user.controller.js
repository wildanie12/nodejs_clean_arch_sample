const express = require("express")

const UserEntity = require("../../../entities/user.entity")
const userService = require("../../../services/user.service")

const index = async (req, res) => {}

const show = async (req, res) => {}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
const store = async (req, res) => {
    try {
        const { name, username, email, address_province, address_city, address_district, address_subdistrict } = req.body
        const userInput = new UserEntity({
            name,
            username,
            email,
            address: {
                province: address_province,
                city: address_city,
                district: address_district,
                subdistrict: address_subdistrict,
            },
            skill: [],
        })
        const tx = await userService.create(userInput)
        return res.json({
            status: "ok",
            code: 200,
            message: "success creating a user",
            data: {
                ...userInput,
            },
        })
    } catch (err) {
        console.log("error: ", err.stack)
        return res.status(500).json({
            status: "error",
            code: 500,
            message: `error: ${err.message}`,
        })
    }
}

const update = async (req, res) => {}

const destroy = async (req, res) => {}

module.exports = { index, show, store, update, destroy }
