

/**
 * @param {Number} page
 * @returns {Promise<User[]>}
 */

import { localhostUserToModel } from "../mappers/localhost-user-mapper";

export const loadUserByPage = async( page = 1 ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_${page}`;

    const res = await fetch (url);
    const data = await res.json();

    const users = data.map(localhostUserToModel);

    return users;
}   