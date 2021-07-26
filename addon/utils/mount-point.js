import { deprecate } from '@ember/application/deprecations';
import { isBlank, typeOf } from '@ember/utils';
import { assert } from '@ember/debug';

/**
 * Prefix a property (usually a routeName) with the mount point, if is an engine.
 *
 * @param  {String} mountPoint
 * @param  {String} propValue
 * @return {String}
 */
export function prefixMountPoint(mountPoint, propValue) {
  if (typeOf(propValue) !== 'string') {
    assert(
      'propValue argument must be an string',
      typeOf(propValue) !== 'string'
    );
  }

  if (typeOf(mountPoint) !== 'string' || isBlank(mountPoint)) {
    return propValue;
  }

  if (propValue === 'application') {
    deprecate(
      `Use "${mountPoint}" instead of "${propValue}" as the routeName of this helper.`,
      false,
      {
        id: 'ember-route-helpers',
        until: '2.2.0',
      }
    );

    return mountPoint;
  }

  deprecate(
    `Use "${mountPoint}.${propValue}" instead of "${propValue}" as the routeName of this helper.`,
    false,
    {
      id: 'ember-route-helpers',
      until: '2.2.0',
    }
  );

  return `${mountPoint}.${propValue}`;
}

/**
 * Check if an element is into an engine and returns its mountPoint.
 *
 * @method getMountPoint
 * @param {Object} owner
 * @return {string|Boolean}. Mount point if is engine; false otherwise.
 */
export function getMountPoint(owner) {
  if (owner && typeof owner.mountPoint === 'string') {
    return owner.mountPoint;
  }

  return false;
}
