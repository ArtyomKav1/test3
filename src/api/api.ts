import axios from 'axios';
const apiKey = "30dcb4412cb54869b9a75142e4500977"
export type getNewsType = {
    articles: Array<itemType>
    status: string
    totalResults: number
}
export type itemType = {
    author: string
    content: string
    description: string
    publishedAt: string
    source: { id: null | number, name: string }
    title: string
    url: string
    urlToImage: string

}

type responseType = {
    config: any
    data: getNewsType
    headers: any
    request: any
    status: number
    statusText: string
}
export const getNews = function (date: string) {
    return axios.get<any, responseType>(`https://newsapi.org/v2/everything?q=apple&from=${date}&to=${date}&pageSize=10&sortBy=popularity&apiKey=${apiKey}`)
}


