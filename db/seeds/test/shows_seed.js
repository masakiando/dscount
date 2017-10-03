exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        name: 'YamadaTaro',
        username: 'YamadaTaro',
        password_digest: 'password1',
        birthdayY: 1980,
        birthdayM: 1,
        birthdayD: 1,
        gender: 'male',
        postalCode: 1111111,
        address: '台南安平区1-1-1',
        email: 'anpin@gmail.com',
        mobilePhoneNumber: 09012345678,
        receiveEmail: true,
        receiveSNS: true
      });
    }).then(function () {
      return knex('users').insert({
        name: 'YamadaHanako',
        username: 'YamadaHanako',
        password_digest: 'password2',
        birthdayY: 1980,
        birthdayM: 2,
        birthdayD: 2,
        gender: 'female',
        postalCode: 2222222,
        address: '台南安平区2-2-2',
        email: 'anpin2@gmail.com',
        mobilePhoneNumber: 08012345678,
        receiveEmail: true,
        receiveSNS: true
      });
    })
};
