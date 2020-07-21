// OBJECT CREATION PATTERNS

// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:

Object.prototype.ancestors = function() {
  let names = [];
  let obj = this;
  while (!!Object.getPrototypeOf(obj).name) {
    names.push(Object.getPrototypeOf(obj).name);
    obj = Object.getPrototypeOf(obj);
  }
  
  names.push('Object.prototype');

  return names;
}

// LS SOLUTION USING RECURSION
Object.prototype.ancestors = function ancestors() {
  const ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};


// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';


console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']