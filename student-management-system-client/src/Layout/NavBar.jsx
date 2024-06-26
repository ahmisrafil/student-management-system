import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import img1 from "../assets/profile.png"
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navlinks = <>
        <ul className="flex space-x-4">
            <li><Link>Academic</Link></li>
            <li><Link>Class Schedule</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
        </ul>
    </>

    return (
        <div className="navbar  bg-[#3fa6e2]">
            <div className="navbar-start lg:ml-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to="/"><img className="h-10" src="https://school360.xyz/200837/200837_media/logos/contact_1711082709_2024-03-22.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-white font-semibold">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end mr-10">
            <ul className='flex items-center justify-center'>
                    {
                        user ? <>
                            <span><img src={user?.photoURL} className='h-10 w-10 border-[1px] border-black rounded-full mx-3' /></span>
                            <span className=' text-orange-900 font-bold text-base mr-2'>{user?.displayName}</span>
                            <button onClick={handleLogOut} className="btn btn-ghost hover:text-orange-800">LogOut</button>
                        </> : <>
                            <li><Link to="/student-login"><img src={img1} alt="" className='h-10' /></Link></li>
                        </>
                    }
                    
                </ul>
            </div>
        </div>
    );
};

export default NavBar;