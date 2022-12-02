import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ProjectAdapter extends JSONAPIAdapter {
  namespace = 'api';
}
