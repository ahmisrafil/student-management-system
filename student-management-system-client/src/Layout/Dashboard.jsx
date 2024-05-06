import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaRegIdCard, FaRegistered, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaWpforms } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar  section  */}
            <div className="w-64 min-h-screen bg-orange-200">
                <ul className="menu p-4">
                    {/* { */}
                        {/* isAdmin ? <> */}
                            <li>
                                <NavLink to="/dashboard">
                                    <FaWpforms></FaWpforms>
                                    Registration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/orders">
                                    <FaBook></FaBook>
                                    Manage Orders</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        {/* </> */}
                            {/* : */}
                            <>
                                <li>
                                    <NavLink to="/dashboard/">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/orders">
                                        <FaCalendar></FaCalendar>
                                       My Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                       Payment History</NavLink>
                                </li>
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