import { module, test } from 'qunit';
import { setupRenderingTest } from 'crypto-conductor-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | login-ui', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LoginUi />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <LoginUi>
        template block text
      </LoginUi>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
