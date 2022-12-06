import { module, test } from 'qunit';
import { setupTest } from 'crypto-conductor-front/tests/helpers';

module('Unit | Service | project-data', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:project-data');
    assert.ok(service);
  });
});
