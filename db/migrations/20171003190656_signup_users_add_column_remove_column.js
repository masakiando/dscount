exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
        table.dropColumn('mobilePhoneNumber');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
      table.integer('mobilePhoneNumber').notNullable().unique();
    });
};
