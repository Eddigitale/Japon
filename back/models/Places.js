var db = require("../dbconnection");
var Tasks = {
  getAllPlaces: function (callback) {
    return db.query("Select * from places", callback);
  },
  getPlaceById: function (id, callback) {
    return db.query("select * from places where Id=?", [id], callback);
  }
}
module.exports = Tasks;