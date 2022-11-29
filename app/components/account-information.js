import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';

export default class AccountInformationComponent extends Component {
  @tracked userFirst = 'Adam';
  @tracked userLast = 'Spanier';
  @tracked userMi = 'M';
  @tracked username = 'Syntax';
  @tracked userBalance = '$0.00';
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

  @tracked testRoles = [
    { name: 'Associate' },
    { name: 'Client' },
    { name: 'Knight' },
    { name: 'Leader' },
  ];

  @tracked testProjects = [
    { name: 'CryptoThing' },
    { name: 'BitStream' },
    { name: 'NebulousThing' },
  ];

  @tracked testActive = [
    { status: 'Active' },
    { status: 'Inactive' },
    { status: 'Sabbatical' },
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
  updateRecord() {
    var record = {
      first: this.userFirst,
      mi: this.userMi,
      last: this.userLast,
      username: this.username,
      balance: this.balance,
      specialty: spec.value,
      niche: nich.value,
      role: rol.value,
      projects: this.testProjects,
      active: act.value,
    };

    console.log(record);
  }
}
