import { loadUserByPage } from "../use-cases/load-user-by-page"

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async() => {
    await loadUserByPage( state.currentPage + 1)
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

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}
