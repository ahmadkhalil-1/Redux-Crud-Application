import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../features/userSlice';

const Create = () => {
    const users = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        dispatch(createUser({
            id: newId,
            name: credentials.name,
            email: credentials.email
        }))
        navigate('/');
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-[90%] sm:w-[50%]">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Create User</h2>

                <label className="block text-gray-600 font-medium">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={credentials.name}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    placeholder="Enter Name"
                    onChange={handleChange}
                />

                <label className="block text-gray-600 font-medium">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={credentials.email}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />

                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Create;
