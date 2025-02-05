import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../features/userSlice";

const Home = () => {
    const users = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const DeleteUser = (id) => {
        dispatch(deleteUser(id));
    }

    return (
        <div className="p-5">
            <h1 className="text-center text-4xl m-4 font-bold">Redux CRUD Application</h1>
            <div className="flex flex-col items-start">
                <button onClick={() => {
                    navigate('/create')
                }} className="p-2 rounded bg-green-600 text-white mb-4">Create +</button>
                <div className="overflow-x-auto w-full">
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                    <td className="border border-gray-300 px-4 py-2 flex gap-2">
                                        <Link to={`/update/${user.id}`} className="bg-blue-500 text-white px-3 py-1 rounded">Update</Link>
                                        <button onClick={() => DeleteUser(user.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
