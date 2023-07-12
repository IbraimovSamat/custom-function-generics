// ------------------------------------------------------------reduce

// interface Person {
//   name: string;
//   age: number;
// }

// const users: Person[] = [
//   { name: "Qvic", age: 25 },
//   { name: "John", age: 17 },
//   { name: "Matue", age: 18 },
// ];

// type GroupedUsersType = {
//   names: string[];
//   totalAge: number;
// };

// function reduce<T, U>(users: T[], cb: (result: U, person: T) => U, initVal: U) {
//   let result: U = initVal;

//   for (let i = 0; i < users.length; i++) {
//     result = cb(result, users[i]);
//   }
//   return result;
// }

// const accumulator: { names: string[]; totalAge: number } = {
//   names: [],
//   totalAge: 0,
// };

// const groupedUsers = reduce(
//   users,
//   (result, person) => {
//     result.names.push(person.name);
//     result.totalAge += person.age;
//     return result;
//   },
//   accumulator
// );

// console.log(groupedUsers);

// -------------------------------------------------------------find

// interface Person {
//   name: string;
//   age: number;
// }

// const users: Person[] = [
//   { name: "Ara", age: 23 },
//   { name: "John", age: 17 },
//   { name: "Matue", age: 18 },
// ];

// function find<T>(users: T[], cb: (user: T) => boolean): T | undefined {
//   let result: T | undefined;

//   for (let i = 0; i < users.length; i++) {
//     if (cb(users[i])) {
//       result = users[i];
//       break;
//     }
//   }
//   return result;
// }

// const foundAdultUser = find(users, (user) => user.age >= 18);

// console.log(foundAdultUser);

// --------------------------------------------------------------------- map
// interface Person {
//   name: string;
//   age: number;
// }

// const users: Person[] = [
//   { name: "Ara", age: 25 },
//   { name: "John", age: 17 },
//   { name: "Matue", age: 18 },
// ];

// function map<T, U>(users: T[], cb: (item: T) => U): U[] {
//   return users.map(cb);
// }

// const usersWithCanView = map(users, (user) => ({
//   ...user,
//   isCanView: user.age >= 18 ? true : false,
// }));
// console.log(usersWithCanView);

// --------------------------------------------------------------------- map
// interface Person {
//   name: string;
//   age: number;
// }

// const users: Person[] = [
//   { name: "samat", age: 25 },
//   { name: "John", age: 17 },
//   { name: "Matue", age: 18 }
// ];

// function map<T, U>(users: T[], cb: (item: T) => U): U[] {
//   let result: U[] = [];

//   for(let user of users) {
//     result.push(cb(user));
//   }

//   return result;
// }

// const usersWithCanView = map(users, (user) => ({
//   ...user,
//   isCanView: user.age >= 18 ? true : false
// }));
// console.log(usersWithCanView);

// ---------------------------------------------------------------------Reduce
// interface Person {
//   name: string;
//   age: number;
// }

// const users: Person[] = [
//   { name: "samat", age: 25 },
//   { name: "John", age: 17 },
//   { name: "Matue", age: 18 },
// ];

// function reduce<T, U>(users: T[], cb: (accum: U, user: T) => U, initVal: U): U {
//   let result: U = initVal;
//   for (let user of users) {
//     result = cb(initVal, user);
//   }

//   return result;
// }

// let initVal: { names: string[]; ages: number[] } = { names: [], ages: [] };

// const groupedUsers: { names: string[]; ages: number[] } = reduce(
//   users,
//   (accum, user) => {
//     accum.names.push(user.name);
//     accum.ages.push(user.age);
//     return accum;
//   },
//   initVal
// );

// console.log(groupedUsers);

// ---------------------------------------------------------------------concate

// function concat<T>(...arrays: T[][]): T[] {
//   let result: T[] = [];

//   for (let i = 0; i < arrays.length; i++) {
//     const currentArray: T[] = arrays[i];

//     for (let j = 0; j < currentArray.length; j++) {
//       result.push(currentArray[j]);
//     }
//   }

//   return result;
// }

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// let result = concat(array1, array2, array3);
// console.log(result);

// -------------------------------------------------------------------- split
// function split<T extends string>(str: T, separator: T): T[] {
//   let result: T[] = [];
//   let startIndex: number = 0;
//   let endIndex: number;

//   for (let i = 0; i < str.length; i++) {
//     if (str.substr(i, separator.length) === separator) {
//       endIndex = i;
//       result.push(str.substring(startIndex, endIndex) as T);
//       startIndex = endIndex + separator.length;
//       i = startIndex - 1;
//     }
//   }

//   result.push(str.substring(startIndex) as T);

//   return result;
// }

// const str = "jack;john";
// const result = split(str, ";");
// console.log(result);
