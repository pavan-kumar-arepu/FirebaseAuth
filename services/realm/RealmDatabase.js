// src/services/realm/RealmDatabase.js

import Realm from 'realm';
import {User, Booking, Slot} from './schemas';
// src/services/realm/RealmDatabase.js

const realm = new Realm({schema: [User, Booking, Slot]});

class RealmDatabase {
  static addUser(user) {
    realm.write(() => {
      realm.create('User', user, Realm.UpdateMode.Modified);
    });
  }

  static addBooking(bookingData) {
    realm.write(() => {
      const {user, slot, ...booking} = bookingData;
      const realmUser = realm.objectForPrimaryKey('User', user.uid);
      const realmSlot = realm.objectForPrimaryKey('Slot', slot.uid);

      const bookingToCreate = {
        ...booking,
        uid: booking.uid,
        user: realmUser, // Set user reference
        slot: realmSlot, // Set slot reference
      };

      const realmBooking = realm.create(
        'Booking',
        bookingToCreate,
        Realm.UpdateMode.Modified,
      );
      realmUser.activeBookings.push(realmBooking);
    });
  }

  static fetchAllBookings() {
    return realm.objects('Booking');
  }

  static fetchAllSlots() {
    return realm.objects('Slot');
  }
}

export default RealmDatabase;
