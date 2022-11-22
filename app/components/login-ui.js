import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LoginUiComponent extends Component {
  @tracked UserName = "username here";
  @tracked PassWord = "password here";
  @tracked remember = 0;

  get disableSubmit() {
  //if either value is empty we don't want to allow submitting the form
    return !this.UserName.length || !this.PassWord.length;
  }

  onSubmit() {
    data ={
      username: this.UserName,
      password: this.PassWord
    }

    this.username = "SUCCESS"
  }
}
