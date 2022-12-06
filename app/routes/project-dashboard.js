import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectDashboardRoute extends Route {
  @service store;

  // Collects project per user
  model() {
    let projects = this.store.findAll('project');
    return projects;
  }
}
