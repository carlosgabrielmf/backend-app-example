import './render-table.css'
import usersStore from '../../store/users-store'
import { showModal } from '../render-modal/render-modal';

let table;

export const createTable = () => {

    const table = document.createElement('table');
    table.innerHTML = `
    
   <thead>
            <tr>
                <th>#ID</th>
                <th>#Balance</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Active</th>
                <th>Actions</th>
            </tr>
    </thead>

    `
    const tableBody = document.createElement('tbody');
    table.append( tableBody );
    return table;
    

}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user')
    console.log(element);

    if (!element) {
        return;
    }

    const id = element.getAttribute('data-id');
    showModal(id);

    
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {
    
    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append( table );


        // TODO: agregar listeners
        table.addEventListener('click', event => tableSelectListener(event))
    }

    let tableHTML = '';

    users.forEach(user => {
        tableHTML += `
        
        <tr> 
        
        <td>${user.id}</td>
        <td>${user.balance}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.isActive}</td>
        <td>
            <a href="#" class="select-user" data-id=${user.id}> Select </a>
            |
            <a href="#" class="delete-user" data-id=${user.id}> Delete </a>
        </td>

        </tr>
        
        `
    })

    table.querySelector('tbody').innerHTML = tableHTML;

}   
