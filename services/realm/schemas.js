// src/services/realm/schemas.js

import {Realm} from '@realm/react';

class LundryUser extends Realm.Object {
  static schema = {
    name: 'LundryUser',
    primaryKey: 'uid',
    properties: {
      uid: 'string',
      displayName: 'string',
      email: 'string',
      activeBookings: {type: 'list', objectType: 'Booking'}, // Reference the Booking schema
    },
  };
}

class Booking extends Realm.Object {
  static schema = {
    name: 'Booking',
    primaryKey: 'uid',
    properties: {
      uid: 'string',
      bookingDate: 'date',
      slot: 'Slot',
      status: 'string',
      user: 'LundryUser',
    },
  };
}

class Slot extends Realm.Object {
  static schema = {
    name: 'Slot',
    primaryKey: 'uid',
    properties: {
      uid: 'string',
      date: 'date',
      endTime: 'date',
      isAvailable: 'bool',
      startTime: 'date',
    },
  };
}

export {LundryUser, Booking, Slot};

/*
src/
  ├── api/
  │   └── firebase.js
  ├── components/
  ├── navigation/
  ├── redux/
  │   ├── actions/
  │   ├── reducers/
  │   └── store.js
  ├── screens/
  ├── services/
  │   ├── realm/
  │   │   ├── schemas.js
  │   │   ├── RealmDatabase.js
  │   │   └── UserRepository.js
  │   └── api/
  │       └── firebase.js
  └── App.js
  */
