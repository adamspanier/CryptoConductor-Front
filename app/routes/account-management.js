import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class AccountManagementRoute extends Route {
  @service store;
  @service authManager;

  // Collects user and profile data for each user
  model() {
    return RSVP.hash({
      user: this.store.findAll('user'),
      profile: this.store.findAll('profile'),
    });
  }
}
