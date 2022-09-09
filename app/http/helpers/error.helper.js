const express = require("express")

/**
 * Error Helper mapping for general application
 *
 * @param {Error} err
 * @param {express.Response} res
 * @returns {express.Response}
 */
const mapErrorResponse = (err, res) => {
    switch (err.name) {
        case "AppHTTPError":
            return res.status(err.code).json({
                status: "error",
                code: err.code,
                message: err.message,
            })
        case "BSONTypeError":
            return res.status(400).json({
                status: "error",
                code: 400,
                message: err.message,
            })
        case "MongoServerSelectionError":
            const code = 500
            return res.status(code).json({
                status: "error",
                code,
                message: err.message,
            })
        default:
            console.log(err)
            return res.json({
                status: "error",
                code: err.code,
                message: err.message,
            })
    }
}

module.exports = { mapErrorResponse }
