import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { router } from '@ember/service';

export default class ProjectListingComponent extends Component {
  @service authManager;
  @service router;
  @tracked username = 'Syntax';
  @tracked specialty = 'Cybersecurity';
  @tracked role = 'Knight';
  @tracked isLead = false;

  constructor(owner, args) {
    super(owner, args);
    if(this.authManager.usergroup == 'Leader'){
      this.isLead = true;
    }
  }

  @tracked testProjects = [
    { id: 1, name: 'CryptoThing' },
    { id: 2, name: 'BitStream' },
    { id: 3, name: 'NebulousThing' },
  ];

  @action
  redirectToLogin() {
    this.router.transitionTo('login');
  }
}
