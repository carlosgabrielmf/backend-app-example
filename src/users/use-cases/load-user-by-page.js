import { localhostUserToModel } from "../mappers/localhost-user-mapper";
import {User} from "../models/user"

/**
 * @param {Number} page
 * @returns {Promise<User[]>}
 */

export const loadUserByPage = async( numPage = 1 ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${numPage}`;

    const res = await fetch (url);
    const data = await res.json();

    console.log(data);
    

    const users = data.map(localhostUserToModel);

    return users;
}   