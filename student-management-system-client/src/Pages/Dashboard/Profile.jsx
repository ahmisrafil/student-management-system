import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const subjects = useLoaderData();

    return (
        <div>
            <h3 className="bg-cyan-600 text-white text-center font-semibold p-1">Student Info</h3>
            <div className="my-10 flex flex-row justify-between mx-20">
                <div>
                    <h3>Name: {user?.displayName}</h3>
                    <h3>Department: -</h3>
                    <h3>Session: -</h3>
                    <h3>Academic Year: -</h3>
                    <h3>Email: {user?.email}</h3>
                </div>
                <div>
                    <img  className="h-40 mr-40" src={user?.photoURL} alt="" />
                </div>
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
                                subjects.slice(0,6).map((subject, index) => <tr key={subject.id}>
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