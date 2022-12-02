import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ProjectEntryAdapter extends JSONAPIAdapter {
  // Specify namespace for Queries
  namespace = 'api';
}
