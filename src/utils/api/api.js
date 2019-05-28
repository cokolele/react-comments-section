import { apiBaseURI } from "/config.js";

const get = (resource = "/") => fetch(apiBaseURI + resource, {
    headers: {
        "Accept": "application/json"
    }
})

const delete_ = (resource = "/") => fetch(apiBaseURI + resource, {
    method: "DELETE"
})

const post = (resource = "/", body = {}) => fetch(apiBaseURI + resource, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
})

const put = (resource = "/", body = {}) => fetch(apiBaseURI + resource, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
})

const patch = (resource = "/", body = {}) => fetch(apiBaseURI + resource, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
})

export default {
    get,
    delete: delete_, //keyword...
    post,
    put,
    patch
};

const parseLinkHeader = (header) => {
    let links = {};
    const entries = header.split(", ").join("; ").split("; ");

    for(let i = 0, j = 1; j <= entries.length; i = i+2, j = j+2) {
        links[entries[j].slice(5, -1)] = entries[i].slice(1,-1);
    }

    return links;
}

export { parseLinkHeader };