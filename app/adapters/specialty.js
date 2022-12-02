import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class SpecialtyAdapter extends JSONAPIAdapter {
  // Specify namespace for Queries
  namespace = 'api';
}
