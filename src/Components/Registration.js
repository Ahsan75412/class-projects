import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const { register, handleSubmit } = useForm();

    const diffToast = () =>{
        toast.success("Data Submitted");
    }
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/students`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

       
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

          
    };

    return (
        <div className='w-50 mx-auto'>
        <h2 className='mt-5 mb-3 text-primary'>Please add a service</h2>

        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
            <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <input className='mb-2' placeholder='ClassId' type="number" {...register("classId")} />
            <input className='mb-2' placeholder='Email' type="email" {...register("email")} />
            <input className='mb-2' placeholder='Batch'  {...register("batch")} />
            <input className='mb-2' placeholder='Phone' type="number" {...register("phone")} />
            <input className='mb-2' placeholder='Passing_year' type="number" {...register("passing_year")} />
            <textarea className='mb-2' placeholder='Profession' {...register("profession")} />
            <textarea className='mb-2' placeholder='Address' {...register("address")} />
            <input className='btn btn-outline-primary mb-5 w-50 mx-auto mt-5'value="Add Service" onClick={diffToast} type="submit"   />

            {/* <button className='btn btn-outline-primary w-50 mx-auto mt-5'value="Add Service" type="submit" onClick={diffToast}>

            </button> */}

            <ToastContainer></ToastContainer>

        </form>
    </div>
    );
};

export default Registration;