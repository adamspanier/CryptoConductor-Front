import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ScoringDashboardRoute extends Route {
  @service router;
  @service authManager;

  // Redirect to login if unauthenticated
  beforeModel() {
    console.log(this.authManager.isLoggedIn);
    if(!this.authManager.isLoggedIn) {
      this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
    }
  }
}
