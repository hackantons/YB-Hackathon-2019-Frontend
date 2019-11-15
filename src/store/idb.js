// @flow

import { openDB, deleteDB, wrap, unwrap } from 'idb';

const idbStore = 'store';

const idbPromise = openDB('yb-matchcenter', 1, {
  upgrade(db) {
    db.createObjectStore(idbStore);
  },
});

export const idb = {
  async get(key) {
    return (await idbPromise).get(idbStore, key);
  },
  async set(key, val) {
    return (await idbPromise).put(idbStore, val, key);
  },
};

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
