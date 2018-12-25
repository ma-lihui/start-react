import request from '../utils/request';

function queryString(obj) {
    return Object.entries(obj).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join('&');
}
export async function queryRule(params) {
    return request(`/api/rule?${queryString(params)}`);
}

export async function removeRule(params) {
    return request('/api/rule', {
        method: 'POST',
        body: {
            ...params,
            method: 'delete',
        },
    });
}

export async function addRule(params) {
    return request('/api/rule', {
        method: 'POST',
        body: {
            ...params,
            method: 'post',
        },
    });
}

export async function updateRule(params) {
    return request('/api/rule', {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
        },
    });
}