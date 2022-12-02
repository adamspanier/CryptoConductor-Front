import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') username;
  @attr('string') first_name;
  @attr('string') last_name;
  @attr('string') email;
  @attr('boolean') is_active;
  @attr('date') last_login;
  @attr('date') date_joined;
}
