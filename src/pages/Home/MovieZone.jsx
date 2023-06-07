import React, { useState } from 'react';
import { Rating} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import moment from 'moment';
import { Link } from 'react-router-dom';


const MovieZone = ({movie}) => {
    const {show}= movie ||{}
    //console.log(show)
    const summary = <span dangerouslySetInnerHTML={{__html: `${show.summary}`}}></span>
    const customeStatus = ()=>{
        if(show.status === 'Running'){
            return <kbd className="kbd text-xs bg-green-500">{show.status}</kbd>
        }
        if(show.status === 'Ended'){
            return <kbd className="kbd text-xs bg-red-500">{show.status}</kbd>
        }
    }

    return (
        <>
            <div className='hero text-white'>
            <div className='hero-overlay'></div>
            <div className="card lg:card-side border max-w-7xl gap-4 ml-2 mr-2 mt-10 lg:ml-10 lg:mr-10 glass font-serif" >
            <div className=' lg:w-2/6 p-2'><img className='h-80 lg:h-96 w-full rounded-2xl' src={show.image.original}/></div>
            <div className="body lg:w-4/6 pl-2 pt-2 pr-5 relative">
                <h2 className="card-title text-3xl">{show.name}{customeStatus()}</h2>
                <p className='text-sm lg:text-lg'><span>{moment(show.premiered).format("MMMM D, YYYY")}</span>
                <span>
                    {
                       show.network?.country?.name && <>{' | '+show.network?.country?.name }</>  
                    }
                </span>
                <span>
                    {
                        show?.runtime && <>{' | '+show.runtime + ' Min.'}</>
                    }
                </span>
                </p>
                <p className='pt-2 text-lg'>Language: {show.language}</p>
                <p className='pt-2'>
                    {
                        show.genres.map((genre,index)=>{
                            return <span className='badge bg-primary text-white badge-lg mr-1' key={index}>{genre}</span>
                        })
                    }
                </p>
                <p className='pt-2'>{ show.schedule.days && 
                    show.schedule.days.map((day,index)=>{
                        return <span key={index}> {'Available On : '}  {day}</span>
                    })
                    }
                    {
                        <span className='ml-2'>{show.schedule.time}</span>
                    }
                </p>
                <p className='mt-2'>{summary}</p>
                
                <p className='flex mt-2'>
                    {
                        show.rating.average && 
                          <>  Rating: <span className='ml-2'>
                     <Rating
                    items={8}
                    style={{ maxWidth: 180 }}
                    value={show.rating.average}
                    readOnly
                    />
                </span>
                </>
                    }
                    
                </p>
                <div className='mb-4'>
                <Link to={`/details/${show.id}`} ><button className="btn btn-outline text-white " >Show Details</button></Link>
                </div>
            </div>
        </div>

            </div>
            
        </>
    );
};

export default MovieZone;