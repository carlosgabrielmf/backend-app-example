import { loadUserByPage } from "../use-cases/load-user-by-page"

const state = {
    currentPage: 0,
    users: []
}
    // Logica del boton de siguiente
const loadNextPage = async() => {
    const users = await loadUserByPage( state.currentPage + 1 )
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}

    // logica del boton de previo
const loadPrevPage = async() => {
    const users = await loadUserByPage( state.currentPage - 1 )
    if (state.currentPage === 1) return; // aqui evaluamos la pagina actual en vez del total de usuarios

    state.currentPage -= 1;
    state.users = users;
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
