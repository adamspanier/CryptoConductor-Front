import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default class ProjectModel extends Model {
  // Model defining a project
  @attr('string') name;
  @hasMany('user', { async: true }, { inverse: null }) users;
  @hasMany('niche', { async: true }, { inverse: null }) niches;
  @hasMany('specialty', { async: true }, { inverse: null }) deniedUsers;
  @attr('string') description;
  @attr('string') status;
  @attr('boolean') public;
}
