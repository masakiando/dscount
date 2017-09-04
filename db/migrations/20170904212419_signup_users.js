exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();

    table.string('name').notNullable().unique();
    table.string('username').notNullable().unique();
    table.string('password_digest').notNullable();
    table.integer('birthdayY').notNullable();
    table.integer('birthdayM').notNullable();
    table.integer('birthdayD').notNullable();
    table.string('gender').notNullable();
    table.integer('postalCode').notNullable();
    table.string('address').notNullable();
    table.string('email').notNullable().unique();
    table.integer('mobilePhoneNumber').notNullable().unique();
    table.boolean('receiveEmail').notNullable();
    table.boolean('receiveSNS').notNullable();

    table.boolean('suspended').notNullable().defaultTo(false);;
    table.timestamps();
    table.index([
      'name',
      'username',
      'email',
      'mobilePhoneNumber'
    ]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
