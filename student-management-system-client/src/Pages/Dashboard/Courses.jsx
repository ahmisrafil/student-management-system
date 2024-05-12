import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const Courses = () => {
    // const [subjects, setSubjects] = useState([]);
    const subjects = useLoaderData();
    

      console.log(subjects);
    return (
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
                                subjects.map((subject, index) => <tr key={subject.id}>
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
                                            className="btn btn-sm text-sm">
                                            Enroll
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
    );
};

export default Courses;