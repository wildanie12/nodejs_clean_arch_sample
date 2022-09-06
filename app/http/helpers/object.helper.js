/**
 * Remove any undefined field using recursive approach.
 * Useful for any update payload data.
 *
 * @param {Object} obj input object
 * @returns {Object} sanitized object from undefined field
 */
const compactNested = (obj = {}) => {
    if (typeof obj !== "object") return

    Object.keys(obj).forEach((key) => {
        if (obj[key] === undefined) {
            delete obj[key]
        }

        if (typeof obj[key] === "object") {
            compactNested(obj[key])
        }
    })

    return obj
}

module.exports = { compactNested }
