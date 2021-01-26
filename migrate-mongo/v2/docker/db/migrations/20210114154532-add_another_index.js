/**
 * Add another index
 */

module.exports = {
  async up(db, client) {
    db.collection("Test").createIndex({year: 1}, {name: "yearIdx"});
  },

  async down(db, client) {
    db.collection("Test").dropIndex("yearIdx");
  }
};
