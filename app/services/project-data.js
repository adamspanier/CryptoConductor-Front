import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProjectDataService extends Service {
  // Will be used to track current project data across dashboards
  @tracked id;
  @tracked name;
  @tracked description;
}
