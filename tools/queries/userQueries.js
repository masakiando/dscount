import User from '../models/userModel';

// *** queries *** //
export function getSingle(showID) {
  return User.where('id', parseInt(showID))
  .first();
}

export function post(show) {
  return User.insert(show, 'id');
}
