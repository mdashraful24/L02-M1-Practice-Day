// Practice for Primitive and Non-Primitive Types

// JavaScript types: string, number, boolean, undefined, null.

// TypeScript type: any, never, unknown, void

// Implicit => depends on data value

// Explicit => depends on user (user assign on data types)

// JavaScript is dynamically type language. thats why we can change any data, any value javascript don't mind.


let userName: string = "Ashraful Islam Ratul";

userName = "Ratul Man";
userName = 233;

let userId = 123;

userId = 567;
userId = "adfasdfk";

let isAdmin = true;

isAdmin = false;
isAdmin = 123;

let x: any = undefined;
let y: undefined = undefined;
let z: never;
let r: unknown = undefined;

x = 123;
y = 123;
z = 123;
r = 123;
