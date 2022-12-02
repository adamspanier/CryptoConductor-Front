import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr('string') name;
  @hasMany('user') users;
  @hasMany('niche') niches;
  @hasMany('specialty') deniedUsers;
  @attr('string') description;
  @attr('string') status;
  @attr('boolean') public;
}
