exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
      table.string('mobilePhoneNumber').notNullable().unique();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('mobilePhoneNumber');
    });
};
