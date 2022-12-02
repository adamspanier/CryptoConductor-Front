import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LinksMenuComponent extends Component {
  @service authManager;
  @tracked logout = 'Logout';

  @action
  test() {
    var logoutData = {
      username: this.authManager.username,
    };

    this.authManager.logout(logoutData);
  }
}
