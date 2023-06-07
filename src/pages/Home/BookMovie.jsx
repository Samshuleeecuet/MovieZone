import React, { useEffect, useState } from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import useLoadData from '../../component/useLoadData';
import Swal from 'sweetalert2'
import { addToDb, getStoredCart } from '../../utils/userInfo';
import useTitle from '../../component/useTitle';

const BookMovie = () => {
    const {id} = useParams() 
   
    const [movies,loading] = useLoadData()
    const [movieName,setMovieName] = useState('')
    const [userName,setuserName] = useState('') 
    const [userEmail,setuserEmail] = useState('') 
    const navigate = useNavigate()
    const found = movies.find(movie=> movie.show.id == id)
    const {show} = found || {}
    useTitle(` ${show?.name}`)
    const getData = getStoredCart()
    useEffect(()=>{
        Object.keys(getData).map((item=> {
            const items = JSON.parse(item)
            if(parseInt(items.id) === show?.id){
                setMovieName(items?.name)
                setuserName(items?.userName)
                setuserEmail(items?.userEmail)
            }
        }))
    },[getData])
    const handleBooking = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.movie_name.value;
        const userName = form.user_name.value;
        const userEmail = form.user_email.value;
        const bookInfo = {id,name,userName,userEmail}
        Swal.fire({
            title: 'Are you sure to book this?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Book it!'
          }).then((result) => {
            addToDb(JSON.stringify(bookInfo))
            if (result.isConfirmed) {
            //console.log(name,userName,userEmail)
              Swal.fire(
                'Booked!',
                'Your Movie has been Booked.',
                'success'
              ).then((result)=>{
                if(result.isConfirmed){
                    form.reset()
                    navigate('/')
                }
              })
            }
          })
    }


    return (
        <div className='w-full bg-gray-600 min-h-screen'>
            <Form onSubmit={handleBooking} className="card mx-auto relative top-28  w-4/5 lg:max-w-lg shadow-2xl bg-base-100">
        
            <div className="card-body">
                <p className='text-center font-bold text-xl lg:text-3xl'>Booking Your Movie</p>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Name</span>
                </label>
                <input type="text" name='movie_name' value={show?.name || movieName} placeholder="Movie Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">User Name</span>
                </label>
                <input type="text" name='user_name' placeholder="User Name" defaultValue={userName || ''} className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">User Email</span>
                </label>
                <input type="email" name='user_email' placeholder="User Email" defaultValue={userEmail || ''} className="input input-bordered" required/>
                </div>
                
                
                <div className="form-control mt-6">
                <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
            </Form>
        </div>
    );
};

export default BookMovie;