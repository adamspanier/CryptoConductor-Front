import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class UserAdapter extends JSONAPIAdapter {
  // Specify namespace for Queries
  namespace = 'api';

  // Define query record method for querying users
  queryRecord(store, type, query) {
    return fetch('/api/users');
  }
}
