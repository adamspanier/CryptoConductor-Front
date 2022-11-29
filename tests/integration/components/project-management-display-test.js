import { module, test } from 'qunit';
import { setupRenderingTest } from 'crypto-conductor-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | project-management-display',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ProjectManagementDisplay />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <ProjectManagementDisplay>
        template block text
      </ProjectManagementDisplay>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
