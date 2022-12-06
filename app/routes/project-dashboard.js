import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectDashboardRoute extends Route {
  @service store;

  // Should fetch all records from the target api/projects
  // Should return a JSON
  model() {
    let projects = this.store.findAll('project');
    return projects;
  }
}
