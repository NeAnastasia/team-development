export default function getTokenFromLocalStorage()
{
    const data = localStorage.getItem('token');
    const token = data ? JSON.parse(data) : ""

    return token;
}

export default function setTokenToLocalStorage(key, token)
{
    localStorage.setItem(key, JSON.stringify(token));
}

export default function removeTokenFromLocalStorage(key)
{
    localStorage.removeItem(key);
}
