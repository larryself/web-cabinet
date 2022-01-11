export const toPay = async (data) => {
    const response = await fetch('/api/pay', {method: "POST", body: JSON.stringify(data)});
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response
}