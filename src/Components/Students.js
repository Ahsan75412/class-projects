import React, { useEffect, useState } from 'react';
import Student from './Student';
import './Students.css';

const Students = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div id="services" className='container'>
        <div className="row">
            <h1 className='services-title mt-5'>All Register Students</h1>

            <div className="services-container">
                {
                    students.map(student => <Student
                        key={student._id}
                        student={student}

                    ></Student>)
                }

            </div>
        </div>
    </div>
    );
};

export default Students;