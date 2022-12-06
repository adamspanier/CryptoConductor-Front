import { module, test } from 'qunit';
import { setupTest } from 'crypto-conductor-front/tests/helpers';

module('Unit | Adapter | profile', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:profile');
    assert.ok(adapter);
  });
});
