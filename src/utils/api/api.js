import { apiBase } from "/config.js";

const get = (url) => {
    return fetch(apiBase + url, {
        headers: {
            "Accept": "application/json"
        }
    })
}

export default {
    get
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