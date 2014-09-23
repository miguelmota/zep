(function(global, undefined) {
  var lib = (function(){

    'use strict';

    var lib = {};

    /**
    * @desc Returns true if item is not null or undefined.
    *
    * @func isExisty
    * @param {*} item - some item
    * @return {boolean} - is existy
    *
    * @example
    * console.log(zep.isExisty(null)); // false
    * console.log(zep.isExisty(undefined)); // false
    * console.log(zep.isExisty(0)); // true
    * console.log(zep.isExisty(1)); // true
    * console.log(zep.isExisty(false)); // true
    * console.log(zep.isExisty('')); // true
    */
    function isExisty(o) {
      return o != null;
    }

    /**
    * @desc Returns true if item is of truthy value.
    *
    * @func isTruthy
    * @param {*} item - some item
    * @return {boolean} - is truthy
    *
    * @example
    * console.log(zep.isTruthy('')); // false
    * console.log(zep.isTruthy(0)); // false
    * console.log(zep.isTruthy(null)); // false
    * console.log(zep.isTruthy(undefined)); // false
    * console.log(zep.isTruthy(1)); // true
    * console.log(zep.isTruthy({})); // true
    * console.log(zep.isTruthy((function() { return true; })())); // true
    */
    function isTruthy(o) {
      return o;
    }

    /**
    * @desc Returns true if item is of falsy value.
    *
    * @func isFalsy
    * @param {*} item - some item
    * @return {boolean} - is falsy
    *
    * @example
    * console.log(zep.isFalsy('')); // true
    * console.log(zep.isFalsy(0)); // true
    * console.log(zep.isFalsy(null)); // true
    * console.log(zep.isFalsy(undefined)); // true
    * console.log(zep.isFalsy(1)); // false
    * console.log(zep.isFalsy({})); // false
    */
    function isFalsy(o) {
      return !isTruthy(o);
    }

    /**
    * @desc Return true if item is object;
    *
    * @func isObject
    * @param {*} item - some item
    * @return {boolean} - is object
    *
    * @example
    * console.log(zep.isObject({})); // true
    * console.log(zep.isObject('')); // false
    * console.log(zep.isObject(0)); // false
    * console.log(zep.isObject(null)); // false
    * console.log(zep.isObject(undefined)); // false
    * console.log(zep.isObject(1)); // false
    * console.log(zep.isObject([])); // false
    */
    function isObject(o) {
      return Object.prototype.toString.call(o) === '[object Object]';
    }

    /**
    * @desc Returns true if item is array.
    *
    * @func isArray
    * @param {*} item - some item
    * @return {boolean} - is array
    *
    * @example
    * console.log(zep.isArray([])); // true
    * console.log(zep.isArray('')); false
    * console.log(zep.isArray(0)); false
    * console.log(zep.isArray(null)); false
    * console.log(zep.isArray(undefined)); false
    * console.log(zep.isArray(1)); false
    * console.log(zep.isArray({})); false
    */
    function isArray(o) {
      return Object.prototype.toString.call(o) === '[object Array]';
    }

    /**
    * @desc Returns true if item is indexable.
    *
    * @func isindexed
    * @param {*} item - some item
    * @return {*} - Returns true if indexable.
    *
    * @example
    * console.log(zep.isIndexed([])); true
    * console.log(zep.isIndexed('')); true
    * console.log(zep.isIndexed(1)); false
    * console.log(zep.isIndexed({})); false
    */
    function isIndexed(o) {
      return isArray(o) || isString(o);
    }

    /**
    * @desc Returns true if item is string.
    *
    * @func isString
    * @param {*} item - some item
    * @return {boolean} - is string
    *
    * @example
    * console.log(zep.isString('')); true
    * console.log(zep.isString(0)); false
    * console.log(zep.isString(false)); false
    * console.log(zep.isString(null)); false
    * console.log(zep.isString(function(){})); false
    * console.log(zep.isString(new String(''))); true
    */
    function isString(o) {
      return typeof o === 'string' || o instanceof String;
    }

    /**
    * @desc Returns true if item is a number.
    *
    * @func isNumber
    * @param {*} item - some item
    * @return {boolean} - is number
    *
    * @example
    * console.log(zep.isNumber('')); false
    * console.log(zep.isNumber(0)); true
    * console.log(zep.isNumber(new Number(1))); true
    * console.log(zep.isNumber(false)); false
    * console.log(zep.isNumber(null)); false
    * console.log(zep.isNumber(function(){})); false
    */
    function isNumber(o) {
      return typeof o === 'number' || o instanceof Number;
    }

    /**
    * @desc Returns true if is function.
    *
    * @func isFunction
    * @param {*} item - some item
    * @return {boolean} - is function
    *
    * @example
    * console.log(zep.isFunction('')); false
    * console.log(zep.isFunction(1)); false
    * console.log(zep.isFunction(function(){})); true
    * var o = { f: function() {} };
    * console.log(zep.isFunction(o.f)); true
    * console.log(zep.isFunction(new Function('return 1;'))); true
    */
    function isFunction(o) {
      return typeof o === 'function' || o instanceof Function;
    }

    /**
    * @desc Returns true if item is boolean.
    *
    * @func isBool
    * @alias isBoolean
    * @param {*} item - some item
    * @return {boolean} - is boolean
    *
    * @example
    * console.log(zep.isBool('')); false
    * console.log(zep.isBool(0)); false
    * console.log(zep.isBool(false)); true
    * console.log(zep.isBool(new Boolean(1))); true
    * console.log(zep.isBool(true)); true
    * console.log(zep.isBool(null)); false
    * console.log(zep.isBool(function(){})); false
    */
    function isBoolean(o) {
      return typeof o === 'boolean' || o instanceof Boolean;
    }

    /**
    * @desc Returns true if item is empty.
    *
    * @func isEmpty
    * @param {*} item - some item
    * @return {boolean}
    *
    * @example
    * console.log(zep.isEmpty('')); true
    * console.log(zep.isEmpty([])); true
    * console.log(zep.isEmpty({})); true
    * console.log(zep.isEmpty(undefined)); true
    * console.log(zep.isEmpty(null)); true
    * console.log(zep.isEmpty(0)); false
    */
    function isEmpty(o) {
      if (!isExisty(o)) return true;
      if (isArray(o)) return o.length === 0;
      if (isObject(o)) return Object.keys(o).length === 0;
      if (isString(o)) return o.length === 0;
      return false;
    }

    /**
    * @desc Returns true if object has property.
    *
    * @func hasProp
    * @param {object} - object
    * @param {string} - property
    * @return {boolean}
    *
    * @example
    * var o = { a: 'a' };
    * console.log(zep.hasProp(o, 'a')); true
    * console.log(zep.hasProp(o, 'b')); false
    */
    function hasProp(o, p) {
      return (o && o[p]);
    }

    /**
    * @desc Return array of object keys.
    *
    * @func keys
    * @param {object} object - object
    * @return {array} - Array of keys
    *
    * @example
    * console.log(zep.keys({a:'b',c:'d'})); // ['a','c']
    * console.log(zep.keys('abc')); // []
    * console.log(zep.keys(3)); // []
    * console.log(zep.keys([1,2,3])); // []
    */
    function keys(o) {
      var ret = [];
      if (isObject(o)) {
        ret = Object.keys(o);
      }
      return ret;
    }

    /**
    * @desc Clone an object.
    *
    * @func clone
    * @param {object} object - object
    * @return {object} - cloned object
    *
    * @example
    * var obj = {
    *   foo: 'bar'
    * };
    *
    * var array = ['foo','bar'];
    *
    * var objCopy = zep.clone(obj);
    * var arrayCopy = zep.clone(array);
    * console.log(objCopy); // {foo:'bar'}
    * console.log(arrayCopy); // ['foo','bar']
    *
    * delete obj['foo'];
    * array = array.slice(0,1);
    *
    * console.log(objCopy); // {foo:'bar'}
    * console.log(obj); // {}
    * console.log(arrayCopy); // ['foo','bar']
    * console.log(array); // ['foo']
    */
    function clone(o) {
      if (isEmpty(o) || !isObject(o)) return o;
      var temp = o.constructor();
      prop;

      for (prop in o) {
        temp[prop] = clone(o[prop]);
      }

      return temp;
    }

    /**
    * @desc Omit properties from an object.
    *
    * @func omit
    * @param {object} object - object
    * @param {string|array} props - string or array of properties to omit
    * @return {object} - object with omitted properties.
    *
    * @example
    *  var obj = {
    *    foo: 'bar',
    *    qux: 'baz',
    *    corge: 'quux'
    *  };
    *
    * console.log(zep.omit(obj, ['qux','corge'])); // {foo:'bar'}
    * console.log(zep.omit(obj, 'qux')); // {foo:'bar',corge:'quux'}
    */
    function omit(obj, col) {
      col = (isArray(col) ? col : [col]);
      var o = {};
      forOwn(obj, function(v,k) {
        if (!contains(col,k)) {
          o[k] = v;
        }
      });

      return o;
    }

    /**
    * @desc Iterate over an object.
    *
    * @func forOwn
    * @param {object} object - object
    * @param {forOwnCallback} forOwnCallback - callback function
    * @return {object} - object with omitted properties.
    */

    /**
    * @desc forOwn callback
    *
    * @callback forOwnCallback
    * @param {*} value - value
    * @param {string} key - key
    * @return {object} - object
    */
    function forOwn(obj, func) {
      var k;
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          func(obj[k], k);
        }
      }
      return obj;
    }

    /**
    * @desc Merge two objects.
    *
    * @func merge
    * @param {object} object1 - object 1
    * @param {object} object2 - object 2
    * @return {object} - new object
    *
    * @example
    * var obj1 = {
    *   foo: 'bar',
    *   baz: 1234
    *  };
    *
    * var obj2 = {
    *   foo: 'qux'
    *  };
    *
    * console.log(zep.merge(obj1, obj2)); // {foo: 'qux', baz: 1234}
    */
    function merge(obj1, obj2){
      var obj3 = {},
      attrname;
      for (attrname in obj1) {
        obj3[attrname] = obj1[attrname];
      }
      for (attrname in obj2) {
        obj3[attrname] = obj2[attrname];
      }
      return obj3;
    }

    /**
    * @desc Remove empty values from object or array.
    *
    * @func compact
    * @param {object|array} collection - object or array
    * @return {object|array} - compacted object
    *
    * @example
    * console.log(zep.compact({a: 'b', foo: null, b: false, taco: 1, qux: 0, c: '', d: []})); // {a: 'b', b: false, taco: 1, qux: 0}
    });
    * console.log(zep.compact(['b', null, false, 1, 0, '', []])); // ['b', false, 1, 0]
    */
    function compact(o) {
      if (isObject(o)) {
        forOwn(o, function(v, k) {
          if (isEmpty(v)) delete o[k];
        });
      } else if (isArray(o)) {
        o = filter(o, function(v, i) {
          return !isEmpty(v);
        });
      }
      return o;
    }

    /**
    * @desc Rename keys in an object.
    *
    * @func rename
    * @param {object} object - object
    * @param {object} newNames - object
    * @return {object} - object map with new name as value.
    *
    *
    * var obj = {
    *   foo: 'foo',
    *   moo: 'moo',
    *   doo: 'doo'
    * };
    *
    * var newNames = {
    *   foo: 'faa',
    *   moo: 'maa',
    *   doo: 'daa'
    * };
    *
    * console.log(zep.rename(obj, newNames)); // { faa: 'foo', maa: 'moo' , daa: 'doo' }
    */
    function rename(obj, newNames) {
      return reduce(newNames, function(o, nu, old) {
        if (hasProp(obj, old)) {
          o[nu] = obj[old];
          return o;
        } else {
          return o;
        }
        return omit.apply(null, construct(obj, keys(newNames)));
      }, {});
    }

    /**
    * @desc An empty function which always returns undefined.
    *
    * @func noop
    * @return {undefined}
    *
    * @example
    expect(zep.noop()); // undefined
    */
    function noop() {}

    /**
    * @desc Returns a function that returns initial argument.
    *
    * @func always
    * @param {*} item - some item
    * @return {function} - function which always returns initial argument.
    *
    * @example
    * console.log(zep.always(2)()); // 2
    */
    function always(o) {
      return function() {
        return o;
      };
    }

    /**
    * @desc Returns initial argument or invokes it if it's a function.
    *
    * @func functor
    * @param {*} item - some item
    * @return {*} - Returns value
    *
    * @example
    * console.log(zep.functor('foo')()); // 'foo'
    * console.log(zep.functor(function(){ return 'bar'; })()); // 'bar'
    */
    function functor(v) {
      return typeof v === 'function' ? v : function() { return v; };
    }

    /**
    * @desc Resolves the value of property key in object.
    *
    * @func result
    * @param {object} object - object
    * @param {string} property - property name
    * @return {*} - Returns resolved value
    *
    * @example
    * var o = {
    *   a: function() {
    *     return 'bar';
    *   },
    *   b: 'foo'
    * };
    *
    * console.log(zep.result(o, 'a')); // 'bar'
    * console.log(zep.result(o, 'b')); // 'foo'
    */
    function result(o, p) {
      if (isFunction(o[p])) {
        return o[p].call(o);
      }
      return o[p];
    }

    /**
    * Array function
    */

    /**
    * @desc Returns item at index.
    *
    * @func nth
    * @param {array} array - array
    * @param {number} index - index number
    * @return {*} - Returns value at index
    *
    * @example
    * console.log(zep.nth(['a','b','c'], 2)); // 'c'
    * console.log(zep.nth(['a'], 2)); // undefined
    */
    function nth(ary, index) {
      if (ary[index]) {
        return ary[index];
      }
    }

    /**
    * @desc Returns item at first index.
    *
    * @func first
    * @param {array} array - array
    * @return {*} - Returns item at first index.
    *
    * @example
    * console.log(zep.first(['a','b','c'])); // 'a'
    */
    function first(ary) {
      return nth(toArray(ary), 0);
    }

    /**
    * @desc Returns item at last index.
    *
    * @func last
    * @param {array} array - array
    * @return {*} - Returns item at last index.
    */
    function last(ary) {
      var a = toArray(ary);
      return nth(a, size(a) - 1);
    }

    /**
    * @desc Returns all but first item in array.
    *
    * @func rest
    * @param {array} array - array
    * @return {*} - Returns all but first item in array.
    */
    function rest(ary) {
      var a = toArray(ary);
      a.shift();
      return a;
    }

    /**
    * @desc Returns all but last item in array.
    *
    * @func butLast
    * @param {array} array - array
    * @return {*} - Returns all but last item in array.
    */
    function butLast(col) {
      return toArray(col).slice(0, -1);
    }

    /**
    * @desc Concatenates arguments.
    *
    * @func cat
    * @param {*} items - items
    * @return {*} - return concatenated items
    *
    * @example
    * console.log(zep.cat('a','b','c',2,['d'])); // 'abc2d'
    * console.log(zep.cat([], 'a','b','c',2,['d'])); // ['a','b','c',2,'d']
    * console.log(zep.cat(1,2,3)); // '123'
    * console.log(zep.cat([[1]],2,3)); // [[1],2,3]
    */
    function cat() {
      var args = toArray(arguments);
      var head = first(args);
      if (typeof head === 'number') head = ''+head;
      if (isExisty(head)) {
        return head.concat.apply(head, rest(args));
      } else {
        return [];
      }
    }

    /**
    * @desc Constructs a new array by taking some element and putting it at the front of another array.
    *
    * @func construct
    * @alias cons
    * @param {*} head - head
    * @param {*} tail - tail
    * @return {*} - concatenated array
    *
    * @example
    * console.log(zep.construct(1, [1,2])); // [1,1,2]
    * console.log(zep.construct(['a'], [1,2])); // [['a'],1,2]
    */
    function construct(head, tail) {
      return cat([head], tail ? toArray(tail) : rest(arguments));
    }

    /**
    * @desc Concat items in array, invoking a callback at each iteration.
    *
    * @func mapcat
    * @param {*} col - collection
    * @param {mapcatCallback} callback - callback
    * @return {*} - concatenated array
    *
    * @example
    * var col = ['a','b'];
    * var fn = function(v,i) {
    *   return v + 'c';
    * }
    *
    * console.log(zep.mapcat(col, fn)); // 'acbc'
    */

    /**
    * @desc mapcat callback
    *
    * @callback mapcatCallback
    * @param {*} value - value
    * @param {number} index - index
    * @return {object} - object
    */
    function mapcat(col, fn) {
      return cat.apply(null, map(col, fn));
    }

    /**
    * @desc Omit items from an array.
    *
    * @func without
    * @param {*} array - array
    * @param {array|string} col - collection
    * @return {array} - new array without selected items
    *
    * @example
    * var col = ['a','b','c'];
    *
    * console.log(zep.without(col, 'c')); // ['a','b']
    * console.log(zep.without(col, ['b','c'])); // ['a']
    * console.log(zep.without(col, 'b','c')); // ['a']
    * console.log(zep.without(col, {})); // ['a','b','c']
    */
    function without(array, col) {
      col = toArray(flatten(rest(arguments)));
      return reduce(array, function(acc, v, i) {
        if (!contains(col, v)) {
          acc.push(v);
        }
        return acc;
      }, []);
    }

    /**
    * @desc Check whether item is in array.
    *
    * @func contains
    * @param {array} haystack - collection
    * @param {string|array} needle - item(s) to search for
    * @return {boolean} - is in array
    *
    * @example
    * console.log(zep.contains(['a','b'], 'a')); true
    * console.log(zep.contains(['a','b'], 'q')); false
    * console.log(zep.contains(['a','b','c'], ['a','c'])); true
    * console.log(zep.contains(['a','b','c'], ['a','d'])); false
    * console.log(zep.contains([{a:'b'}], {a:'b'})); // false, does not do deep lookups
    */
    function contains(col, v) {
      if (isArray(v)) {
        return every(v, function(u,i) {
          return contains(col,u);
        });
      } else {
        return !!~col.indexOf(v);
      }
    }

    /**
    * @desc Returns a new array with restricted items only.
    *
    * @func restrict
    * @param {array} collection - collection
    * @param {function} predicate - restrict function
    * @return {array} - new restricted array
    *
    * @example
    * var col = [
    *   {
    *     text: 'Get milk',
    *     completed: false
    *   },
    *   {
    *     text: 'Get cheese',
    *     completed: true
    *   }
    * ];
    *
    * console.log(zep.restrict(col, function(obj) {
    *   return obj.completed === false;
    * })); // [{text: 'Get milk', completed: false}]
    */
    function restrict(col, pred) {
      return reduce(col, function(acc, obj, i) {
        if (isTruthy(pred(obj))) {
          return acc;
        } else {
          return without(acc, obj);
        }
      }, col);
    }

    /**
    * @desc Pass an arbriary number of predicate functions to check value against.
    * Each predicate function must have `message` property for the error message.
    * Returns a new function that runs the value against all checkers. The returned
    * function returns an array of error messages.
    *
    * @func checker
    * @param {function} validator - validator predicate
    * @return {function} - new checker function
    *
    * @example
    * var isNumber = function isNumber(n) {
    *   return zep.isNumber(n);
    * };
    *
    * isNumber.message = 'Must be a number';
    *
    * var gt3 = function(n) {
    *   return n > 3;
    * };
    *
    * gt3.message = 'Must be greater than 3';
    *
    * var validNum = zep.checker(isNumber, gt3);
    *
    * console.log(validNum('a')); // ['Must be a number', 'Must be greater than 3']
    * console.log(validNum(3)); // ['Must be greater than 3']
    * console.log(validNum(5)); // []
    */
    function checker(/* validators */) {
      var validators = toArray(arguments);
      return function(/* args */) {
        var args = toArray(arguments);
        return reduce(validators, function(errs, check) {
          if (check.apply(null, args)) {
            return errs;
          } else {
            errs.push(check.message);
            return errs;
          }
        }, []);
      };
    }

    function chain() {

    }

    /**
    * @desc Shortcut for a reduce function that returns the best value.
    *
    * @func best
    * @param {array} collection - collection of items
    * @param {function} predicate - predicate function
    * @param {*} initial - initial value
    * @return {*} - item value
    *
    * @example
    * function greatest(x, y) {
    *   return x > y;
    * }
    *
    * var col = [1,4,5,2,6,3];
    *
    * console.log(zep.best(col, greatest)); // 6
    */
    function best(col, fn, initial) {
      return reduce(col, function(x, y) {
        return fn(x, y) ? x : y;
      }, initial || 0);
    }

    /**
    * @desc Turns an array-like item into an array.
    *
    * @func toArray
    * @param {object|string} item - item
    * @return {array} - array
    *
    * @example
    * (function() {
    *   console.log(zep.toArray(arguments)); // ['a','b','c']
    * })('a','b','c');
    *
    * console.log(zep.toArray('abc')); // ['a','b','c']
    * console.log(zep.toArray(123)); // []
    */
    function toArray(a) {
      return [].slice.call(a);
    }

    /**
    * @desc Flatten nested arrays into a single array.
    *
    * @func flatten
    * @param {array} array - array
    * @return {array} - flattened array
    *
    * @example
    * console.log(zep.flatten(['o',1,[['q', {a:'b'}, ['c',2]]]])); // ['o',1,'q',{a:'b'},'c',2]
    * console.log(zep.flatten('a')); // ['a']
    */
    function flatten(col) {
      return [].concat.apply([], Array.isArray(col) ? col.map(function(item) {
        return Array.isArray(item) ? flatten(item) : item;
      }) : [col]);
    }

    /**
    * @desc Iterate through a collection invoking a callback at each iteration.
    *
    * @func each
    * @param {array} collection - collection
    * @param {function} callback - callback
    * @return {array} - collection
    *
    * @example
    * var total = 0;
    *
    * zep.each([2,4,6], function(v, i) {
    *   total += v;
    * });
    *
    * console.log(total); // 12
    */
    function each(col, fn) {
      col.forEach(fn);
      return col;
    }

    /**
    * @desc Returns true if every item pass predicate callback.
    *
    * @func every
    * @param {array} collection - collection
    * @param {function} callback - callback
    * @return {boolean} - every item passed predicate
    *
    * @example
    * console.log(zep.every([2,4,6], function(v, i) {
    *    return v < 5;
    * })); // false
    *
    * console.log(zep.every([2,4,6], function(v, i) {
    *    return v % 2 === 0;
    * })); // true
    */
    function every(col, fn) {
      return col.every(fn);
    }

    /**
    * @desc Returns true if some items pass predicate callback.
    *
    * @func some
    * @param {array} collection - collection
    * @param {function} callback - callback
    * @return {boolean} - some items passed predicate
    *
    * @example
    * console.log(zep.some([1,2,3], function(v, i) {
    *   return v > 2;
    * })); // true
    *
    * console.log(zep.some([2,4,6], function(v, i) {
    *   return v % 2 === 1;
    * })); // false
    */
    function some(col, fn) {
      return col.some(fn);
    }

    /**
    * @desc Returns a new array of values returns from callback.
    *
    * @func map
    * @param {array} collection - collection
    * @param {function} callback - callback
    * @return {array} - new array
    *
    * @example
    * console.log(zep.map([1,2,3], function(v, i) {
    *   return v * 2;
    * })); // [2,4,6]
    */
    function map(col, fn) {
      return col.map(fn);
    }

    /**
    * @desc Returns array of items that pass filter callback.
    *
    * @func filter
    * @param {array} collection - collection
    * @param {function} callback - callback
    * @return {array} - new filtered array
    *
    * @example
    * console.log(zep.filter([1,2,3], function(v, i) {
    *   return v % 2 === 1;
    * })); // [1,3]
    */
    function filter(col, fn) {
      return col.filter(fn);
    }

    /**
    * @desc Iterated over a collection and returns the accumulated value. The returned value from the callback is the new accumulated value.
    *
    * @func reduce
    * @param {array|object} collection - collection
    * @param {reduceCallback} reduceCallback - callback
    * @param {*} initial - initial value
    * @return {*} - reduce value
    *
    * @example
    * console.log(zep.reduce([1,2,3], function(acc, v, i) {
    *   return acc += v;
    * }, 0)); // 6
    *
    * console.log(zep.reduce({'a': 'z', 'b': 'y', 'c': 'x'}, function(acc, v, k) {
    *   acc[v] = k;
    *   return acc;
    * }, {})); // {'z': 'a', 'y': 'b', 'x': 'c'}
    */

    /**
    * @desc reduce callback
    *
    * @callback reduceCallback
    * @param {*} accumulated - accumulated value
    * @param {*} item - collection item in current iteration
    * @param {number} index - iteration index
    * @return {object} - object
    */
    function reduce(col, fn, init) {
      if (isObject(col)) {
        var acc = init;
        forOwn(col, function(v,k,i) {
          acc = fn(acc, v, k, i);
        });
        return acc;
      } else {
        return col.reduce(fn, init);
      }
    }

    /**
    * @desc Returns the size of collection.
    *
    * @func prop
    * @param {object} collection - collection
    * @return {function} - function that takes in the property name
    *
    * @example
    * var o = {
    *   foo: 'foq',
    *   bar: 'baq'
    * };
    *
    * var obj = zep.prop(o);
    *
    * * console.log(obj('foo')); // 'foq'
    * * console.log(obj('bar')); // 'baq'
    * console.log(obj('nothere')); // undefined
    */
    function prop(obj) {
      return function(name) {
        return obj[name];
      };
    }

    /**
    * @desc Returns the size of collection.
    *
    * @func size
    * @param {array|object|string} collection - collection
    * @return {number} - size of collection
    *
    * @example
    * console.log(zep.size([2,{},'a'])); // 3
    * console.log(zep.size({a: 'b', c: 2, d: false})); // 3
    * console.log(zep.size('foo')); // 3
    */
    function size(x) {
      if (isArray(x)) return x.length;
      if (isObject(x)) return Object.keys(x).length;
      return x.length;
    }

    /**
    * @desc Flattens arguments and sums values.
    *
    * @func sum
    * @param {array} collection - collection
    * @return {number} - sum
    *
    * @example
    * console.log(zep.sum([2,3],4,5,3,[23,45,[2,[4,6]]])); // 97
    */
    function sum(/* args */) {
      return reduce(flatten([].slice.call(arguments)), function (acc, n) {
        return acc += n;
      }, 0);
    }

    /* Typecast function */

    /**
    * @desc Typecasts item to iteger.
    *
    * @func toInt
    * @alias int
    * @param {*} item - item
    * @return {number} - integer
    *
    * @example
    * console.log(zep.toInt('2')); // 2
    * console.log(zep.toInt('-2')); // -2
    * console.log(zep.toInt('A')); // 0
    * console.log(zep.toInt({})); // 0
    */
    function toInt(x) {
      return x | 0;
    }

    /**
    * @desc typecasts item to string
    *
    * @func toString
    * @alias string
    * @param {*} item - item
    * @return {string} - string
    *
    * @example
    * console.log(zep.toString(2)); // '2'
    * console.log(zep.toString({})); // '[object object]'
    * console.log(zep.toString(['a', 'b'])); // 'a,b'
    * console.log(zep.toString(function() {})); // 'function (
    */
    function toString(x) {
      return ''+x;
    }

    /**
    * @desc Typecasts item to boolean
    *
    * @func toBool
    * @alias bool
    * @alias boolean
    * @param {*} item - item
    * @return {boolean} - bolean
    *
    * @example
    * console.log(zep.toBool('yes')); // truthy
    * console.log(zep.toBool('no')); // falsy
    * console.log(zep.toBool('on')); // truthy
    * console.log(zep.toBool('off')); // falsy
    * console.log(zep.toBool('abc')); // truthy
    * console.log(zep.toBool('0')); // falsy
    * console.log(zep.toBool('1')); // truthy
    * console.log(zep.toBool(0)); // falsy
    * console.log(zep.toBool(1)); // truthy
    * console.log(zep.toBool({})); // falsy
    * console.log(zep.toBool([])); // falsy
    * console.log(zep.toBool({a:'a'})); // truthy
    * console.log(zep.toBool(['a'])); // truthy
    */
    function toBool(x) {
      if (isString(x)) {
        switch(x.toLowerCase()) {
          case 'true': case 'yes': case 'on': case '1': return true;
          case 'false': case 'no': case 'off': case '0': return false;
          default: return !!x;
        }
      }
      if (isObject(x) || isArray(x)) return !isEmpty(x);
      return !!x;
    };

    /**
    * @desc Takes in a predicate function and returns a new function that accepts two parameters which get passed as arguments to the predicate function.
    * Returns -1 if the predicate is truthy.
    * Returns 1 if the predicate is falsy.
    * Returns 0 otherwise.
    *
    * @func comparator
    * @param {function} predicate - predicate
    * @return {function} - comparator function
    *
    * @example
    * var lessOrEqual = function(x, y) {
    *   return x <= y;
    * };
    *
    * var greaterOrEqual = function(x, y) {
    *   return x >= y;
    * };
    *
    * console.log([1,2,3].sort(zep.comparator(lessOrEqual))); // [1,2,3]
    * console.log([1,2,3].sort(zep.comparator(greaterOrEqual))); // [3,2,1]
    */
    function comparator(pred) {
      return function(x, y) {
        if (pred(x, y)) {
          return -1;
        } else if (pred(y, x)) {
          return 1;
        } else {
          return 0;
        }
      };
    }

    /**
    * @desc Returns a function that invokes the complement of the initial function.
    *
    * @func complement
    * @param {function} predicate - predicate
    * @return {function} - bolean
    *
    * @example
    * function f() {
    *   return true;
    * }
    *
    * var g = zep.complement(f);
    *
    * console.log(g()); // false
    */
    function complement(pred) {
      return function() {
        return !pred.apply(null, toArray(arguments));
      };
    }

    /**
    * @desc Invokes action when condition is met.
    *
    * @func doWhen
    * @param {function} condition - condition
    * @param {function} action - action
    * @return {*} - result of action
    *
    * @example
    * var x = 2,
    *     y = 'a';
    *
    * function addOne(x) {
    *   return function() {
    *     return x + 1;
    *   };
    * }
    *
    * console.log(zep.doWhen(zep.isNumber(x), addOne(x))); // 3
    * console.log(zep.doWhen(zep.isNumber(y), addOne(y))); // undefined
    */
    function doWhen(cond, action) {
      if (isTruthy(cond)) {
        return action();
      } else {
        return undefined;
      }
    }

    /**
    * @desc Interpose an item after each iteration.
    *
    * @func interpose
    * @param {array} collection - collection
    * @param {*} item - item to interpose
    * @return {*} - interposed item
    *
    * @example
    * var col = ['a','b','c','d'];
    * console.log(zep.interpose(col, '|')); // ['a','|','b','|','c','|','d']
    */
    function interpose(col, inter) {
      return butLast(mapcat(col ,function(e) {
        return construct(e, [inter]);
      }));
    }

    /**
    * @desc Always returns first argument.
    *
    * @func indentity
    * @param {*} item - item
    * @return {*} - item
    *
    * @example
    * console.log(zep.identity({foo: 'bar'})); // {foo: 'bar'}
    * console.log(zep.identity(2)); // 2
    * console.log(zep.identity(2,5)); // 2
    */
    function identity(x) {
      return x;
    }

    /**
    * @desc Returns new arary with shuffled items.
    *
    * @func shuffle
    * @param {array} array - array
    * @return {array} - new shuffled array
    *
    * @example
    * var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    * console.log(zep.shuffle(arr)); // [ 'c', 'd', 'f', 'b', 'e', 'a' ]
    */
    function shuffle(col) {
      var array = [].slice.call(col) || [];
      var currentIndex = array.length,
      tmpValue,
      randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tmpValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tmpValue;
      }

      return array;
    }

    /**
    * @desc Returns a random number.
    *
    * @func random
    * @param {number} [minimum=0] - minimum
    * @param {number} maximum - maximum
    * @return {number} - random number
    *
    * @example
    * console.log(zep.random(9)); // 3
    * console.log(zep.random(20,30)); // 24
    */
    function random(min, max) {
      var args = [].slice.call(arguments);
      if (args.length === 0) {
        throw new Error('Need at least one argument');
      }
      if (typeof max === 'undefined') {
        min = 0;
        max = args[0];
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
    * @desc Returns array with range of numbers.
    *
    * @func range
    * @param {number} [minimum=0] - minimum
    * @param {number} maximum - maximum
    * @return {array} - range of numbers
    *
    * @example
    * console.log(zep.range(3)); // [0,1,2]
    * console.log(zep.range(5,10)); // [5,6,7,8,9]
    */
    function range(min, max) {
      if (arguments.length === 1) {
        max = min;
        min = 0;
      } else if (arguments.length === 2) {
        min = (min || 0);
      }
      var a = new Array(max),
      i,
      ret = [];

      for (i = min; i < a.length; i++) {
        ret.push(i);
      }
      return ret;
    }

    /**
    * @desc Returns array with repeated items.
    *
    * @func repeat
    * @param {*} item - item
    * @param {number} times - times to repeat
    * @return {array} - array with repeated items
    *
    * @example
    * console.log(zep.repeat('a', 3)); // ['a','a','a']
    */
    function repeat(value, times) {
      return map(range(times), function() {
        return value;
      });
    }

    /**
    * @desc Invokes function n number of times. Returns array with results.
    *
    * @func repeatedly
    * @param {function} function - function
    * @param {number} times - times to repeat
    * @return {array} - array with results
    *
    * @example
    * var x = 2;
    *
    * function xTimesTwo() {
    *   return (x *= 2, x);
    * }
    *
    * console.log(zep.repeatedly(xTimesTwo, 3)); // [4,8,16]
    */
    function repeatedly(fn, times) {
      return map(range(times), fn);
    }

    /**
    * @desc Iteratively invokes function until condition is met.
    *
    * @func interateUntil
    * @param {function} function - function
    * @param {function} predicte - predicate function
    * @return {array} - array with results
    *
    * @example
    * function addTwo(i) {
    *   return i + 2;
    * }
    *
    * function lessThanEight(n) {
    *   return n < 8;
    * }
    *
    * console.log(zep.iterateUntil(addTwo, lessThanEight, 0)); // [2,4,6]
    */
    function iterateUntil(fn, check, init) {
      var ret = [];
      var result = fn(init);
      while (check(result)) {
        ret.push(result);
        result = fn(result);
      }

      return ret;
    }

    /**
    * @desc Invokes method
    *
    * @func invoker
    * @param {function} function - function
    * @param {number} times - times to repeat
    * @return {array} - array with results.
    */
    function invoker(name, method) {
      return function(target) {
        if (!isExisty(target)) throw new TypeError('Must provide a target');
        var targetMethod = target[name];
        var args = rest(arguments);
        return doWhen((isExisty(targetMethod) && method === targetMethod), function() {
          return targetMethod.apply(target, args);
        });
      };
    }

    /*
    * TODO: finish
    *
    * @desc Invokes success callback is all conditions are met, otherwise invokes fail callback.
    *
    * @func
    * @param {array} checkers - success callback
    * @param {function} success - success callback
    * @param {function} fail - fail callback
    * @return {boolean} - if successful
    *
    * @example
    */
    /*
    function checkerInvoker(checkers, success, fail) {
    function(/ args /) {
      if (every(checkers, isTruthy)) {
        functor(success)();
        return true;
      } else {
        functor(fail)();
        return false;
      }
    }
    };
    */


    var _ = function(override) {
      var mixinObj = {};
      for (var k in lib) {
        if (lib.hasOwnProperty(k)) {
          var exists = _ !== 'undefined' && _[k];
          if (!override && exists) {
            return;
          }
          mixinObj[k] = lib[k];
        }
      }
      delete mixinObj.zep;
      delete mixinObj._;
      return mixinObj;
    };

    lib.isTruthy = isTruthy;
    lib.isFalsy = isFalsy;
    lib.isArray = isArray;
    lib.isString = isString;
    lib.isNumber = isNumber;
    lib.isObject = isObject;
    lib.isBoolean = lib.isBool = isBoolean;
    lib.isFunction = isFunction;
    lib.isEmpty = isEmpty;
    lib.isExisty = isExisty;

    lib.toBoolean = lib.toBool = lib.bool = toBool;
    lib.toInt = lib.int = toInt;
    lib.toString = lib.string = toString;

    lib.shuffle = shuffle;
    lib.flatten = lib.flat = flatten;
    lib.nth = nth;
    lib.first = first;
    lib.last = last;
    lib.rest = rest;
    lib.butLast = butLast;
    lib.isIndexed = isIndexed;
    lib.reduce = reduce;
    lib.map = map;
    lib.each = each;
    lib.filter = filter;
    lib.some = some;
    lib.every = every;
    lib.size = size;
    lib.toArray = toArray;
    lib.cat = cat;
    lib.construct = lib.cons = construct;
    lib.mapcat = mapcat;
    lib.without = without;
    lib.contains = contains;
    lib.restrict = restrict;
    lib.checker = checker;
    lib.best = best;

    lib.random = lib.rand = random;
    lib.sum = sum;

    lib.forOwn = forOwn;
    lib.compact = compact;
    lib.result = result;
    lib.hasProp = hasProp;
    lib.prop = lib.property = prop;
    lib.omit = omit;
    lib.clone = clone;
    lib.rename = rename;
    lib.keys = keys;

    lib.functor = functor;
    lib.invoker = invoker;
    lib.noop = noop;
    lib.always = always;
    lib.comparator = comparator;
    lib.interpose = interpose;
    lib.identity = identity;
    lib.merge = merge;
    lib.doWhen = doWhen;
    lib.complement = complement;
    lib.range = range;
    lib.repeat = repeat;
    lib.repeatedly = repeatedly;
    lib.iterateUntil = iterateUntil;

    lib._ = _;

    return lib;

  })();

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = lib;
    }
    exports.zep = lib;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return lib;
    });
  } else {
    global.lib = zep;
  }

}).call(this);