function formatName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

interface User {
  firstName: string;
  lastName: string;
}

let someUser: User = {
  firstName: "Miriam",
  lastName: "Janssen",
};

someUser = {
  firstName: "asdijdas",
  lastName: "adnsiodjioas",
};

export const element = <h1>👋, {formatName(someUser)}!</h1>;

// class UserClass implements User{
//   constructor(public firstName: string, public lastName: string) {
//   }
// }
