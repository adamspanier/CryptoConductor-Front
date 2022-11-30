import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  // Load auth
  @service authManager;
}
