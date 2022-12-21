import { World } from "./IWorld";

export interface IAuthToken {
    data: {
		_id: string;
		exp: number;
	}
}

export interface IUser {
    username: string;
    worlds: Array<World>
}