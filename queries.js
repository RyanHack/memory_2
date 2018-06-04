const database = require("./database-connection");

module.exports = {

    read(id) {
        return database('coffee')
            .where("id", id)
            .first()
    },
    list() {
        return database('coffee')
    },
    create(coffee) {
        return database('coffee')
            .insert(coffee)
            .returning('*')
            .then(object => object[0])
    },
    update(id, coffee) {
        return database('coffee')
            .where("id", id)
            .update(coffee)
    },
    delete(id) {
        return database('coffee')
            .delete()
            .where("id", id)
    }
};
