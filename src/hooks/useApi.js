import { useState, useEffect } from "react"

export const useApi = (url) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const controller = new AbortController();  //controller for aborting previous 

    useEffect(() =>{
        setLoading(true);
        setError(null);
        setData(null);
        fetch(url,{signal:controller.signal})
        .then(resp => {
            // console.log(resp);
            if(!resp.ok){
               return setError(resp.statusText)
            }
            return resp.json()

        })
        .then(jsonData => setData(jsonData))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false));

        return() =>{
            controller.abort();
        }
    },[url]);

    return {data, loading,error};
}