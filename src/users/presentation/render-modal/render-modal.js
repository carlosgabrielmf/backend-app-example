import modalHtml from "./render-modal.html?raw";
import { getUserById } from "../../use-cases/get-user-by-id";
import {User} from "../../models/user"
import "./render-modal.css"

let modal, form, loadedUSer = {};
/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} 
 */
export const renderModal = ( element, callback ) => {

    if (modal) return;
    modal = document.createElement('div');
    modal.innerHTML = modalHtml; // hacemos referencia al HMTL entero de nuesto componente
    modal.className = "modal-container hide-modal";
    form = modal.querySelector('form'); // lo igualamos a modal porque es quien tiene el HMTL entero donde se encuentra nuestro formulario

    modal.addEventListener('click', (event) => {
        if (event.target.className === "modal-container") {
            hideModal();
        };
    });

    form.addEventListener('submit', async(event) => {
        event.preventDefault(); // con este evento prevenimos que el formulario se muestre en una url
        const formData = new FormData( form ); // Devuelve una instancia HTML de tipo formulario en modo de objeto con pares de valores
        const userLike = {...loadedUSer}; // declaramos un objeto vacio en representacion para poder manipular mi data

        for (const [key, value] of formData) {
            if ( key === 'balance'){ // comprobamos si la key es estrictamente igual a balance dentro de mi data
                userLike[key] = +value; //  esta es la accion que realiza mi comprobacion: cambiar el value de la key a Number Type
                continue; // no return porque me saca de la function, este continua la siguiente iteracion
            }

            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true: false;
                continue; 
            }

            userLike[key] = value; // esta variable maneja la muestra de la insercion del nuevo objeto en mi BBDD
            
            console.log(userLike);
            
        }

        hideModal();
        
        // Guardar usuario
        await callback(userLike)
    });

    element.append( modal );

}



/**
 * @param {String|Number} id
 */
export const showModal = async(id) => {
    modal?.classList.remove('hide-modal') // estos metodos no funcionan con className
    loadedUSer = {};

    if (!id) {
        return;
    }
    const user = await getUserById(id);
    setFormsValues(user)


}

export const hideModal = () => {
    modal?.classList.add('hide-modal') // con estos metodos podemos quitar y colocar las clases
    form?.reset(); // el metodo resetea el formulario al cerrarlo
}

/**
 * @param {User} user
 */
const setFormsValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;

    loadedUSer = user;

}

