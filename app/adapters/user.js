import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class UserAdapter extends JSONAPIAdapter {
  namespace = 'api';

  queryRecord(store, type, query) {
    return fetch('/api/users');
  }
}
