import { renderAddButton } from "./presentation/render-add-button/render-add-button.js";
import { renderButton } from "./presentation/render-buttons/render-buttons.js";
import { renderModal } from "./presentation/render-modal/render-modal.js";
import { renderTable } from "./presentation/render-table/render-table.js";
import usersStore from "./store/users-store"
/**
 * @param {HTMLDivElement} element
 */
export const UsersApp = async(element) => {

    element.innerHTML = "loading...";
    await usersStore.loadNextPage();
    
     element.innerHTML = "";
    renderTable( element );
    renderButton( element );
    renderAddButton( element );
    renderModal( element );
    

}