// src/services/realm/UserRepository.js

import RealmDatabase from './RealmDatabase';

class UserRepository {
  static addUser(user) {
    RealmDatabase.addUser(user);
  }

  static addBooking(bookingData) {
    RealmDatabase.addBooking(bookingData);
  }

  static fetchAllBookings() {
    return RealmDatabase.fetchAllBookings();
  }

  static fetchAllSlots() {
    return RealmDatabase.fetchAllSlots();
  }
}

export default UserRepository;
