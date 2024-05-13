import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


const Profile = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([])
    const subjects = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, [])
    const finalUser = users.find(use => use?.email === user?.email);
    console.log(finalUser);
    return (
        <div>
            <h3 className="bg-cyan-600 text-white text-center font-semibold p-1">Student Info</h3>
            <div className="my-10 flex flex-row justify-between mx-20">
                <div className="flex flex-row gap-10">
                    <div>
                        <h3 className="text-xl font-semibold">Students Information:</h3>
                        <h3>Name: {finalUser?.first_name + " " + finalUser?.last_name}</h3>
                        <h3>Department: {finalUser?.dept}</h3>
                        <h3>Session: {finalUser?.session}</h3>
                        <h3>Academic Year: 2024</h3>
                        <h3>Academic Year: {finalUser?.contact}</h3>
                        <h3>Email: {finalUser?.email}</h3>
                    </div>
                    <vr className="border-[1px] border-black" />
                    <div>
                    <h3 className="text-xl font-semibold">Guardians Information:</h3>
                        <h3>Name: {finalUser?.gFirst_Name + " " + finalUser?.gLast_Name}</h3>
                        <h3>Contact: {finalUser?.gContact}</h3>
                        <h3>Email: {finalUser?.gEmail}</h3>
                    </div>
                </div>
                <div>
                    <img className="h-40 mr-40" src={user?.photoURL} alt="" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                {/* <Link to={`/dashboard/update-profile/${user.id}`}><button className="btn btn-sm my-6 ">Update Profile</button></Link> */}
                <Link to={`/dashboard/update-profile/${finalUser?._id}`}><button className="btn btn-sm my-6 ">Update Profile</button></Link>
            </div>
            <h3 className="bg-cyan-600 text-white text-center font-semibold p-1">Subject List</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Credit</th>
                            <th>Enrolled</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subjects.slice(0, 6).map((subject, index) => <tr key={subject.id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center ">
                                        <td className="text-center">{subject.code}</td>
                                    </div>
                                </td>
                                <td>
                                    {subject.name}
                                </td>
                                <td className="text-center">{subject.credit}</td>
                                <td>
                                    <td className="text-right">{subject.enrolled}</td>

                                </td>
                                <td>
                                    <button
                                        // onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Profile;