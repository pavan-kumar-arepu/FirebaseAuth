// src/services/realm/UserRepository.js

import RealmDatabase from './RealmDatabase';

// UserRepository.js
import Realm from 'realm';

class UserRepository {
  static addUser(user) {
    try {
      Realm.write(() => {
        Realm.create('User', user);
      });
    } catch (error) {
      console.error('Error adding user to Realm:', error);
    }
  }

  static getUserById(uid) {
    try {
      return Realm.objects('User').filtered(`uid == '${uid}'`)[0];
    } catch (error) {
      console.error('Error fetching user from Realm:', error);
      return null;
    }
  }
}

export default UserRepository;
