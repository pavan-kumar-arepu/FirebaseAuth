// src/services/realm/SlotRepository.js

import RealmDatabase from './RealmDatabase';

class SlotRepository {
  static fetchAllSlots() {
    return RealmDatabase.fetchAllSlots();
  }
}

export default SlotRepository;
