// src/services/realm/UserRepository.js

import RealmDatabase from './RealmDatabase';
import User from '../../redux/reducers/User';
import {LundryUser, Booking, Slot} from './schemas';

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

  static async getAllUsers() {
    try {
      const realm = await Realm.open({schema: [LundryUser, Booking, Slot]});
      const users = realm.objects('LundryUser');
      return users;
    } catch (error) {
      console.error('Error fetching users from Realm:', error);
      return [];
    }
  }
}

// // Function to fetch all users from Realm
// export const fetchAllUsers = async () => {
//   try {
//     const realm = await Realm.open({schema: [LundryUser, Booking, Slot]});
//     const users = realm.objects('LundryUser');
//     console.log('users data retrived succesffully', users);
//     return users;
//   } catch (error) {
//     console.error('Error fetching users from Realm:', error);
//     return [];
//   }
// };

export default UserRepository;
