import { Action, Thunk } from 'easy-peasy';
import { IUser, ILogin } from '.';

export interface IStoreModel {
  error: Error | null;
  user: IUser | null;
  setError: Action<IStoreModel, Error>;
  setUser: Action<IStoreModel, IUser>;
  login: Thunk<IStoreModel, ILogin>;
}
