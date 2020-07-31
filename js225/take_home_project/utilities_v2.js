(function() {

  let findObjs = function (element, props, multiple) {
    let match = multiple ? [] : undefined;

    element.some(function(obj) {
      let allMatch = true;

      for (let prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop]) {
          allMatch = false;
        }
      }

      if (allMatch) {
        if (multiple) {
          match.push(obj);
        } else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  };

  let _ = function(element) {
    let u = {
      first() {
        return element[0];
      },
      last () {
        return element[element.length - 1];
      },
      without(...args) {
        let newArr = [];
        
        element.forEach(el => {
          if (args.indexOf(el) === -1) {
            newArr.push(el);
          }
        });

        return newArr;
      },
      lastIndexOf(item) {
        let currentIdx = -1;
        element.forEach((el, i) => {
          if (el === item) {
            currentIdx = i;
          }
        });

        return currentIdx;
      },
      sample(qty) {
        let sampled = [];

        let copy = element.slice();
        let get = function() {
          let i = Math.floor(Math.random() * copy.length);

          let el = copy[i];
          copy.splice(i, 1);
          return el;
        };

        if (!qty) {
          return get();
        }
        while(qty > 0) {
          sampled.push(get());
          qty -= 1;
        }

        return sampled;
      },
      findWhere(props) {
        return findObjs(element, props, false);
      },
      where(props) {
        return findObjs(element, props, true);
      },
      pluck(searchKey) {
        let newArr = [];

        element.forEach(obj => {
          if(obj[searchKey]) {
            newArr.push(obj[searchKey]);
          }
        });
        
        return newArr;
      },
      keys() {
        return Object.keys(element);
      },
      values() {
        return Object.keys(element).map(key => element[key]);
      },
      pick(...args) {
        let newObj = {};

        Object.keys(element).forEach(key => {
          if (args.indexOf(key) !== -1) {
            newObj[key] = element[key];
          }
        });

        return newObj;
      },
      omit(...args) {
        let newObj = {};

        Object.keys(element).forEach(key => {
          if (args.indexOf(key) === -1) {
            newObj[key] = element[key];
          }
        });

        return newObj;
      },
      has(prop) {
        return Object.keys(element).indexOf(prop) !== -1;
      },
    };

    (["isElement", "isArray", "isObject", "isFunction",
      "isBoolean", "isString", "isNumber"]).forEach(method => {
        u[method] = function() {
          _[method].call(u,element);
        }
      });

    return u;
  };

  window._ = _;
})();

_.range = function(...args) {
  let start;
  let end;
  const newArr = []

  if (args.length === 1) {
    start = 0;
    end = args[0]
  } else {
    start = args[0];
    end = args[1];
  }

  while(start < end) {
    newArr.push(start);
    start += 1;
  }
  
  return newArr;
};

_.extend = function(...args) {
  let returnObj = args[0];
  let additions = args.slice(1);

  additions.forEach(obj => {
    Object.keys(obj).forEach(key => returnObj[key] = obj[key]);
  });

  return returnObj;
};

_.isElement = function(obj) {
  return !!obj && obj.nodeType === 1;
};

_.isArray = Array.isArray || function(obj) {
  return toString.call(obj) === "[object Array]";
};

_.isObject = function(obj) {
  let type = typeof obj;

  return type === "function" || type === "object";
};

_.isFunction = function(obj) {
  return typeof obj === "function";
};

_.isBoolean = function(input) {
  return toString.call(input) === "[object Boolean]";
};

_.isString = function(input) {
  return toString.call(input) === "[object String]";
};

_.isNumber = function(input) {
  return  toString.call(input) === "[object Number]";
};
