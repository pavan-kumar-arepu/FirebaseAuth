// src/services/realm/schemas.js

import {Realm} from '@realm/react';

class User extends Realm.Object {
  static schema = {
    name: 'User',
    primaryKey: 'uid',
    properties: {
      uid: 'string',
      displayName: 'string',
      email: 'string',
      activeBookings: {type: 'list', objectType: 'Booking'},
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
      user: 'User',
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

export {User, Booking, Slot};

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
