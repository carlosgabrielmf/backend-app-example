import './render-add-button.css'
/**
 * 
 * @param {HTMLDivElement} element 
 * @param {{} => void} callback
 */
export const renderAddButton = ( element, callback ) => {

    const fabButton = document.createElement("button");
    fabButton.innerText = "+";
    fabButton.classList.add("fab-button");

    element.append(fabButton);

    fabButton.addEventListener('click', () => {
        if (!callback) return;

        callback();
        // throw new Error("Not implemented");
        

    })
    
}