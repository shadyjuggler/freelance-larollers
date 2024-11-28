export const fetchPost = async (url, uri, data) => {
    
    const responce = await fetch(`${url}/${uri}`, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: data
    })

    if (!responce.ok) {
        console.error(responce.error);
    }

    return responce;
}