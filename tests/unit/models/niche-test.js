import { module, test } from 'qunit';
import { setupTest } from 'crypto-conductor-front/tests/helpers';

module('Unit | Model | niche', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('niche', {});
    assert.ok(model);
  });
});
