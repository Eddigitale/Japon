var db = require("../dbconnection");
var Tasks = {
    getAllEvents: function (callback) {
        return db.query("Select * from history", callback);
    },
    getEventById: function (id, callback) {
        return db.query("select * from history where Id=?", [id], callback);
    }
}
module.exports = Tasks;