import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default class NicheModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @belongsTo('specialty', { async: true }) specialty;
}
