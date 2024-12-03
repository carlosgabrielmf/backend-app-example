import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-buttons.css'


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButton = (element) => {

    const nextButton = document.createElement("button"); // Boton de siguiente pagina
    nextButton.innerText = "Next >";

    const prevButton = document.createElement("button");// Boton de previa pagina
    prevButton.innerText = "< Prev";

    const currentPageLabel = document.createElement("span"); // Pagina actual
    currentPageLabel.id = "current-page";
    currentPageLabel.innerHTML = usersStore.getCurrentPage(); // Igualamos el valor a nuestro state

    element.append( prevButton, currentPageLabel, nextButton );

    // Eventos y funcionalidad de los botones

        nextButton.addEventListener('click', async() => {
            await usersStore.loadNextPage();
            currentPageLabel.innerHTML = usersStore.getCurrentPage();
            renderTable( element );

        })

        prevButton.addEventListener('click', async() => {
            await usersStore.loadPrevPage();
            currentPageLabel.innerHTML = usersStore.getCurrentPage();
            renderTable( element );

        })
}