var db = require("../dbconnection");
var Tasks = {
    getAllRecipes: function (callback) {
        return db.query("Select * from cooking", callback);
    },
    getRecipeById: function (id, callback) {
        return db.query("select * from cooking where Id=?", [id], callback);
    }
}
module.exports = Tasks;