import React, { useEffect, useState } from 'react';
import MovieZone from './MovieZone';
import { InfinitySpin } from 'react-loader-spinner';
import useTitle from '../../component/useTitle';


const Home = () => {
    useTitle('')
    const [movies,setMovies] = useState([])
    const [temp , settemp] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=> res.json())
        .then(data=> {
            setMovies(data)
            settemp(data)
            setLoading(false)
        })
    },[])

const handleSearch = (e)=>{
    const search = e.target.value;
    const found = movies.filter(movie =>  (movie?.show?.name).toLowerCase()  == search.toLowerCase())
    settemp(found)
    if(found.length<1){
        settemp(movies)
    }
}
if(loading){
            return <div className='w-full mt-14 ml-[40%]'>
            <InfinitySpin className='text-center'
                width='200'
                color="#4fa94d"
                />    </div>
}
    return (
        <div className='pb-10 bg-gray-800 bg-opacity-90 mt-14'>
            <div className='text-center pt-10 font-serif'>
            <input onChange={handleSearch} type="text" placeholder="Search by Name" className="input input-bordered w-60 lg:w-full lg:max-w-lg" />
            </div>
            {
                temp?.map((movie,index)=>{
                    return <MovieZone key={index} movie = {movie}/>
                })
            }
        </div>
    );
};

export default Home;