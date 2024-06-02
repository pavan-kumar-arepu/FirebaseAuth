// src/services/realm/UserRepository.js

import RealmDatabase from './RealmDatabase';
import User from '../../redux/reducers/User';

// UserRepository.js
import Realm from 'realm';

class UserRepository {
  static addUser(user) {
    Realm.open({schema: [LundryUser]})
      .then(realm => {
        realm.write(() => {
          // Write operations go here
          console.log('Came to write operation');
        });
      })
      .catch(error => {
        console.error('Error opening Realm:', error);
      });
  }

  static getUserById(uid) {
    try {
      return Realm.Object('LundryUser').filtered(`uid == '${uid}'`)[0];
    } catch (error) {
      console.error('Error fetching user from Realm:', error);
      return null;
    }
  }
}

export default UserRepository;
