import { loadUserByPage } from "../use-cases/load-user-by-page"

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async() => {
    const users = await loadUserByPage( state.currentPage + 1 )
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}


const loadPrevPage = async() => {
    throw new Error("not implemented")
}

const onUserChanged = () => {
    throw new Error("not implemented")
}

const reloadPage = async() => {
    throw new Error("not implemented")
}


export default {
    loadNextPage,
    loadPrevPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage
}
