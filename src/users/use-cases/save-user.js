import {User} from "../models/user"


/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {

    const user = new User( userLike );

    // TODO: falta un mapper

    if (user.id) {
        throw new Error("not implemented");
        return;
        
    }

    const updateUser = await createUntrackedSearchParams( user );
    return updateUser;
}


/**
 * 
 * @param {Like<User>} user 
 */
export const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}?_users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        header: {
            'Content-Type': 'aplicaiton/json'
        }
    });

    const newUser = await res.json();
    console.log({newUser});
    
    return;



}