/**
 * Create database
 */

module.exports = {
  async up(db, client) {
    await db.createCollection("Test", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: [ "name", "year" ],
          properties: {
            name: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            year: {
              bsonType: "int",
              minimum: 2017,
              maximum: 3017,
              description: "must be an integer in [ 2017, 3017 ] and is required"
            }
          }
        }
      }
    });
    await db.collection("Test").createIndex({name: 1}, {name: "nameIdx"})
  },

  async down(db, client) {
    await db.dropCollection('Test');
  }
};
