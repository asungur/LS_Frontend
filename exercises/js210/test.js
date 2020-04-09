var foo = function () {
  console.log(bar());
  return function bar() {};
};

foo ();