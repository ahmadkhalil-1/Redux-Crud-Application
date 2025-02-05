import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userSlice';

const Update = () => {
    const users = useSelector((state) => state.user);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const existingUser = users.filter((user) => user.id == id)
    const { name, email } = existingUser[0];

    const [credentials, setCredentials] = useState({
        name: name,
        email: email
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: id, name: credentials.name, email: credentials.email }
        dispatch(updateUser(newUser));
        navigate('/');
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-lg p-6 w-[90%] sm:w-[50%]"
                >
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Update User</h2>

                    <label className="block text-gray-600 font-medium">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={credentials.name}
                        id="name"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        placeholder="Enter Name"
                    />

                    <label className="block text-gray-600 font-medium">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        id="email"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        placeholder="Enter Email"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Update;
