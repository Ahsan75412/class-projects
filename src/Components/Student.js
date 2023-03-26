import React from 'react';
import './Student.css';

const Student = ({student}) => {
    const {_id , name ,img , passing_year, batch, phone ,profession , email,classId, address  } = student;

    return (
        <div className='student'>
        <img className='w-100' src={img} alt="" />
        <h2> {name}</h2>
        <h4>Batch: {batch}</h4>
        <h4>ClassId: {classId}</h4>
        <p><small>Passing-Year: {passing_year}</small></p>
        <p><small>Email: {email}</small></p>
        <p><small>Phone: {phone}</small></p>
        <p><small>Address : {address}</small></p>
        <p><small>Profession : {profession}</small></p>
      

    
    </div>
    );
};

export default Student;