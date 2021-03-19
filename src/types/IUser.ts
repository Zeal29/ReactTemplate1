export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number | string;
  token: string;
  name?: string;
  username?: string;
  email?: string;
}
