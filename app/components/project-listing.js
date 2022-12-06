import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { router } from '@ember/service';

export default class ProjectListingComponent extends Component {
  @service authManager;
  @service router;
  @service store;
  @service projectData;
  @tracked username = 'Syntax';
  @tracked specialty = 'Cybersecurity';
  @tracked role = 'Knight';
  @tracked isLead = false;
  @tracked projects = null;

  // Called on UI instantiation
  constructor(owner, args) {
    super(owner, args);

    // If usergroup is leader, mark lead is true
    if (this.authManager.usergroup == 'Leader') {
      this.isLead = true;
    }
  }

  // For testing only
  @tracked testProjects = [
    { id: 1, name: 'CryptoThing' },
    { id: 2, name: 'BitStream' },
    { id: 3, name: 'NebulousThing' },
  ];

  // Handler for anonymous requests
  @action
  redirectToLogin() {
    this.router.transitionTo('login');
  }

  // Get project list for current users
  // @action
  // getProjects() {
  //   console.log('In Project');
  //
  //   //get current user ID
  //   var this_username = this.authManager.username;
  //   console.log('username: ' + this_username);
  //
  //   // Get user Id
  //   this.store.query('project', {
  //     filter: {
  //       search: this_username,
  //     }
  //   }).then(function(cu) {
  //       console.log(cu)
  //   });
  //
  //   // KINDA WORKS
  //   // this.store.queryRecord('user', {}).then(function (user) {
  //   //   //let username = user.get('id');
  //   //   console.log('User ID:');
  //   // });
  //
  //   //WORKS
  //   // User current username to query for ID
  //   //let cur_user = this.store.findRecord('user', 4)
  //   //  .then(function(user) {
  //   //    console.log(user.type)
  //   //  });
  // }
}
