/**
 * @param url
 * @param options
 * @returns {Promise<any>}
 */
function fetchJson(url, options) {
    return fetch(url, Object.assign({
        credentials: 'same-origin', // for session
    }, options))
        .then(response => {
            return response.json();
        });
}

//////////////
// Request API
//////////////

export function getPhone() {
    return fetch('/oc/BileMo_B2B_API/public/api/phones.json', {
        credentials: 'same-origin' // for session
    })
        .then(response => {
             return response.json();
        });
}


export function getSinglePhone() {
    return fetch('/oc/BileMo_B2B_API/public/api/phones/231.json', {
        credentials: 'same-origin' // for session
    })
        .then(response => {
            return response.json();
        });
}

export function getCustomer() {
    return fetch('/oc/BileMo_B2B_API/public/api/customers.json', {
        credentials: 'same-origin' // for session
    })
        .then(response => {
            return response.json();
        });
}

//////////////////
//////////////////

/**
 *
 * @param id
 * @returns {Promise<any>}
 */
export function deleteRepPhone(id) {
    return fetchJson('/oc/BileMo_B2B_API/public/api/phones/${id}', {
        method: 'DELETE'
    });
}

/*
// for exemple refactor
export function getSinglePhone() {
    return fetchJson('/oc/BileMo_B2B_API/public/api/phones/231.json')
        .then(data => data.items);
}
*/




