import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useLoadData from '../../component/useLoadData';
import { InfinitySpin } from 'react-loader-spinner';
import moment from 'moment';
import useTitle from '../../component/useTitle';


const Details = () => {
    const {id} = useParams()  
    const [movies,loading] = useLoadData()
    const found = movies.find(movie=> movie.show.id == id)
    const {show} = found || {}
    const summary = <span dangerouslySetInnerHTML={{__html: `${show?.summary}`}}></span>
    useTitle(` ${show?.name}`)

    if(loading){
        return <>
        <InfinitySpin
      width='200'
      color="#4fa94d"
    /> </>
    }
    const customeStatus = ()=>{
        if(show?.status === 'Running'){
            return <kbd className="kbd text-xs bg-green-500">{show.status}</kbd>
        }
        if(show?.status === 'Ended'){
            return <kbd className="kbd text-xs bg-red-500">{show.status}</kbd>
        }
    }
    console.log(show)
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage:` url(${show?.image?.original})`, backgroundSize: 'cover'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero text-center text-neutral-content">
                <div className="max-w-2xl">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">{show?.name} {customeStatus()}</h1>
                <p className='mt-5 mb-5'><span>{moment(show?.premiered).format("MMMM D, YYYY")}</span>
                <span>
                    {
                       show?.network?.country?.name && <>{' | '+show?.network?.country?.name }</>  
                    }
                </span>
                <span>
                    {
                        show?.runtime && <>{' | '+show?.runtime + ' Min.'}</>
                    }
                </span>
                </p>
                <p className=' text-lg'>Language: {show?.language}</p>
                <p className='pt-4 pb-4'>
                    {
                        show?.genres.map((genre,index)=>{
                            return <span className='badge bg-transparent text-white badge-lg mr-1' key={index}>{genre}</span>
                        })
                    }
                </p>
                <p className="mb-5">{summary? summary:''}</p>
                <p className='pt-2'>{ show?.schedule.days && 
                    show?.schedule.days.map((day,index)=>{
                        return <span key={index}> {'Available On : '}  {day}</span>
                    })
                    }
                    {
                        <span className='ml-2'>{show?.schedule.time}</span>
                    }
                </p>
                <Link to={`/book/${id}`}><button className='btn btn-outline text-white mt-4'>Book Now</button> </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Details;