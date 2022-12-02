import { module, test } from 'qunit';
import { setupTest } from 'crypto-conductor-front/tests/helpers';

module('Unit | Adapter | niche', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:niche');
    assert.ok(adapter);
  });
});
