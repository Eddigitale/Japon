var db = require("../dbconnection");
var Tasks = {
    getAllFestivals: function (callback) {
        return db.query("Select * from festivals", callback);
    },
    getFestivalById: function (id, callback) {
        return db.query("select * from festivals where Id=?", [id], callback);
    }
}
module.exports = Tasks;