import {API_BASE_URL, FETCH_TIMEOUT} from "./constants";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    // ------------------------------------------------

    return Promise.race([

        fetch(options.url, options) // element1
            .then(response =>
                response.json().then(json => {
                    if(!response.ok) {
                        return Promise.reject(json);
                    }
                    return json;
                })
            ),

        new Promise((_, reject) => // element2
            setTimeout(() => reject(new Error("Timeout")), FETCH_TIMEOUT))
    ]);
};

export function retrieveServerList() {

    return request({
        url: API_BASE_URL + "/servers",
        method: 'GET'
    });
}

export function checkoutOrRelease(serverId) {


    return request({
        url: API_BASE_URL + "/server/" + serverId,
        method: 'PUT',
    });
}