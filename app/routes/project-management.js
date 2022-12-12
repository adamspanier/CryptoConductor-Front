import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectManagementRoute extends Route {
  @service store;
  @service router;
  @service authManager;

  beforeModel() {
    console.log(this.authManager.isLoggedIn);
    if(!this.authManager.isLoggedIn) {
      this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
    }
  }

  // Collects projects per user
  model() {
    let projects = this.store.findAll('project');
    return projects;
  }
}
