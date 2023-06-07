import { useEffect, useState } from "react"

 const useLoadData = () =>{
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=> res.json())
        .then(data=> {
            setMovies(data)
        })
        setLoading(false)
    },[])
    return [movies,loading];
}

export default useLoadData;