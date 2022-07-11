const API_KEY = '78ff518aa7a04a0fb3363dd89a70dd7e'

export default async function getDataAPI(wordSearch, page) {
    const URL = `https://newsapi.org/v2/everything?q=${wordSearch}&apiKey=${API_KEY}&page=${page}&pageSize=10&language=es`
    const data = await fetch(URL)

    return data.json()
}
