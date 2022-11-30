import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { router } from '@ember/service';

export default class ProjectManagementDisplayComponent extends Component {
  @service authManager;
  @service router;
  @tracked projectTitle = 'CryptoThing';
  @tracked description = 'Add description';
  @tracked update = 'Update'; //Used if role == leader
  @tracked delete = 'Delete'; //Used if role == leader

  @tracked testSpecialties = [
    { name: 'Technology' },
    { name: 'Legal' },
    { name: 'Business' },
  ];

  @tracked testNiches = [
    { name: 'Cybersecurity', parent: 'Technology' },
    { name: 'Risk', parent: 'Legal' },
    { name: 'Marketing', parent: 'Business' },
  ];

  @tracked testClientList = [
    { name: 'Bob' },
    { name: 'Bill' },
    { name: 'Jim' },
    { name: 'Phil' },
    { name: 'Sharon' },
    { name: 'Jill' },
  ];

  @tracked testDenialList = [
    { name: 'BadGuy1' },
    { name: 'BadGuy2' },
    { name: 'BadGuy3' },
    { name: 'BadGuy4' },
    { name: 'BadGuy5' },
    { name: 'BadGuy6' },
  ];

  @tracked public = [{ status: 'Public' }, { status: 'Private' }];

  @tracked status = [
    { status: 'Open' },
    { status: 'In progress' },
    { status: 'Closed' },
    { status: 'Final review' },
  ];

  @action
  print() {
    console.log(this.userLast);
  }

  @action
  validateNames() {
    uf.value = uf.value.replace(/[&*<>/';{}]/g, '');
    ul.value = ul.value.replace(/[&*<>/';{}]/g, '');
    um.value = um.value.replace(/[&*<>/';{}]/g, '');
    un.value = un.value.replace(/[&*<>/';{}]/g, '');
    ub.value = ub.value.replace(/[&*<>/';{}]/g, '');
  }

  @action
  sendData() {
    var projectData = {
      title: this.projectTitle,
      description: this.description,
      specialties: this.testSpecialties,
      niches: this.testNiches,
      clients: this.testClientList,
      denials: this.testDenialList,
      availability: ava.value,
      status: sta.value,
    };

    console.log(projectData);
  }

  @action
  redirectToLogin() {
    this.router.transitionTo('login');
  }
}
