// src/services/realm/BookingRepository.js

import RealmDatabase from './RealmDatabase';

class BookingRepository {
  static addBooking(bookingData) {
    RealmDatabase.addBooking(bookingData);
  }

  static fetchAllBookings() {
    return RealmDatabase.fetchAllBookings();
  }
}

export default BookingRepository;
