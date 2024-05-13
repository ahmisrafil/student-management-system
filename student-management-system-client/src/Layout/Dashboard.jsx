import { useContext, useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {  FaCalendar, FaEnvelope, FaHome, FaIdCard,  FaSearch,  FaWpforms } from "react-icons/fa";
import { FaArrowUpFromGroundWater, } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, [])
    const finalUser = users.find(use=> use?.email === user?.email);
    console.log(finalUser);
    return (
        <div className="flex">
            {/* dashboard side bar  section  */}
            <div className="w-64 min-h-screen bg-orange-200">
                <ul className="menu p-4">
                    {/* { */}
                        {/* isAdmin ? <> */}
                            <li>
                                <NavLink  to={`/dashboard/registration/${finalUser?._id}`}>
                                    <FaWpforms></FaWpforms>
                                    Registration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/courses">
                                    <SiGoogleforms></SiGoogleforms>
                                    Courses</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/profile">
                                    <BsFillPersonFill></BsFillPersonFill>
                                    Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/schedule">
                                    <FaCalendar></FaCalendar>
                                    Schedule</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/results">
                                    <FaArrowUpFromGroundWater></FaArrowUpFromGroundWater>
                                    Results</NavLink>
                            </li>
                        {/* </> */}
                            {/* : */}
                            <>
                                <li>
                                    <NavLink to="/dashboard/attendance">
                                        <FaIdCard></FaIdCard>
                                        Attendance</NavLink>
                                </li>
                                
                                {/* <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li> */}
                                
                            </>
                    {/* // } */}
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/Cats">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8 bg-orange-50">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;