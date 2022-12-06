import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProjectDataService extends Service {
  @tracked id;
  @tracked name;
  @tracked description;
}
