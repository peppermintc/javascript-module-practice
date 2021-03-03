import User, { printName as printUserName, printAge as printUserAge } from './user.js';

const user = new User('Bob', 11);
console.log(user);
printUserName(user);
printUserAge(user);
