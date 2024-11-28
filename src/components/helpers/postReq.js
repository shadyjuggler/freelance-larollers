export const fetchPost = async (url, uri, data) => {
    
    const responce = await fetch(`https://emailer-theta.vercel.app/${uri}`, {
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