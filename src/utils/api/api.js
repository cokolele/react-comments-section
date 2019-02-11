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