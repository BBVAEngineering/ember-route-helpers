import Ember from 'ember';

const { isBlank, typeOf } = Ember;

/**
 * Prefix a property (usually a routeName) with the mount point, if is an engine.
 *
 * @param  {String} mountPoint
 * @param  {String} propValue
 * @return {String}
 */
export function prefixMountPoint(mountPoint, propValue) {
  if (typeOf(propValue) !== 'string') {
    Ember.assert('propValue argument must be an string', typeOf(propValue) !== 'string');
  }

  if (typeOf(mountPoint) !== 'string' || isBlank(mountPoint)) {
    return propValue;
  }

  if (propValue === 'application') {
    return mountPoint;
  }

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
