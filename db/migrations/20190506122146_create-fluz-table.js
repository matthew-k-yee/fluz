
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments("user_id");
    table.integer('rank');
    table.string('username');
    table.string('password')
    table.string('relationship');
    table.integer('calorie_intake');
    table.integer('calorie_spend');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};