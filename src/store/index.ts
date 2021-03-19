import { action, createStore, thunk } from "easy-peasy";

import { ILogin, IStoreModel, IUser } from "@/types";

export const store = createStore<IStoreModel>({
	error: null,
	user: null,
	setError: action((state, payload: Error) => {
		state.error = payload;
	}),
	setUser: action((state, payload: IUser) => {
		state.user = payload;
	}),
	login: thunk(async (actions, payload: ILogin) => {
		// Todo: use login service loginUser
	}),
});
