import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T>{
    count:number;
    results:T[];
    }

const fetchData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
    const [data,setData] = useState<T[]>([]);

    useEffect(()=>{
        const controller= new AbortController();

        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal,...requestConfig})
        .then((response)=>{setData(response.data.results)})
        .catch((err)=>{
            if (err instanceof CanceledError ) return; 
        })

        return ()=> controller.abort();
    },deps?[...deps]:[])

    return {data};
}

export default fetchData