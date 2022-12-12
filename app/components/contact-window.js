import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';

export default class ContactWindowComponent extends Component {
  @tracked name = '';
  @tracked email = '';
  @tracked message = '';
  @tracked send = 'Send';
  @tracked good = false;

  // JS Validation, Sanitization for name
  @action
  validateName() {
    n.value = n.value.replace(/[!@#$%^(<>?)&*<>/';{}1234567890]/g, '');
  }

  // JS Validation, Sanitization for message
  @action
  validateMessage() {
    m.value = m.value.replace(/[@#%^&*<>/';{}]/g, '');
  }

  // JS Validation, Sanitization for email input
  @action
  validateEmail() {
    e.value = e.value.replace(/[&*<>/';{}]/g, '');
    const atArray = e.value.split("@");
    var atLength = atArray.length; //Must be 2
    if(atLength == 2) {
      const comArray = atArray[1].split(".");
      var comLength = comArray.length;
      if(comLength == 2) {
        var domainLength = comArray[1].length;
        if(domainLength > 1 && domainLength < 4) {
          console.log(domainLength);
          this.good = true;
        } else {
          this.good = false;
        }
      } else {
        this.good = false;
      }
    } else {
      this.good = false;
    }
    console.log(this.good);
  }

  get disableSubmit() {
    //if either value is empty we don't want to allow submitting the form
    return !this.name.length || !this.email.length || !this.message.length || this.good == false;
  }

  // Creates record for sending an email
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
