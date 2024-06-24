import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T>{
    items:T[];
    }

const fetchData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
    const [data,setData] = useState<T[]>([]);
    const [error,setError] = useState("");

    useEffect(()=>{
        const controller= new AbortController();

        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal,...requestConfig})
        .then((response)=>{setData(response.data.items)})
        .catch((err)=>{
            if (err instanceof CanceledError ) return; 
            setError(err.message);
        })

        return ()=> controller.abort();
    },deps?[...deps]:[])

    return {data,error};
}

export default fetchData