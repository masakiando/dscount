import User from '../models/userModel';
// *** queries *** //
export function getSingle(userID) {
  return User.where('id', parseInt(userID))
  .first();
}

export function post(user) {
  console.log(user);
  // return User.insert(user, 'id');
}
