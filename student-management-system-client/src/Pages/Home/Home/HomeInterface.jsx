import { Link } from "react-router-dom";
import bg from "../../../assets/bg_img.png"

const HomeInterface = () => {
    return (
        <div className="flex flex-row h-[100vh] bg-[10%] "
        style={{ backgroundImage: `url(${bg})` }}
       >
            <div className=" bg-[#76EEB4] p-20">
                <img className="h-52 mx-20 mt-20" src="/src/assets/reader.png" alt="" />
                <h3 className="font-bold text-4xl text-white text-center my-10">Student <br /> Management <br />System</h3>
            </div>
            <div className="mx-auto mt-20 flex flex-col gap-12">
                <h3 className="text-4xl mb-10 font-bold text-center">Welcome To Student Management System</h3>

                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-10 w-10 relative" src="/src/assets/stu.png" alt="" />
                        <img className="h-16 w-28 -mt-8" src="/src/assets/moon.png" alt="" />
                    </div>
                    <Link to="/student-login"><button className="btn bg-[#66BAEA] w-80 font-bold text-2xl">Student Login</button></Link>
                </div>
                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-10 w-10 relative" src="/src/assets/cap.png" alt="" />
                        <img className="h-16 w-28 -mt-8" src="/src/assets/moon.png" alt="" />
                    </div>
                    <Link to="teacher-login"><button className="btn bg-[#66BAEA] w-80 font-bold text-2xl">Teacher Login</button></Link>
                </div>
                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-10 w-10 relative" src="/src/assets/setting.png" alt="" />
                        <img className="h-16 w-28 -mt-8" src="/src/assets/moon.png" alt="" />
                    </div>
                    <button className="btn bg-[#66BAEA] w-80 font-bold text-2xl">Admin Login</button>
                </div>

            </div>
            {/* <h3 className="text-9xl h-[100vh]">Welcome to bd</h3> */}
        </div>
    );
};

export default HomeInterface;