# zep.js

Utility library for functional programming in JavaScript


# Documentation

**[http://zep.moogs.io](http://zep.moogs.io)**

# Install

Available via [Bower](http://bower.io/)

```bash
bower install zep
```

Available via [npm](https://www.npmjs.org/)

```bash
npm install zep
```


# Extend _

To extend the `_` when using libraries such as [underscore](http://underscorejs.org/) or [lodash](http://lodash.com/), pass in `zep._()` to the underscore mixin function. Zep functions will not override underscore functions if they already exist, unless you pass `zep._(true)`

```
_.mixin(zep._()); // extend underscore
```

# Test

```
npm test
```

# Build

```
grunt build
```

# Source

[https://github.com/miguelmota/zep](https://github.com/miguelmota/zep)

# License

Released under the MIT License.
