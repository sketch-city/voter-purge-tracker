var knex  = require('../db');

var Precincts = {

  /**
   * Fetch the list of Harris County precincts to avoid empty results
   *
   * @returns {Array} precincts - The list of precincts
   */
  getPrecinctList: function(cb) {
    knex('precincts').select()
    .then(function(precinctList) {
      cb(precinctList);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

};

module.exports = Precincts;
