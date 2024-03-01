export interface User {
  _id: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: Name;
  company: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export interface Name {
  first: string;
  last: string;
}