// @flow
const foo = {};

foo.bar().baz;
(0, foo.bar)().baz;
Object(foo.bar)().baz;
