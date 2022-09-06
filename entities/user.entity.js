class User {
    constructor(object = false) {
        if (object) {
            const { name, username, email, address, skill, id } = object
            this.id = id
            this.name = name
            this.username = username
            this.email = email
            this.address = address
            this.skill = skill
        }
    }

    // name
    setName = (name) => {
        this.name = name
        return this
    }
    getName = () => {
        return this.name
    }

    // username
    setUsername = (username) => {
        this.username = username
        return this
    }
    getUsername = () => {
        return this.username
    }

    // email
    setEmail = (email) => {
        this.email = email
        return this
    }
    getEmail = () => {
        return this.email
    }

    // address
    setAddress = (address) => {
        this.address = address
        return this
    }
    getAddress = () => {
        return this.address
    }

    // Skill
    setSkill = (skill) => {
        this.skill = skill
        return this
    }
    getSkill = () => {
        return this.skill
    }
}

module.exports = User
