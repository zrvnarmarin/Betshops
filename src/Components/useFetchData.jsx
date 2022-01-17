import { useState, useEffect } from 'react'

const useFetchData = (url) => {

    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    const getJsonData = async (url) => {

        const response = await fetch(url);
        if (response.status !== 200){
            setError(true);
            throw new Error("Cannot fetch data!")
        }
        
        const responseData = response.json()
        return responseData
    }

    useEffect(() => {
        getJsonData(url).then(promise => {
            setData(promise)
            setIsPending(false)
        })
    }, [url])

    return {data, isPending, error}
}

export default useFetchData