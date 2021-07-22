# ember-route-helpers

[![Build Status](https://travis-ci.org/BBVAEngineering/ember-route-helpers.svg?branch=master)](https://travis-ci.org/BBVAEngineering/ember-route-helpers)
[![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fember-route-helpers.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fember-route-helpers)
[![NPM version](https://badge.fury.io/js/ember-route-helpers.svg)](https://badge.fury.io/js/ember-route-helpers)
[![Dependency Status](https://david-dm.org/BBVAEngineering/ember-route-helpers.svg)](https://david-dm.org/BBVAEngineering/ember-route-helpers)
[![codecov](https://codecov.io/gh/BBVAEngineering/ember-route-helpers/branch/master/graph/badge.svg)](https://codecov.io/gh/BBVAEngineering/ember-route-helpers)
[![Greenkeeper badge](https://badges.greenkeeper.io/BBVAEngineering/ember-route-helpers.svg)](https://greenkeeper.io/)
[![Ember Observer Score](https://emberobserver.com/badges/ember-route-helpers.svg)](https://emberobserver.com/addons/ember-route-helpers)

## Information

[![NPM](https://nodei.co/npm/ember-route-helpers.png?downloads=true&downloadRank=true)](https://nodei.co/npm/ember-route-helpers/)

Transition into routes with helpers directly on template.

## Requirements

- Ember.js v3.20 or above
- Ember CLI v3.20 or above
- Node.js v10 or above

## Installation

```
ember install ember-route-helpers
```

## Usage

### `(transition-to 'destination' model (query-params foo='bar'))`

`(transition-to)` helper that receives the same argument signature as `link-to` but evaluates to an action that can be called to trigger transition.

```hbs
<button {{action (transition-to 'index')}}>Go to Index</button>
```

### `(replace-with 'destination' model (query-params foo='bar'))`

`(replace-with)` helper that transition into another route while replacing the current URL, if possible. This will replace the current history entry instead of adding a new one. Beside that, it is identical to transitionTo in all other respects.

```hbs
<button {{action (replace-with 'index')}}>Go to Index</button>
```

### `(transition-to-external 'destination' (query-params foo='bar'))`

`(transition-to-external)` helper that transition from an Engine to an external route.

```hbs
<button
  {{action (transition-to-external 'parent-index' (query-params foo='bar'))}}
>Go to Index</button>
```

### `(replace-with-external 'destination' (query-params foo='bar'))`

`(replace-with-external)` helper that transition (replacing) from an Engine to an external route.

```hbs
<button
  {{action (replace-with-external 'parent-index' (query-params foo='bar'))}}
>Go to Index</button>
```

## Contribute

If you want to contribute to this addon, please read the [CONTRIBUTING.md](CONTRIBUTING.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/BBVAEngineering/ember-route-helpers/tags).

## Authors

See the list of [contributors](https://github.com/BBVAEngineering/ember-route-helpers/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
