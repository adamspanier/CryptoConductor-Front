import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';

export default class ContactWindowComponent extends Component {
  @tracked name = 'Enter your name';
  @tracked email = 'Enter a valid email';
  @tracked message = 'Enter a brief message';
  @tracked send = 'Send';

  @action
  validateNames() {
    m.value = m.value.replace(/[&*<>/';{}]/g, '');
    n.value = n.value.replace(/[&*<>/';{}]/g, '');
    e.value = e.value.replace(/[&*<>/';{}]/g, '');
  }

  @action
  validateInput() {
    console.log(e.value);
  }

  @action
  sendEmail() {
    var data = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    console.log(data);
  }
}
