import { gql, createHttpLink, InMemoryCache, ApolloClient, useQuery } from '@apollo/client';
import fetch from 'cross-fetch';
import jwtDecode from 'jwt-decode';
import React, { useContext } from 'react';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var accountErrorFragment = /*#__PURE__*/gql(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  fragment AccountErrorFragment on AccountError {\n    code\n    field\n    message\n  }\n"])));
var addressFragment = /*#__PURE__*/gql(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  fragment AddressFragment on Address {\n    id\n    firstName\n    lastName\n    companyName\n    streetAddress1\n    streetAddress2\n    city\n    cityArea\n    postalCode\n    country {\n      code\n      country\n    }\n    countryArea\n    phone\n    isDefaultBillingAddress\n    isDefaultShippingAddress\n  }\n"])));
var userBaseFragment = /*#__PURE__*/gql(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  fragment UserBaseFragment on User {\n    id\n    email\n    firstName\n    lastName\n    isStaff\n    isSeller\n  }\n"])));
var userDetailsFragment = /*#__PURE__*/gql(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  fragment UserDetailsFragment on User {\n    ...UserBaseFragment\n    metadata {\n      key\n      value\n    }\n    defaultShippingAddress {\n      ...AddressFragment\n    }\n    defaultBillingAddress {\n      ...AddressFragment\n    }\n    addresses {\n      ...AddressFragment\n    }\n  }\n"])), addressFragment, userBaseFragment);

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25;
var LOGIN_WITHOUT_DETAILS = /*#__PURE__*/gql(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation loginWithoutDetails($email: String!, $password: String!) {\n    tokenCreate(email: $email, password: $password) {\n      csrfToken\n      token\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserBaseFragment\n      }\n    }\n  }\n"])), accountErrorFragment, userBaseFragment);
var LOGIN = /*#__PURE__*/gql(_templateObject2$1 || (_templateObject2$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation login($email: String!, $password: String!) {\n    tokenCreate(email: $email, password: $password) {\n      csrfToken\n      token\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), accountErrorFragment, userDetailsFragment);
var REGISTER = /*#__PURE__*/gql(_templateObject3$1 || (_templateObject3$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  mutation register($input: AccountRegisterInput!) {\n    accountRegister(input: $input) {\n      errors {\n        ...AccountErrorFragment\n      }\n      requiresConfirmation\n    }\n  }\n"])), accountErrorFragment);
var REFRESH_TOKEN = /*#__PURE__*/gql(_templateObject4$1 || (_templateObject4$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  mutation refreshToken($csrfToken: String!) {\n    tokenRefresh(csrfToken: $csrfToken) {\n      token\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment); // separate mutation so the request payload is minimal when user is not needed
// used for initial authentication

var REFRESH_TOKEN_WITH_USER = /*#__PURE__*/gql(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation refreshTokenWithUser($csrfToken: String!) {\n    tokenRefresh(csrfToken: $csrfToken) {\n      token\n      user {\n        ...UserDetailsFragment\n      }\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment, userDetailsFragment);
var VERIFY_TOKEN = /*#__PURE__*/gql(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation verifyToken($token: String!) {\n    tokenVerify(token: $token) {\n      isValid\n      payload\n      user {\n        ...UserDetailsFragment\n      }\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment, userDetailsFragment);
var EXTERNAL_AUTHENTICATION_URL = /*#__PURE__*/gql(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  mutation externalAuthenticationUrl(\n    $pluginId: String = \"mirumee.authentication.openidconnect\"\n    $input: JSONString!\n  ) {\n    externalAuthenticationUrl(pluginId: $pluginId, input: $input) {\n      authenticationData\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment);
var OBTAIN_EXTERNAL_ACCESS_TOKEN = /*#__PURE__*/gql(_templateObject8 || (_templateObject8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation externalObtainAccessTokens(\n    $pluginId: String = \"mirumee.authentication.openidconnect\"\n    $input: JSONString!\n  ) {\n    externalObtainAccessTokens(pluginId: $pluginId, input: $input) {\n      token\n      csrfToken\n      user {\n        ...UserDetailsFragment\n      }\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment, userDetailsFragment);
var EXTERNAL_REFRESH = /*#__PURE__*/gql(_templateObject9 || (_templateObject9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  mutation externalRefresh(\n    $pluginId: String = \"mirumee.authentication.openidconnect\"\n    $input: JSONString!\n  ) {\n    externalRefresh(pluginId: $pluginId, input: $input) {\n      token\n      csrfToken\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment);
var EXTERNAL_REFRESH_WITH_USER = /*#__PURE__*/gql(_templateObject10 || (_templateObject10 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation externalRefreshWithUser(\n    $pluginId: String = \"mirumee.authentication.openidconnect\"\n    $input: JSONString!\n  ) {\n    externalRefresh(pluginId: $pluginId, input: $input) {\n      token\n      csrfToken\n      user {\n        ...UserDetailsFragment\n      }\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment, userDetailsFragment);
var EXTERNAL_VERIFY_TOKEN = /*#__PURE__*/gql(_templateObject11 || (_templateObject11 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation externalVerify(\n    $pluginId: String = \"mirumee.authentication.openidconnect\"\n    $input: JSONString!\n  ) {\n    externalVerify(pluginId: $pluginId, input: $input) {\n      isValid\n      verifyData\n      user {\n        ...UserDetailsFragment\n        userPermissions {\n          code\n          name\n        }\n      }\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment, userDetailsFragment);
var EXTERNAL_LOGOUT = /*#__PURE__*/gql(_templateObject12 || (_templateObject12 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  mutation externalLogout(\n    $pluginId: String = \"mirumee.authentication.openidconnect\"\n    $input: JSONString!\n  ) {\n    externalLogout(pluginId: $pluginId, input: $input) {\n      logoutData\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment);
var CHANGE_USER_PASSWORD = /*#__PURE__*/gql(_templateObject13 || (_templateObject13 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  mutation passwordChange($newPassword: String!, $oldPassword: String!) {\n    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment);
var REQUEST_PASSWORD_RESET = /*#__PURE__*/gql(_templateObject14 || (_templateObject14 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  mutation requestPasswordReset(\n    $email: String!\n    $redirectUrl: String!\n    $channel: String!\n  ) {\n    requestPasswordReset(\n      email: $email\n      redirectUrl: $redirectUrl\n      channel: $channel\n    ) {\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment);
var SET_PASSWORD = /*#__PURE__*/gql(_templateObject15 || (_templateObject15 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation setPassword($token: String!, $email: String!, $password: String!) {\n    setPassword(token: $token, email: $email, password: $password) {\n      errors {\n        ...AccountErrorFragment\n      }\n      token\n      csrfToken\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), userDetailsFragment, accountErrorFragment);
var REQUEST_EMAIL_CHANGE = /*#__PURE__*/gql(_templateObject16 || (_templateObject16 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation requestEmailChange(\n    $channel: String!\n    $newEmail: String!\n    $password: String!\n    $redirectUrl: String!\n  ) {\n    requestEmailChange(\n      channel: $channel\n      newEmail: $newEmail\n      password: $password\n      redirectUrl: $redirectUrl\n    ) {\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), userDetailsFragment, accountErrorFragment);
var CONFIRM_EMAIL_CHANGE = /*#__PURE__*/gql(_templateObject17 || (_templateObject17 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation confirmEmailChange($channel: String!, $token: String!) {\n    confirmEmailChange(channel: $channel, token: $token) {\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), userDetailsFragment, accountErrorFragment);
var REQUEST_DELETE_ACCOUNT = /*#__PURE__*/gql(_templateObject18 || (_templateObject18 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  mutation accountRequestDeletion($channel: String!, $redirectUrl: String!) {\n    accountRequestDeletion(channel: $channel, redirectUrl: $redirectUrl) {\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), accountErrorFragment);
var DELETE_ACCOUNT = /*#__PURE__*/gql(_templateObject19 || (_templateObject19 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation accountDelete($token: String!) {\n    accountDelete(token: $token) {\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), userDetailsFragment, accountErrorFragment);
var UPDATE_ACCOUNT = /*#__PURE__*/gql(_templateObject20 || (_templateObject20 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation accountUpdate($input: AccountInput!) {\n    accountUpdate(input: $input) {\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), userDetailsFragment, accountErrorFragment);
var SET_ACCOUNT_DEFAULT_ADDRESS = /*#__PURE__*/gql(_templateObject21 || (_templateObject21 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation setAccountDefaultAddress($id: ID!, $type: AddressTypeEnum!) {\n    accountSetDefaultAddress(id: $id, type: $type) {\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), userDetailsFragment, accountErrorFragment);
var DELETE_ACCOUNT_ADDRESS = /*#__PURE__*/gql(_templateObject22 || (_templateObject22 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation deleteAccountAddress($addressId: ID!) {\n    accountAddressDelete(id: $addressId) {\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), userDetailsFragment, accountErrorFragment);
var CREATE_ACCOUNT_ADDRESS = /*#__PURE__*/gql(_templateObject23 || (_templateObject23 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  mutation createAccountAddress($input: AddressInput!) {\n    accountAddressCreate(input: $input) {\n      address {\n        ...AddressFragment\n      }\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), addressFragment, userDetailsFragment, accountErrorFragment);
var UPDATE_ACCOUNT_ADDRESS = /*#__PURE__*/gql(_templateObject24 || (_templateObject24 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  mutation updateAccountAddress($input: AddressInput!, $id: ID!) {\n    accountAddressUpdate(input: $input, id: $id) {\n      address {\n        ...AddressFragment\n      }\n      errors {\n        ...AccountErrorFragment\n      }\n      user {\n        ...UserDetailsFragment\n      }\n    }\n  }\n"])), addressFragment, userDetailsFragment, accountErrorFragment);
var CONFIRM_ACCOUNT = /*#__PURE__*/gql(_templateObject25 || (_templateObject25 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  mutation accountConfirm($email: String!, $token: String!) {\n    confirmAccount(email: $email, token: $token) {\n      user {\n        ...UserDetailsFragment\n      }\n      errors {\n        ...AccountErrorFragment\n      }\n    }\n  }\n"])), userDetailsFragment, accountErrorFragment);

var WINDOW_EXISTS = typeof window !== "undefined";
var LOCAL_STORAGE_EXISTS = WINDOW_EXISTS && !!window.localStorage;
var DEVELOPMENT_MODE = process.env.NODE_ENV === "development";

var SALEOR_AUTH_PLUGIN_ID = "_saleorAuthPluginId";
var SALEOR_CSRF_TOKEN = "_saleorCSRFToken";

var storage;
var createStorage = function createStorage(autologinEnabled) {
  var authPluginId = LOCAL_STORAGE_EXISTS ? localStorage.getItem(SALEOR_AUTH_PLUGIN_ID) : null;
  var accessToken = null;
  var csrfToken = autologinEnabled && LOCAL_STORAGE_EXISTS ? localStorage.getItem(SALEOR_CSRF_TOKEN) : null;

  var setAuthPluginId = function setAuthPluginId(pluginId) {
    if (LOCAL_STORAGE_EXISTS) {
      if (pluginId) {
        localStorage.setItem(SALEOR_AUTH_PLUGIN_ID, pluginId);
      } else {
        localStorage.removeItem(SALEOR_AUTH_PLUGIN_ID);
      }
    }

    authPluginId = pluginId;
  };

  var setCSRFToken = function setCSRFToken(token) {
    if (autologinEnabled && LOCAL_STORAGE_EXISTS) {
      if (token) {
        localStorage.setItem(SALEOR_CSRF_TOKEN, token);
      } else {
        localStorage.removeItem(SALEOR_CSRF_TOKEN);
      }
    }

    csrfToken = token;
  };

  var setAccessToken = function setAccessToken(token) {
    accessToken = token;
  };

  var getAuthPluginId = function getAuthPluginId() {
    return authPluginId;
  };

  var getAccessToken = function getAccessToken() {
    return accessToken;
  };

  var getCSRFToken = function getCSRFToken() {
    return csrfToken;
  };

  var setTokens = function setTokens(_ref) {
    var accessToken = _ref.accessToken,
        csrfToken = _ref.csrfToken;
    setAccessToken(accessToken);
    setCSRFToken(csrfToken);
  };

  var clear = function clear() {
    setAuthPluginId(null);
    setAccessToken(null);
    setCSRFToken(null);
  };

  storage = {
    setAuthPluginId: setAuthPluginId,
    setAccessToken: setAccessToken,
    setCSRFToken: setCSRFToken,
    getAuthPluginId: getAuthPluginId,
    getAccessToken: getAccessToken,
    getCSRFToken: getCSRFToken,
    setTokens: setTokens,
    clear: clear
  };
};

var _templateObject$2, _templateObject2$2;
var USER_WITHOUT_DETAILS = /*#__PURE__*/gql(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  query UserWithoutDetails {\n    user: me {\n      ...UserBaseFragment\n    }\n    authenticated @client\n    authenticating @client\n  }\n"])), userBaseFragment);
var USER = /*#__PURE__*/gql(_templateObject2$2 || (_templateObject2$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  query User {\n    user: me {\n      ...UserDetailsFragment\n    }\n    authenticated @client\n    authenticating @client\n  }\n"])), userDetailsFragment);

var auth = function auth(_ref) {
  var client = _ref.apolloClient,
      channel = _ref.channel;

  var login = function login(_ref2) {
    var _ref2$includeDetails = _ref2.includeDetails,
        includeDetails = _ref2$includeDetails === void 0 ? true : _ref2$includeDetails,
        opts = _objectWithoutPropertiesLoose(_ref2, ["includeDetails"]);

    var query = includeDetails ? USER : USER_WITHOUT_DETAILS;
    var loginMutation = includeDetails ? LOGIN : LOGIN_WITHOUT_DETAILS;
    client.writeQuery({
      query: query,
      data: {
        authenticating: true
      }
    });
    return client.mutate({
      mutation: loginMutation,
      variables: _extends({}, opts),
      update: function update(_, _ref3) {
        var _data$tokenCreate;

        var data = _ref3.data;

        if (data != null && (_data$tokenCreate = data.tokenCreate) != null && _data$tokenCreate.token) {
          storage.setTokens({
            accessToken: data.tokenCreate.token,
            csrfToken: data.tokenCreate.csrfToken
          });
        } else {
          client.writeQuery({
            query: query,
            data: {
              authenticating: false
            }
          });
        }
      }
    });
  };

  var logout = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(opts) {
      var authPluginId, result;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              authPluginId = storage.getAuthPluginId();
              storage.clear();
              client.writeQuery({
                query: USER,
                data: {
                  authenticating: false
                }
              });
              client.resetStore();

              if (!(authPluginId && opts != null && opts.input)) {
                _context.next = 9;
                break;
              }

              _context.next = 7;
              return client.mutate({
                mutation: EXTERNAL_LOGOUT,
                variables: _extends({}, opts, {
                  pluginId: authPluginId
                })
              });

            case 7:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 9:
              return _context.abrupt("return", null);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function logout(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var register = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(opts) {
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.mutate({
                mutation: REGISTER,
                variables: {
                  input: _extends({}, opts, {
                    channel: channel
                  })
                }
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function register(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var refreshToken = function refreshToken(includeUser) {
    if (includeUser === void 0) {
      includeUser = false;
    }

    var csrfToken = storage.getCSRFToken();

    if (!csrfToken) {
      throw Error("csrfToken not present");
    }

    if (includeUser) {
      return client.mutate({
        mutation: REFRESH_TOKEN_WITH_USER,
        variables: {
          csrfToken: csrfToken
        },
        update: function update(_, _ref6) {
          var _data$tokenRefresh;

          var data = _ref6.data;

          if (data != null && (_data$tokenRefresh = data.tokenRefresh) != null && _data$tokenRefresh.token) {
            storage.setAccessToken(data.tokenRefresh.token);
          } else {
            logout();
          }
        }
      });
    }

    return client.mutate({
      mutation: REFRESH_TOKEN,
      variables: {
        csrfToken: csrfToken
      },
      update: function update(_, _ref7) {
        var _data$tokenRefresh2;

        var data = _ref7.data;

        if (data != null && (_data$tokenRefresh2 = data.tokenRefresh) != null && _data$tokenRefresh2.token) {
          storage.setAccessToken(data.tokenRefresh.token);
        } else {
          logout();
        }
      }
    });
  };

  var verifyToken = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
      var _result$data, _result$data$tokenVer;

      var token, result;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              token = storage.getAccessToken();

              if (token) {
                _context3.next = 3;
                break;
              }

              throw Error("Token not present");

            case 3:
              _context3.next = 5;
              return client.mutate({
                mutation: VERIFY_TOKEN,
                variables: {
                  token: token
                }
              });

            case 5:
              result = _context3.sent;

              if (!((_result$data = result.data) != null && (_result$data$tokenVer = _result$data.tokenVerify) != null && _result$data$tokenVer.isValid)) {
                logout();
              }

              return _context3.abrupt("return", result);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function verifyToken() {
      return _ref8.apply(this, arguments);
    };
  }();

  var changePassword = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(opts) {
      var result;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return client.mutate({
                mutation: CHANGE_USER_PASSWORD,
                variables: _extends({}, opts)
              });

            case 2:
              result = _context4.sent;
              return _context4.abrupt("return", result);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function changePassword(_x3) {
      return _ref9.apply(this, arguments);
    };
  }();

  var requestPasswordReset = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(opts) {
      var result;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return client.mutate({
                mutation: REQUEST_PASSWORD_RESET,
                variables: _extends({}, opts, {
                  channel: channel
                })
              });

            case 2:
              result = _context5.sent;
              return _context5.abrupt("return", result);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function requestPasswordReset(_x4) {
      return _ref10.apply(this, arguments);
    };
  }();

  var setPassword = function setPassword(opts) {
    return client.mutate({
      mutation: SET_PASSWORD,
      variables: _extends({}, opts),
      update: function update(_, _ref11) {
        var _data$setPassword;

        var data = _ref11.data;

        if (data != null && (_data$setPassword = data.setPassword) != null && _data$setPassword.token) {
          storage.setTokens({
            accessToken: data.setPassword.token,
            csrfToken: data.setPassword.csrfToken || null
          });
        }
      }
    });
  };

  var getExternalAuthUrl = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(opts) {
      var result;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return client.mutate({
                mutation: EXTERNAL_AUTHENTICATION_URL,
                variables: _extends({}, opts)
              });

            case 2:
              result = _context6.sent;
              return _context6.abrupt("return", result);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function getExternalAuthUrl(_x5) {
      return _ref12.apply(this, arguments);
    };
  }();

  var getExternalAccessToken = function getExternalAccessToken(opts) {
    client.writeQuery({
      query: USER,
      data: {
        authenticating: true
      }
    });
    return client.mutate({
      mutation: OBTAIN_EXTERNAL_ACCESS_TOKEN,
      variables: _extends({}, opts),
      update: function update(_, _ref13) {
        var _data$externalObtainA;

        var data = _ref13.data;

        if (data != null && (_data$externalObtainA = data.externalObtainAccessTokens) != null && _data$externalObtainA.token) {
          storage.setAuthPluginId(opts.pluginId);
          storage.setTokens({
            accessToken: data.externalObtainAccessTokens.token,
            csrfToken: data.externalObtainAccessTokens.csrfToken || null
          });
        } else {
          client.writeQuery({
            query: USER,
            data: {
              authenticating: false
            }
          });
        }
      }
    });
  };

  var refreshExternalToken = function refreshExternalToken(includeUser) {
    if (includeUser === void 0) {
      includeUser = false;
    }

    var csrfToken = storage.getCSRFToken();
    var authPluginId = storage.getAuthPluginId();

    if (!csrfToken) {
      throw Error("csrfToken not present");
    }

    if (includeUser) {
      return client.mutate({
        mutation: EXTERNAL_REFRESH_WITH_USER,
        variables: {
          pluginId: authPluginId,
          input: JSON.stringify({
            csrfToken: csrfToken
          })
        },
        update: function update(_, _ref14) {
          var _data$externalRefresh;

          var data = _ref14.data;

          if (data != null && (_data$externalRefresh = data.externalRefresh) != null && _data$externalRefresh.token) {
            storage.setTokens({
              accessToken: data.externalRefresh.token,
              csrfToken: data.externalRefresh.csrfToken || null
            });
          } else {
            logout();
          }
        }
      });
    }

    return client.mutate({
      mutation: EXTERNAL_REFRESH,
      variables: {
        pluginId: authPluginId,
        input: JSON.stringify({
          csrfToken: csrfToken
        })
      },
      update: function update(_, _ref15) {
        var _data$externalRefresh2;

        var data = _ref15.data;

        if (data != null && (_data$externalRefresh2 = data.externalRefresh) != null && _data$externalRefresh2.token) {
          storage.setTokens({
            accessToken: data.externalRefresh.token,
            csrfToken: data.externalRefresh.csrfToken || null
          });
        } else {
          logout();
        }
      }
    });
  };

  var verifyExternalToken = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7() {
      var _result$data2, _result$data2$externa;

      var csrfToken, authPluginId, result;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              csrfToken = storage.getCSRFToken();
              authPluginId = storage.getAuthPluginId();

              if (csrfToken) {
                _context7.next = 4;
                break;
              }

              throw Error("csrfToken not present");

            case 4:
              _context7.next = 6;
              return client.mutate({
                mutation: EXTERNAL_VERIFY_TOKEN,
                variables: {
                  pluginId: authPluginId,
                  input: JSON.stringify({
                    csrfToken: csrfToken
                  })
                }
              });

            case 6:
              result = _context7.sent;

              if (!((_result$data2 = result.data) != null && (_result$data2$externa = _result$data2.externalVerify) != null && _result$data2$externa.isValid)) {
                storage.clear();
              }

              return _context7.abrupt("return", result);

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function verifyExternalToken() {
      return _ref16.apply(this, arguments);
    };
  }();

  return {
    changePassword: changePassword,
    getExternalAccessToken: getExternalAccessToken,
    getExternalAuthUrl: getExternalAuthUrl,
    login: login,
    logout: logout,
    refreshExternalToken: refreshExternalToken,
    refreshToken: refreshToken,
    register: register,
    requestPasswordReset: requestPasswordReset,
    setPassword: setPassword,
    verifyExternalToken: verifyExternalToken,
    verifyToken: verifyToken
  };
};

var user = function user(_ref) {
  var client = _ref.apolloClient,
      channel = _ref.channel;

  var _auth = auth({
    apolloClient: client,
    channel: channel
  });

  var accountDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(token) {
      var result;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.mutate({
                mutation: DELETE_ACCOUNT,
                variables: {
                  token: token
                }
              });

            case 2:
              result = _context.sent;

              _auth.logout();

              return _context.abrupt("return", result);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function accountDelete(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var accountRequestDeletion = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(redirectUrl) {
      var result;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.mutate({
                mutation: REQUEST_DELETE_ACCOUNT,
                variables: {
                  channel: channel,
                  redirectUrl: redirectUrl
                }
              });

            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function accountRequestDeletion(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var confirmEmailChange = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(token) {
      var result;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.mutate({
                mutation: CONFIRM_EMAIL_CHANGE,
                variables: {
                  channel: channel,
                  token: token
                }
              });

            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", result);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function confirmEmailChange(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var requestEmailChange = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(opts) {
      var result;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return client.mutate({
                mutation: REQUEST_EMAIL_CHANGE,
                variables: _extends({}, opts, {
                  channel: opts.channel || channel
                })
              });

            case 2:
              result = _context4.sent;
              return _context4.abrupt("return", result);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function requestEmailChange(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  var updateAccount = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(opts) {
      var result;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return client.mutate({
                mutation: UPDATE_ACCOUNT,
                variables: _extends({}, opts)
              });

            case 2:
              result = _context5.sent;
              return _context5.abrupt("return", result);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function updateAccount(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  var setAccountDefaultAddress = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(opts) {
      var result;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return client.mutate({
                mutation: SET_ACCOUNT_DEFAULT_ADDRESS,
                variables: _extends({}, opts)
              });

            case 2:
              result = _context6.sent;
              return _context6.abrupt("return", result);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function setAccountDefaultAddress(_x6) {
      return _ref7.apply(this, arguments);
    };
  }();

  var createAccountAddress = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(opts) {
      var result;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return client.mutate({
                mutation: CREATE_ACCOUNT_ADDRESS,
                variables: _extends({}, opts)
              });

            case 2:
              result = _context7.sent;
              return _context7.abrupt("return", result);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function createAccountAddress(_x7) {
      return _ref8.apply(this, arguments);
    };
  }();

  var deleteAccountAddress = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(addressId) {
      var result;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return client.mutate({
                mutation: DELETE_ACCOUNT_ADDRESS,
                variables: {
                  addressId: addressId
                }
              });

            case 2:
              result = _context8.sent;
              return _context8.abrupt("return", result);

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function deleteAccountAddress(_x8) {
      return _ref9.apply(this, arguments);
    };
  }();

  var updateAccountAddress = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(opts) {
      var result;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return client.mutate({
                mutation: UPDATE_ACCOUNT_ADDRESS,
                variables: _extends({}, opts)
              });

            case 2:
              result = _context9.sent;
              return _context9.abrupt("return", result);

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function updateAccountAddress(_x9) {
      return _ref10.apply(this, arguments);
    };
  }();

  var confirmAccount = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(opts) {
      var result;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return client.mutate({
                mutation: CONFIRM_ACCOUNT,
                variables: _extends({}, opts)
              });

            case 2:
              result = _context10.sent;
              return _context10.abrupt("return", result);

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function confirmAccount(_x10) {
      return _ref11.apply(this, arguments);
    };
  }();

  return {
    accountDelete: accountDelete,
    accountRequestDeletion: accountRequestDeletion,
    confirmEmailChange: confirmEmailChange,
    createAccountAddress: createAccountAddress,
    deleteAccountAddress: deleteAccountAddress,
    requestEmailChange: requestEmailChange,
    updateAccount: updateAccount,
    updateAccountAddress: updateAccountAddress,
    setAccountDefaultAddress: setAccountDefaultAddress,
    confirmAccount: confirmAccount
  };
};

var getState = function getState(client) {
  return client.readQuery({
    query: USER
  });
};

var client;
var authClient;
var refreshPromise = null;

var isTokenRefreshExternal = function isTokenRefreshExternal(result) {
  return "externalRefresh" in result;
};

var createFetch = function createFetch(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$autoTokenRefresh = _ref.autoTokenRefresh,
      autoTokenRefresh = _ref$autoTokenRefresh === void 0 ? true : _ref$autoTokenRefresh,
      _ref$tokenRefreshTime = _ref.tokenRefreshTimeSkew,
      tokenRefreshTimeSkew = _ref$tokenRefreshTime === void 0 ? 120 : _ref$tokenRefreshTime,
      _ref$refreshOnUnautho = _ref.refreshOnUnauthorized,
      refreshOnUnauthorized = _ref$refreshOnUnautho === void 0 ? true : _ref$refreshOnUnautho;

  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(input, init) {
      var token, authPluginId, expirationTime, _data$errors, response, data, isUnauthenticated, refreshTokenResponse, _refreshTokenResponse, _refreshTokenResponse2, _refreshTokenResponse3;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (init === void 0) {
                init = {};
              }

              if (client) {
                _context.next = 3;
                break;
              }

              throw new Error("Could not find Saleor's client instance. Did you forget to call createSaleorClient()?");

            case 3:
              token = storage.getAccessToken();
              authPluginId = storage.getAuthPluginId();
              _context.prev = 5;

              if (!["refreshToken", "externalRefresh"].includes( // INFO: Non-null assertion is enabled because the block is wrapped inside try/catch
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              JSON.parse(init.body.toString()).operationName)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", fetch(input, init));

            case 8:
              _context.next = 12;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](5);

            case 12:
              if (!(autoTokenRefresh && token)) {
                _context.next = 32;
                break;
              }

              // auto refresh token before provided time skew (in seconds) until it expires
              expirationTime = (jwtDecode(token).exp - tokenRefreshTimeSkew) * 1000;
              _context.prev = 14;

              if (!refreshPromise) {
                _context.next = 20;
                break;
              }

              _context.next = 18;
              return refreshPromise;

            case 18:
              _context.next = 24;
              break;

            case 20:
              if (!(Date.now() >= expirationTime)) {
                _context.next = 24;
                break;
              }

              // refreshToken automatically updates token in storage
              refreshPromise = authPluginId ? authClient.refreshExternalToken() : authClient.refreshToken();
              _context.next = 24;
              return refreshPromise;

            case 24:
              _context.next = 28;
              break;

            case 26:
              _context.prev = 26;
              _context.t1 = _context["catch"](14);

            case 28:
              _context.prev = 28;
              refreshPromise = null;
              return _context.finish(28);

            case 31:
              token = storage.getAccessToken();

            case 32:
              if (token) {
                init.headers = _extends({}, init.headers, {
                  "authorization-bearer": token
                });
              }

              if (!(refreshOnUnauthorized && token)) {
                _context.next = 67;
                break;
              }

              _context.next = 36;
              return fetch(input, init);

            case 36:
              response = _context.sent;
              _context.next = 39;
              return response.clone().json();

            case 39:
              data = _context.sent;
              isUnauthenticated = data == null ? void 0 : (_data$errors = data.errors) == null ? void 0 : _data$errors.some(function (error) {
                var _error$extensions;

                return ((_error$extensions = error.extensions) == null ? void 0 : _error$extensions.exception.code) === "ExpiredSignatureError";
              });
              refreshTokenResponse = null;

              if (!isUnauthenticated) {
                _context.next = 66;
                break;
              }

              _context.prev = 43;

              if (!refreshPromise) {
                _context.next = 50;
                break;
              }

              _context.next = 47;
              return refreshPromise;

            case 47:
              refreshTokenResponse = _context.sent;
              _context.next = 54;
              break;

            case 50:
              refreshPromise = authPluginId ? authClient.refreshExternalToken() : authClient.refreshToken();
              _context.next = 53;
              return refreshPromise;

            case 53:
              refreshTokenResponse = _context.sent;

            case 54:
              if (!(refreshTokenResponse.data && isTokenRefreshExternal(refreshTokenResponse.data) ? (_refreshTokenResponse = refreshTokenResponse.data.externalRefresh) == null ? void 0 : _refreshTokenResponse.token : (_refreshTokenResponse2 = refreshTokenResponse.data) == null ? void 0 : (_refreshTokenResponse3 = _refreshTokenResponse2.tokenRefresh) == null ? void 0 : _refreshTokenResponse3.token)) {
                _context.next = 58;
                break;
              }

              return _context.abrupt("return", createFetch({
                autoTokenRefresh: false,
                refreshOnUnauthorized: false
              })(input, init));

            case 58:
              // after Saleor returns ExpiredSignatureError status and token refresh fails
              // we log out the user and return the failed response
              authClient.logout();

            case 59:
              _context.next = 63;
              break;

            case 61:
              _context.prev = 61;
              _context.t2 = _context["catch"](43);

            case 63:
              _context.prev = 63;
              refreshPromise = null;
              return _context.finish(63);

            case 66:
              return _context.abrupt("return", response);

            case 67:
              return _context.abrupt("return", fetch(input, init));

            case 68:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 10], [14, 26, 28, 31], [43, 61, 63, 66]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var getTypePolicies = function getTypePolicies(autologin) {
  return {
    Query: {
      fields: {
        authenticated: {
          read: function read(_, _ref3) {
            var readField = _ref3.readField,
                toReference = _ref3.toReference;
            return !!readField("id", toReference({
              __typename: "User"
            }));
          }
        },
        me: {
          read: function read(_, _ref4) {
            var toReference = _ref4.toReference,
                canRead = _ref4.canRead;
            var ref = toReference({
              __typename: "User"
            });
            return canRead(ref) ? ref : null;
          }
        },
        authenticating: {
          read: function read(_read, _ref5) {
            if (_read === void 0) {
              _read = autologin && !!storage.getCSRFToken();
            }

            var readField = _ref5.readField;

            if (readField("authenticated")) {
              return false;
            }

            return _read;
          }
        }
      }
    },
    User: {
      /**
       * IMPORTANT
       * This works as long as we have 1 User cache object which is the current logged in User.
       * If the client should ever fetch additional Users, this should be removed
       * and the login methods (token create or verify) should be responsible for writing USER query cache manually.
       */
      keyFields: [],
      fields: {
        addresses: {
          merge: false
        }
      }
    }
  };
};

var createApolloClient = function createApolloClient(apiUrl, autologin, fetchOptions) {
  var httpLink = createHttpLink({
    fetch: createFetch(fetchOptions),
    uri: apiUrl,
    credentials: "include"
  });
  var cache = new InMemoryCache({
    typePolicies: getTypePolicies(autologin)
  });
  client = new ApolloClient({
    cache: cache,
    link: httpLink
  });
  /**
   * Refreshing token code should stay under core/auth.ts To get this method available,
   * we need to call "auth()" here. refreshToken mutation doesn't require channel, so it
   * doesn't have to be populated with value.
   */

  authClient = auth({
    apolloClient: client,
    channel: ""
  });
  return client;
};

var createSaleorClient = function createSaleorClient(_ref) {
  var apiUrl = _ref.apiUrl,
      channel = _ref.channel,
      _ref$opts = _ref.opts,
      opts = _ref$opts === void 0 ? {} : _ref$opts;
  var _channel = channel;
  var _opts$autologin = opts.autologin,
      autologin = _opts$autologin === void 0 ? true : _opts$autologin,
      fetchOpts = opts.fetchOpts;

  var setChannel = function setChannel(channel) {
    _channel = channel;
    return _channel;
  };

  createStorage(autologin);
  var apolloClient = createApolloClient(apiUrl, autologin, fetchOpts);
  var coreInternals = {
    apolloClient: apolloClient,
    channel: _channel
  };
  var authSDK = auth(coreInternals);
  var userSDK = user(coreInternals);

  if (autologin) {
    var csrfToken = storage.getCSRFToken();
    var authPluginId = storage.getAuthPluginId();

    if (csrfToken && authPluginId) {
      authSDK.refreshExternalToken(true);
    } else if (csrfToken) {
      authSDK.refreshToken(true);
    }
  }

  var client = {
    auth: authSDK,
    user: userSDK,
    config: {
      channel: _channel,
      setChannel: setChannel,
      autologin: autologin
    },
    _internal: {
      apolloClient: apolloClient
    },
    getState: function getState$1() {
      return getState(apolloClient);
    }
  };

  if (DEVELOPMENT_MODE && WINDOW_EXISTS) {
    window.__SALEOR_CLIENT__ = client;
  }

  return client;
};

var SaleorContext = /*#__PURE__*/React.createContext(null);
var SaleorProvider = function SaleorProvider(_ref) {
  var client = _ref.client,
      children = _ref.children;

  var _React$useState = React.useState(client),
      context = _React$useState[0],
      setContext = _React$useState[1];

  React.useEffect(function () {
    setContext(client);
  }, [client]);

  if (context) {
    return React.createElement(SaleorContext.Provider, {
      value: context
    }, children);
  }

  return null;
};

var CreateSaleorHook = function CreateSaleorHook(key) {
  var saleorClient = useContext(SaleorContext);

  if (!saleorClient) {
    throw new Error("Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?");
  }

  var getHookData = function getHookData() {
    return saleorClient[key];
  };

  return getHookData();
};

var hookFactory = function hookFactory(query) {
  return function () {
    return CreateSaleorHook(query);
  };
};

var CreateSaleorStateHook = function CreateSaleorStateHook(query) {
  var saleorClient = useContext(SaleorContext);

  if (!saleorClient) {
    throw new Error("Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?");
  }

  return useQuery(query, {
    client: saleorClient._internal.apolloClient,
    fetchPolicy: "cache-only"
  });
};

var hookStateFactory = function hookStateFactory(query) {
  return CreateSaleorStateHook(query);
};

/**
 * React hook to get authorization methods
 *
 * @returns Saleor's authorization methods
 */

var useAuth = /*#__PURE__*/hookFactory("auth");
/**
 * React hook to get user's authentication data.
 *
 * @returns Object with user's data
 */

var useAuthState = function useAuthState() {
  var _hookStateFactory = hookStateFactory(USER),
      data = _hookStateFactory.data;

  if (!data) {
    throw new Error("Cache query result is undefined. Invalid cache configuration.");
  }

  return data;
};

/**
 * React hook to get user's account methods
 *
 * @returns Saleor's user's account methods
 */

var useUser = /*#__PURE__*/hookFactory("user");

/**
 * React hook to get client's config methods
 *
 * @returns Saleor's client's config methods
 */

var useSaleorConfig = /*#__PURE__*/hookFactory("config");

export { SaleorContext, SaleorProvider, createApolloClient, createFetch, createSaleorClient, useAuth, useAuthState, useSaleorConfig, useUser };
//# sourceMappingURL=sdk.esm.js.map
