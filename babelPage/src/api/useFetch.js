import { useEffect, useState } from "react";


export function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) =>{
                if(!response.ok){
                    throw new Error ("Error al cargar JSON")
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error)=> console.log("Error al cargar", error))
    }, [url]);
    return { data };
}
