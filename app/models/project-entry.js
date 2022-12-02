import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default class ProjectEntryModel extends Model {
  @belongsTo('user', { async: true }) user;
  @belongsTo('niche', { async: true }) niche;
  @belongsTo('project', { async: true }) project;
  @attr('number') current_score;
  @attr('string') text_notes;
  @attr('date') entry_date;
  @attr('string') entry_time;
  @attr('date') last_modified_date;
  @attr('string') last_modified_time;
}
