import axios from 'axios';

const instance = axios.create({
    baseURL:"http://127.0.0.1:8088",
    timeout:5000
})

export function Get(url,params){
    return instance.get(url,{
        params
    })
}

export function Post(url,params){
    return instance.post(url,params,{
        headers:{
            "Content-Type":"application/json"
        }
    },)
}

export function Put(url,params){
    return instance.put(url,params,{
        headers:{
            "Content-Type":"application/json"
        }
    },)
}

export function Delete(url,params){
    return instance.delete(url, {
        params
    },)
}