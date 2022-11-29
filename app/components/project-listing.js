import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';

export default class ProjectListingComponent extends Component {
  username = 'Syntax';
  specialty = 'Cybersecurity';
  role = 'Knight';

  @tracked testProjects = [
    { id: 1, name: 'CryptoThing' },
    { id: 2, name: 'BitStream' },
    { id: 3, name: 'NebulousThing' },
  ];
}
