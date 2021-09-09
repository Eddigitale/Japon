var db = require("../dbconnection");
var Tasks = {
    getAllMyths: function (callback) {
        return db.query("Select * from myths", callback);
    },
    getMythById: function (id, callback) {
        return db.query("select * from myths where Id=?", [id], callback);
    }
}
module.exports = Tasks;