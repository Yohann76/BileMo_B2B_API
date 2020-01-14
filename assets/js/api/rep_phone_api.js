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


export function getRepPhone() {
    return fetch('/oc/BileMo_B2B_API/public/api/phones', {
        credentials: 'same-origin' // for session
    })
        .then(response => {
             return response.json();
            // return response.json().then((data) => )
            //  return response.json().then((data) => data.items)
        });
}

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
export function getRepPhone() {
    return fetchJson('/oc/BileMo_B2B_API/public/api/phones')
        .then(data => data.items);
}
 */


