class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === 'Damon';
  }
}

const users = [new User(1, 'Damon'), new User(2, 'Ella')];

function getUser(id) {
  const user = users.find((user) => user.id === id);

  return user;
}

function printUser(id) {
  const user = getUser(id);
  
  let name = 'Guest';

  if (user != null && user?.name != null) {
    name = user.name;
  }

  console.log('Hello ' + name);

  if (user != null && user?.hasAccess != null && user.hasAccess()) {
    console.log('You have access');
  } else {
    console.log('You are not allowed here');
  }
}

printUser(1); // Hello Damon, You have access
printUser(2); // Hello Ella, You are not allowed here
printUser(3); // Hello Guest, You are not allowed here

//  Now we want to convert the if statements to an null object pattern (Which is better approach !!!!)

class NullUser {
  constructor() {
    this.id = -1;
    this.name = 'Guest';
  }

  hasAccess() {
    return false;
  }
}

function getUserWithNullObjectPattern(id) {
  const user = getUser(id);

  if (user == null) {
    return new NullUser();
  }

  return user;
}

function printUserWithNullObjectPattern(id) {
  const user = getUserWithNullObjectPattern(id);

  console.log('Hello ' + user.name);

  if (user.hasAccess()) {
    console.log('You have access');
  } else {
    console.log('You are not allowed here');
  }
}

printUserWithNullObjectPattern(1); // Hello Damon, You have access
printUserWithNullObjectPattern(2); // Hello Guest, You are not allowed here
printUserWithNullObjectPattern(3); // Hello Guest, You are not allowed here
