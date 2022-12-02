import Model, { attr } from '@ember-data/model';

export default class SpecialtyModel extends Model {
  // Model defining a specialty
  @attr('string') name;
  @attr('string') description;
}
