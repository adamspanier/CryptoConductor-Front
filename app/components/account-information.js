import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { router } from '@ember/service';

export default class AccountInformationComponent extends Component {
  @service authManager;
  @service router;
  @tracked userFirst = 'Adam';
  @tracked userLast = 'Spanier';
  @tracked userMi = 'M';
  @tracked username = 'Syntax';
  @tracked userBalance = '$0.00';
  @tracked isLead = false;
  @tracked update = 'Update'; //Used if role == leader
  @tracked delete = 'Delete'; //Used if role == leader
  @tracked isntAdmin = true;

  // For testing purposes
  @tracked testSpecialties = [
    { name: 'Technology' },
    { name: 'Legal' },
    { name: 'Business' },
  ];

  // For testing purposes
  @tracked testNiches = [
    { name: 'Cybersecurity', parent: 'Technology' },
    { name: 'Risk', parent: 'Legal' },
    { name: 'Marketing', parent: 'Business' },
  ];

  // For testing purposes
  @tracked testRoles = [
    { name: 'Associate' },
    { name: 'Client' },
    { name: 'Knight' },
    { name: 'Leader' },
  ];

  // For testing purposes
  @tracked testProjects = [
    { name: 'CryptoThing' },
    { name: 'BitStream' },
    { name: 'NebulousThing' },
  ];

  // For testing purposes
  @tracked testActive = [
    { status: 'Active' },
    { status: 'Inactive' },
    { status: 'Sabbatical' },
  ];

  // Called on UI instantiation
  constructor(owner, args) {
    super(owner, args);

    // If usergroup is leader, mark lead is true
    if (this.authManager.usergroup == 'Leader') {
      this.isLead = true;
    }

    if (this.authManager.usergroup == 'Leader') {
      this.isntAdmin = false;
    }

    console.log(this.isntAdmin);
  }

  // Basic print function
  @action
  print() {
    console.log(this.userLast);
  }

  // JS Validation, Sanitization, Escaping
  @action
  validateNames() {
    uf.value = uf.value.replace(/[&*<>/';{}]/g, '');
    ul.value = ul.value.replace(/[&*<>/';{}]/g, '');
    um.value = um.value.replace(/[&*<>/';{}]/g, '');
    un.value = un.value.replace(/[&*<>/';{}]/g, '');
    ub.value = ub.value.replace(/[&*<>/';{}]/g, '');
  }

  // Creates record for updating
  @action
  updateRecord() {
    var record = {
      first: uf.value,
      mi: um.value,
      last: ul.value,
      username: un.value,
      balance: ub.value,
      specialty: spec.value,
      niche: nich.value,
      role: rol.value,
      projects: this.testProjects,
      active: act.value,
    };

    console.log(record);
  }

  // Handler for unauthenticated page requests
  @action
  redirectToLogin() {
    this.router.transitionTo('login');
  }
}
