class HttpError extends Error {
    /**
     *
     * @param {string} message HTTP Error message
     * @param {number} attribute.code HTTP Error code
     * @param {string} attribute.filename HTTP Error code
     */
    constructor(message, attribute = { code: 500, filename: "" }) {
        super(message)
        this.name = "AppHTTPError"
        this.code = attribute.code
        this.filename = attribute.filename
    }
}

module.exports = HttpError
