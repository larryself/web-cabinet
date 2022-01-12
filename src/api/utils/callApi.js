export const callApi = async ({url, method="GET", body}) => {
    const normalizeBody = body? JSON.stringify(body) : undefined;
    const response = await fetch(url, {method, normalizeBody});
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    if (method !== 'GET') {
        return response;
    }
    const data = await response.json();
    return data
}