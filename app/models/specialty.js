import Model, { attr } from '@ember-data/model';

export default class SpecialtyModel extends Model {
  @attr('string') name;
  @attr('string') description;
}
