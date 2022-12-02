import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ProjectAdapter extends JSONAPIAdapter {
  // Specify namespace for Queries
  namespace = 'api';
}
