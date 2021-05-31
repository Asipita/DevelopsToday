import axios from "axios";

const baseUrl = "https://simple-blog-api.crew.red/"

export const fetcher = url => axios.get(`${baseUrl}${url}`).then(res => res.data)


export const poster = (url, data, method) => axios({
    method,
    url: `${baseUrl}${url}`, 
    data,
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => {
    if(res.status >= 200 && res.status < 400){
        return res.data
    }else{
        return ("An error occured")
    }
}).catch(res => {
    return "An issue occured with your internet"
})