import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default class ProfileModel extends Model {
  @belongsTo('user', { async: true, inverse: null }) users;
  @attr('string') mi;
  @attr('number') balance;
  @hasMany('specialty', { async: true, inverse: null }) deniedUsers;
  @hasMany('niche', { async: true, inverse: null }) niches;
}
