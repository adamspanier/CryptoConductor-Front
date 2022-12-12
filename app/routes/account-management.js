import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class AccountManagementRoute extends Route {
  @service store;
  @service authManager;
  @service router;

  beforeModel() {
    console.log(this.authManager.isLoggedIn);
    if(!this.authManager.isLoggedIn) {
      this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
    }
  }

  // Collects user and profile data for each user
  model() {
    return RSVP.hash({
      user: this.store.findAll('user'),
      profile: this.store.findAll('profile'),
    });
  }
}
