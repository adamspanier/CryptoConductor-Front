import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectManagementRoute extends Route {
  @service store;
  
  model() {
    let projects = this.store.findAll('project');
    return projects;
  }
}
