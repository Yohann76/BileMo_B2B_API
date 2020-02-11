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
    return fetch('api/phones.json', {
        credentials: 'same-origin' // for session
    })
        .then(response => {
             return response.json();
        });
}

export function getSinglePhone(id) {
    return fetch('api/phones/'+id+'.json', {
        credentials: 'same-origin' // for session
    })
        .then(response => {
            return response.json();
        });
}

/*
export function getSinglePhone(id) {
    return fetchJson('api/phones/${id}', {
        method: 'GET'
    });
}

 */



export function getCustomer() {
    return fetch('api/customers.json', {
        credentials: 'same-origin' // for session
    })
        .then(response => {
            return response.json();
        });
}

//////////////////
//////////////////

/*
// for exemple refactor
export function getSinglePhone() {
    return fetchJson('/oc/BileMo_B2B_API/public/api/phones/231.json')
        .then(data => data.items);
}
*/




