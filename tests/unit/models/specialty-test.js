import { module, test } from 'qunit';
import { setupTest } from 'crypto-conductor-front/tests/helpers';

module('Unit | Model | specialty', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('specialty', {});
    assert.ok(model);
  });
});
