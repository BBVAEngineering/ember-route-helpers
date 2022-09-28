import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import {
  getMountPoint,
  prefixMountPoint,
} from 'ember-route-helpers/utils/mount-point';

module('Unit | Util | mount-point', (hooks) => {
  setupTest(hooks);

  test('getMountPoint: it returns value of mountPoint when is a string', function (assert) {
    const owner = { mountPoint: 'foo' };
    const mountPoint = getMountPoint(owner);

    assert.ok(owner.mountPoint, mountPoint);
  });

  test('prefixMountPoint: it returns value of mountPoint when propValue is an application', function (assert) {
    const owner = { mountPoint: 'foo' };
    const mountPoint = prefixMountPoint(owner.mountPoint, 'application');

    assert.ok(owner.mountPoint, mountPoint);
  });

  test('prefixMountPoint: it returns value of mountPoint whit propValue', function (assert) {
    const owner = { mountPoint: 'foo' };
    const mountPoint = prefixMountPoint(owner.mountPoint, 'engine');

    assert.ok('foo.engine', mountPoint);
  });
});
