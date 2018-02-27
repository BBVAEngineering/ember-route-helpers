# ember-route-helpers

[![Build Status](https://travis-ci.org/BBVAEngineering/ember-route-helpers.svg?branch=master)](https://travis-ci.org/BBVAEngineering/ember-route-helpers)
[![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fember-route-helpers.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fember-route-helpers)
[![npm version](https://badge.fury.io/js/ember-route-helpers.svg)](https://badge.fury.io/js/ember-route-helpers)
[![Dependency Status](https://david-dm.org/BBVAEngineering/ember-route-helpers.svg)](https://david-dm.org/BBVAEngineering/ember-route-helpers)

Transition into routes with helpers directly on template.

## Information

[![NPM](https://nodei.co/npm/ember-route-helpers.png?downloads=true&downloadRank=true)](https://nodei.co/npm/ember-route-helpers/)

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
<button {{action (transition-to-external 'parent-index' (query-params foo='bar'))}}>Go to Index</button>
```

### `(replace-with-external 'destination' (query-params foo='bar'))`

`(replace-with-external)` helper that transition (replacing) from an Engine to an external route.

```hbs
<button {{action (replace-with-external 'parent-index' (query-params foo='bar'))}}>Go to Index</button>
```

## Contribute

If you want to contribute to this addon, please read the [CONTRIBUTING.md](CONTRIBUTING.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/BBVAEngineering/ember-route-helpers/tags).

## Authors

See the list of [contributors](https://github.com/BBVAEngineering/ember-route-helpers/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
