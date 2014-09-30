var _ = require('lodash');
var zep = require('../zep');

describe('Zep', function() {
  describe('isEmpty', function() {
    it('should return true if empty value', function() {
      expect(zep.isEmpty('')).toBeTruthy();
      expect(zep.isEmpty([])).toBeTruthy();
      expect(zep.isEmpty({})).toBeTruthy();
      expect(zep.isEmpty(undefined)).toBeTruthy();
      expect(zep.isEmpty(null)).toBeTruthy();
      expect(zep.isEmpty(0)).toBeFalsy();
    });
  });

  describe('isExisty', function() {
    it('should return true if not null or undefined', function() {
      expect(zep.isExisty(null)).toBeFalsy();
      expect(zep.isExisty(undefined)).toBeFalsy();
      expect(zep.isExisty(0)).toBeTruthy();
      expect(zep.isExisty(1)).toBeTruthy();
      expect(zep.isExisty(false)).toBeTruthy();
      expect(zep.isExisty('')).toBeTruthy();
    });

  });

  describe('isTruthy', function() {

    it('should return truthy', function() {
      expect(zep.isTruthy('')).toBeFalsy();
      expect(zep.isTruthy(0)).toBeFalsy();
      expect(zep.isTruthy(null)).toBeFalsy();
      expect(zep.isTruthy(undefined)).toBeFalsy();
      expect(zep.isTruthy(1)).toBeTruthy();
      expect(zep.isTruthy({})).toBeTruthy();
      expect(zep.isTruthy((function() { return true; })())).toBeTruthy();
    });

  });

  describe('isFalsy', function() {

    it('should return falsy', function() {
      expect(zep.isFalsy('')).toBeTruthy();
      expect(zep.isFalsy(0)).toBeTruthy();
      expect(zep.isFalsy(null)).toBeTruthy();
      expect(zep.isFalsy(undefined)).toBeTruthy();
      expect(zep.isFalsy(1)).toBeFalsy();
      expect(zep.isFalsy({})).toBeFalsy();
    });

  });

  describe('isString', function() {
    it('should return true if string', function() {
      expect(zep.isString('')).toBeTruthy();
      expect(zep.isString(new String(''))).toBeTruthy();
      expect(zep.isString(0)).toBeFalsy();
      expect(zep.isString(false)).toBeFalsy();
      expect(zep.isString(null)).toBeFalsy();
      expect(zep.isString(function(){})).toBeFalsy();
    });
  });

  describe('isNumber', function() {
    it('should return true if number', function() {
      expect(zep.isNumber('')).toBeFalsy();
      expect(zep.isNumber(0)).toBeTruthy();
      expect(zep.isNumber(new Number(1))).toBeTruthy();
      expect(zep.isNumber(false)).toBeFalsy();
      expect(zep.isNumber(null)).toBeFalsy();
      expect(zep.isNumber(function(){})).toBeFalsy();
    });
  });

  describe('isBoolean', function() {
    it('should return true if boolean', function() {
      expect(zep.isBool('')).toBeFalsy();
      expect(zep.isBool(0)).toBeFalsy();
      expect(zep.isBool(false)).toBeTruthy();
      expect(zep.isBool(new Boolean(1))).toBeTruthy();
      expect(zep.isBool(true)).toBeTruthy();
      expect(zep.isBool(null)).toBeFalsy();
      expect(zep.isBool(function(){})).toBeFalsy();
    });
  });

  describe('isObject', function() {

    it('should return true if object', function() {
      expect(zep.isObject({})).toBeTruthy();
      expect(zep.isObject('')).toBeFalsy();
      expect(zep.isObject(0)).toBeFalsy();
      expect(zep.isObject(null)).toBeFalsy();
      expect(zep.isObject(undefined)).toBeFalsy();
      expect(zep.isObject(1)).toBeFalsy();
      expect(zep.isObject([])).toBeFalsy();
    });

  });

  describe('isArray', function() {

    it('should return true if array', function() {
      expect(zep.isArray([])).toBeTruthy();
      expect(zep.isArray('')).toBeFalsy();
      expect(zep.isArray(0)).toBeFalsy();
      expect(zep.isArray(null)).toBeFalsy();
      expect(zep.isArray(undefined)).toBeFalsy();
      expect(zep.isArray(1)).toBeFalsy();
      expect(zep.isArray({})).toBeFalsy();
    });

  });

  describe('isFunction', function() {

    it('should return true if function', function() {
      expect(zep.isFunction('')).toBeFalsy();
      expect(zep.isFunction(1)).toBeFalsy();
      expect(zep.isFunction(function(){})).toBeTruthy();
      var o = { f: function() {} };
      expect(zep.isFunction(o.f)).toBeTruthy();
      expect(zep.isFunction(new Function('return 1;'))).toBeTruthy();
    });

  });

  describe('hasProp', function() {
    it('should return true if has property', function() {
      var o = { a: 'a' };
      expect(zep.hasProp(o, 'a')).toBeTruthy();
      expect(zep.hasProp(o, 'b')).toBeFalsy();
    });
  });

  xdescribe('chain', function() {

    it('should make an object chainable', function() {

      function addOne(o, i) {
        return o + 1;
      }

      function timesTwo(o, i) {
        return o * 2;
      }

      expect(
        zep.chain([1,2,3])
          .map(addOne)
          .map(timesTwo)
          .tap(function(a) {
            return a.reverse();
          })
      ).toEqual([8,6,4]);

    });

  });


  describe('tap', function() {
    it('should tap', function() {
      expect(zep.tap).toBeDefined();
    });
  });

  describe('clone', function() {
    it('should clone object', function() {
      var obj = {
        foo: 'bar'
      };

      var array = ['foo','bar'];

      var objCopy = zep.clone(obj);
      var arrayCopy = zep.clone(array);
      expect(objCopy).toEqual({foo:'bar'});
      expect(arrayCopy).toEqual(['foo','bar']);

      delete obj['foo'];
      array = array.slice(0,1);

      expect(objCopy).toEqual({foo:'bar'});
      expect(obj).toEqual({});
      expect(arrayCopy).toEqual(['foo','bar']);
      expect(array).toEqual(['foo']);
    });
  });

  describe('omit', function() {
    it('should omit properties', function() {
      var obj = {
        foo: 'bar',
        qux: 'baz',
        corge: 'quux'
      };

      expect(zep.omit(obj, ['qux','corge'])).toEqual({foo:'bar'});
      expect(zep.omit(obj, 'qux')).toEqual({foo:'bar',corge:'quux'});
    });
  });

  describe('without', function() {
    it('should return new array without selected values', function() {
      var col = ['a','b','c'];

      expect(zep.without(col, 'c')).toEqual(['a','b']);
      expect(zep.without(col, ['b','c'])).toEqual(['a']);
      expect(zep.without(col, 'b','c')).toEqual(['a']);
      expect(zep.without(col, {})).toEqual(['a','b','c']);
    });
  });

  describe('restrict', function() {
    it('should return new restricted array', function() {
      var col = [
        {
          text: 'Get milk',
          completed: false
        },
        {
          text: 'Get cheese',
          completed: true
        }
      ];

      expect(zep.restrict(col, function(obj) {
        return obj.completed === false;
      })).toEqual([{text: 'Get milk', completed: false}]);
    });
  });

  describe('rename', function() {
    it('should rename properties', function() {
      var obj = {
        foo: 'foo',
        moo: 'moo',
        doo: 'doo'
      };

      var newNames = {
        foo: 'faa',
        moo: 'maa',
        doo: 'daa'
      };

      expect(zep.rename(obj, newNames)).toEqual(
        {
          faa: 'foo',
          maa: 'moo' ,
          daa: 'doo'
        }
      );
    });
  });

  describe('keys', function() {
    it('should return object keys', function() {
      expect(zep.keys({a:'b',c:'d'})).toEqual(['a','c']);
      expect(zep.keys('abc')).toEqual([]);
      expect(zep.keys(3)).toEqual([]);
      expect(zep.keys([1,2,3])).toEqual([]);
    });
  });


  describe('noop', function() {
    it('should return an empty function', function() {
      expect(zep.noop()).not.toBeDefined();
    });
  });

  describe('always', function() {
    it('should return input', function() {
      expect(zep.always(2)()).toEqual(2);
    });
  });

  describe('functor', function() {
    it('should wrap value in function if not function', function() {

      var f = 'foo';
      var g = function() {
        return 'bar';
      };

      expect(zep.isFunction(zep.functor(f))).toBeTruthy();
      expect(zep.functor(f)()).toEqual('foo');

      expect(zep.isFunction(zep.functor(g))).toBeTruthy();
      expect(zep.functor(g)()).toEqual('bar');
    });

  });

  describe('invoker', function() {
    it('should return input', function() {

      var reverse = zep.invoker('reverse', Array.prototype.reverse);

      var reversed = _.map([[1,2,3],['a','b','c']], reverse);

      expect(reversed).toEqual([[3,2,1], ['c','b','a']]);

    });
  });

  describe('checkerInvoker', function() {

    var o = {
      success: function success(n) {
        return n + ' succeeded';
      },
      fail: function fail(n) {
        return n + ' failed';
      }
    };

    var isNumber = function isNumber(n) {
      return zep.isNumber(n);
    };

    var gt3 = function(n) {
      return n > 3;
    };

    it('should invoke success', function() {

      var validNum = zep.checkerInvoker([isNumber, gt3], o.success, o.fail);

      expect(validNum(5)).toEqual('5 succeeded');

    });

    it('should invoke fail', function() {
      //spyOn(o, 'success');
      //spyOn(o, 'fail');

      var validNum = zep.checkerInvoker([isNumber, gt3], o.success, o.fail);

      expect(validNum('c')).toEqual('c failed');

      //expect(o.success).not.toHaveBeenCalled();
      //expect(o.fail).toHaveBeenCalled();
    });

  });

  describe('checker', function() {
    it('should return an empty function', function() {
      var isNumber = function isNumber(n) {
        return zep.isNumber(n);
      };
      isNumber.message = 'Must be a number';

      var gt3 = function(n) {
        return n > 3;
      };
      gt3.message = 'Must be greater than 3';

      var validNum = zep.checker(isNumber, gt3);

      expect(validNum('a')).toEqual(['Must be a number', 'Must be greater than 3']);
      expect(validNum(3)).toEqual(['Must be greater than 3']);
      expect(validNum(5)).toEqual([]);
    });
  });

  describe('complement', function() {
    it('should return complement', function() {
      function f() {
        return true;
      }
      var g = zep.complement(f);
      expect(f()).toBeTruthy();
      expect(g()).toBeFalsy();
    });
  });


  describe('prop', function() {
    it("should return a function that returns the object's value", function() {

      var o = {
        foo: 'foq',
        bar: 'baq'
      };

      var obj = zep.prop(o);

      expect(obj('foo')).toEqual('foq');
      expect(obj('bar')).toEqual('baq');
      expect(obj('nothere')).not.toBeDefined();
    });

  });


  describe('idenitity', function() {
    it('should return itself', function() {
      expect(zep.identity({foo: 'bar'})).toEqual({foo: 'bar'});
      expect(zep.identity(2)).toEqual(2);
      expect(zep.identity(2,5)).toEqual(2);
    });
  });

  describe('merge', function() {

    it('should merge two objects', function() {
      var obj1 = {
        foo: 'bar',
        baz: 1234
      };

      var obj2 = {
        foo: 'qux'
      };

      expect(zep.merge(obj1, obj2)).toEqual({foo: 'qux', baz: 1234});
    });

  });

  /**
  * Arrays
  */

  describe('toArray', function() {
    it('should return an array', function() {
      (function() {
        expect(zep.toArray(arguments)).toEqual(['a','b','c']);
      })('a','b','c');
    });
    it('should return an array from string', function() {
      expect(zep.toArray('abc')).toEqual(['a','b','c']);
    });
    it('should not return an array from number', function() {
      expect(zep.toArray(123)).toEqual([]);
    });
  });

  describe('flatten', function() {
    it('should flatten an array recursively', function() {
      expect(zep.flatten(['o',1,[['q', {a:'b'}, ['c',2]]]])).toEqual(['o',1,'q',{a:'b'},'c',2]);
      expect(zep.flatten('a')).toEqual(['a']);
    });
  });

  describe('each', function() {
    it('should iterate through each item', function() {
      var total = 0;
      expect(zep.each([2,4,6], function(v, i) {
        total += v;
      })).toEqual([2,4,6]);

      expect(total).toEqual(12);
    });
  });

  describe('reduce', function() {
    it('should reduce array', function() {
      expect(zep.reduce([1,2,3], function(acc, v, i) {
        return acc += v;
      }, 0)).toEqual(6);
    });
    it('should reduce object', function() {
      expect(zep.reduce({'a': 'z', 'b': 'y', 'c': 'x'}, function(acc, v, k) {
        acc[v] = k;
        return acc;
      }, {})).toEqual({'z': 'a', 'y': 'b', 'x': 'c'});
    });
  });

  describe('map', function() {
    it('should map array', function() {
      expect(zep.map([1,2,3], function(v, i) {
        return v * 2;
      })).toEqual([2,4,6]);
    });
  });

  describe('filter', function() {
    it('should filter array', function() {
      expect(zep.filter([1,2,3], function(v, i) {
        return v % 2 === 1;
      })).toEqual([1,3]);
    });
  });

  describe('some', function() {
    it('should return true if some', function() {
      expect(zep.some([1,2,3], function(v, i) {
        return v > 2;
      })).toBeTruthy();
      expect(zep.some([2,4,6], function(v, i) {
        return v % 2 === 1;
      })).toBeFalsy();
    });
  });

  describe('every', function() {
    it('should return true if every', function() {
      expect(zep.every([2,4,6], function(v, i) {
        return v < 5;
      })).toBeFalsy();
      expect(zep.every([2,4,6], function(v, i) {
        return v % 2 === 0;
      })).toBeTruthy();
    });
  });

  describe('sum', function() {
    it('should sum all values in array', function() {
      expect(zep.sum([2,3],4,5,3,[23,45,[2,[4,6]]])).toEqual(97);
    });
  });

  describe('size', function() {
    it('should return size of array or object', function() {
      expect(zep.size([2,{},'a'])).toEqual(3);
      expect(zep.size({a: 'b', c: 2, d: false})).toEqual(3);
      expect(zep.size('foo')).toEqual(3);
    });
  });

  describe('cat', function() {
    it('should concatenate', function() {
      expect(zep.cat('a','b','c',2,['d'])).toEqual('abc2d');
      expect(zep.cat([], 'a','b','c',2,['d'])).toEqual(['a','b','c',2,'d']);
      expect(zep.cat(1,2,3)).toEqual('123');
      expect(zep.cat([[1]],2,3)).toEqual([[1],2,3]);
    });
  });

  describe('construct', function() {
    it('should construct an array with head', function() {
      expect(zep.construct(1, [1,2])).toEqual([1,1,2]);
      expect(zep.construct(['a'], [1,2])).toEqual([['a'],1,2]);
      //expect(zep.construct(1,1,2,3)).toEqual([1,1,2,3]);
    });
  });

  describe('mapcat', function() {
    it('should concatenate maps', function() {
      var col = ['a','b'];
      var fn = function(v,i) {
        return v + 'c';
      }

      expect(zep.mapcat(col,fn)).toEqual('acbc');

      col = [1,2];
      fn = function(v,i) {
        return v * 2;
      }

      expect(zep.mapcat(col,fn)).toEqual('24');
    });
  });

  describe('contains', function() {
    it('should return true if value in array', function() {
      expect(zep.contains(['a','b'], 'a')).toBeTruthy();
      expect(zep.contains(['a','b'], 'q')).toBeFalsy();
      expect(zep.contains(['a','b','c'], ['a','c'])).toBeTruthy();
      expect(zep.contains(['a','b','c'], ['a','d'])).toBeFalsy();
      expect(zep.contains([{a:'b'}], {a:'b'})).toBeFalsy();
    });
  });

  describe('range', function() {

    it('should return array of numbers', function() {
      expect(zep.range(3)).toEqual([0,1,2]);
      expect(zep.range(5,10)).toEqual([5,6,7,8,9]);
    });

  });

  describe('repeat', function() {

    it('should repeat string n times', function() {

      expect(zep.repeat('a', 2)).toEqual(['a','a']);
    });

  });

  describe('repeatedly', function() {

    it('should repeat function n times', function() {

      var x = 2;

      function xTimesTwo() {
        return (x *= 2, x)
      }

      expect(zep.repeatedly(xTimesTwo, 3)).toEqual([4,8,16]);
    });

  });

  describe('iterateUntil', function() {

    it('should iterate until check', function() {
      function addTwo(i) {
        return i + 2;
      }

      function lessThanEight(n) {
        return n < 8;
      }

      expect(zep.iterateUntil(addTwo, lessThanEight, 0)).toEqual([2,4,6]);
    });

  });

  describe('int', function() {
    it('should typecast to integer', function() {
      expect(zep.toInt('2')).toEqual(2);
      expect(zep.toInt('-2')).toEqual(-2);
      expect(zep.toInt('A')).toEqual(0);
      expect(zep.toInt({})).toEqual(0);
    });
  });

  describe('string', function() {
    it('should typecast to string', function() {
      expect(zep.toString(2)).toEqual('2');
      expect(zep.toString({})).toEqual('[object Object]');
      expect(zep.toString(['a', 'b'])).toEqual('a,b');
      expect(zep.toString(function() {})).toEqual('function () {}');
    });
  });

  describe('isIndexed', function() {
    it('should return true if indexed', function() {
      expect(zep.isIndexed([])).toBeTruthy();
      expect(zep.isIndexed('')).toBeTruthy();
      expect(zep.isIndexed(1)).toBeFalsy();
      expect(zep.isIndexed({})).toBeFalsy();
    });
  });

  describe('shuffle', function() {

    it('should shuffle array', function() {
      var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
      var shuffled = zep.shuffle(arr);
      expect(arr).not.toEqual(shuffled);
    });

  });

  describe('random', function() {
    zep.random = function(min, max) {
      var args = [].slice.call(arguments);
      if (args.length === 0) {
        throw new Error('Need at least one argument');
      }
      if (typeof max === 'undefined') {
        min = 0;
        max = args[0];
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    it('should return a random number', function() {
      var random = zep.random(9);
      expect(random).toMatch(/[0-9]{1}/);

      random = zep.random(20,30);
      expect(random).toMatch(/[2-3][0-9]/);
    });

  });


  describe('best', function() {
    it('should top result', function() {
      function greatest(x, y) {
        return x > y;
      }

      var col = [1,4,5,2,6,3];

      expect(zep.best(col, greatest)).toEqual(6);
    });
    it('should top result - object', function() {
      function greatest(x, y) {
        return x.amount > y.amount;
      }

      var col = [
        {amount: 3},
        {amount: 4},
        {amount: 9},
        {amount: 7}
      ];

      expect(zep.best(col, greatest)).toEqual({amount: 9});
    });
  });

  describe('comparator', function() {
    it('should return a comparator function', function() {
      var lessOrEqual = function(x, y) {
        return x <= y;
      };

      var greaterOrEqual = function(x, y) {
        return x >= y;
      };

      expect([1,2,3].sort(zep.comparator(lessOrEqual))).toEqual([1,2,3]);
      expect([1,2,3].sort(zep.comparator(greaterOrEqual))).toEqual([3,2,1]);
    });
  });

  describe('nth', function() {
    it('should return nth indexed value', function() {
      expect(zep.nth(['a','b','c'], 2)).toEqual('c');
      expect(zep.nth(['a'], 2)).toEqual(undefined);
    });
  });

  describe('first', function() {
    it('should return first indexed value', function() {
      expect(zep.first(['a','b','c'])).toEqual('a');
    });
  });

  describe('last', function() {
    it('should return last indexed value', function() {
      expect(zep.last(['a','b','c'])).toEqual('c');
    });
  });

  describe('rest', function() {
    it('should return all but first', function() {
      expect(zep.rest(['a','b','c'])).toEqual(['b','c']);
    });
  });

  describe('butLast', function() {
    it('should return an array of all but last', function() {
      var col = ['a','b','c','d'];
      expect(zep.butLast(col)).toEqual(['a','b','c']);
    });
  });

  /**
  * Functions
  */

  describe('doWhen', function() {
    it('should run action if condition is true', function() {
      var cond = function() {
        return true;
      };

      var cond2 = function() {
        return false;
      }

      var o = {
        fun: function() {
          return 'foo';
        }
      };

      var x = 2,
          y = 'a';

      function isNumber(x) {
        return zep.isNumber(x);
      }

      function addOne(x) {
        return function() {
          return x + 1;
        };
      }

      expect(zep.doWhen(isNumber(x), addOne(x))).toEqual(3);
      expect(zep.doWhen(isNumber(y), addOne(y))).not.toBeDefined();
      expect(o.fun()).toEqual('foo');
      expect(zep.isTruthy(cond())).toBeTruthy();
      expect(zep.doWhen(cond(), o.fun )).toEqual('foo');
      expect(zep.doWhen(cond2(), o.fun )).toBeFalsy();
    });
  });

  describe('result', function() {
    it('should run property function or return value', function() {
      var o = {
        a: function() {
          return 'bar';
        },
        b: 'foo'
      };
      expect(zep.result(o, 'a')).toEqual('bar');
      expect(zep.result(o, 'b')).toEqual('foo');
    });
  });

  describe('forOwn', function() {
    it('should iterate over own properties', function() {
      var o = {
        a: 'b',
        c: function() {},
        d: null
      };

      var keys = [];
      var vals  = [];

      zep.forOwn(o, function(v, k) {
        keys.push(k);
        vals.push(v);
      });

      expect(keys).toEqual(['a','c','d']);
      expect(vals).toEqual(['b',o.c,null]);
    });
  });

  describe('compact', function() {
    it('should return an object with no empty properties', function() {
      expect(zep.compact({a: 'b', foo: null, b: false, taco: 1, qux: 0, c: '', d: []})).toEqual({a: 'b', b: false, taco: 1, qux: 0});
    });
    it('should return an array with no empty values', function() {

      expect(zep.compact(['b', null, false, 1, 0, '', []])).toEqual(['b', false, 1, 0]);
    });
  });

  describe('interpose', function() {
    it('should interpose array with value', function() {
      var col = ['a','b','c','d'];
      expect(zep.interpose(col, '|')).toEqual(['a','|','b','|','c','|','d']);
    });
  });

  describe('toBool', function() {

    it('should return a boolean', function() {
      expect(zep.toBool('yes')).toBeTruthy();
      expect(zep.toBool('no')).toBeFalsy();
      expect(zep.toBool('on')).toBeTruthy();
      expect(zep.toBool('off')).toBeFalsy();
      expect(zep.toBool('abc')).toBeTruthy();
      expect(zep.toBool('0')).toBeFalsy();
      expect(zep.toBool('1')).toBeTruthy();
      expect(zep.toBool(0)).toBeFalsy();
      expect(zep.toBool(1)).toBeTruthy();
      expect(zep.toBool({})).toBeFalsy();
      expect(zep.toBool([])).toBeFalsy();
      expect(zep.toBool({a:'a'})).toBeTruthy();
      expect(zep.toBool(['a'])).toBeTruthy();
    });

  });

});
