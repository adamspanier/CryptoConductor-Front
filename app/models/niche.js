import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default class NicheModel extends Model {
  // Model representing a niche within a specialty
  @attr('string') name;
  @attr('string') description;
  @belongsTo('specialty', { async: true }) specialty;
}
