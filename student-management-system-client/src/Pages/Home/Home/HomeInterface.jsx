import bg from "../../../assets/bg_img.png"

const HomeInterface = () => {
    return (
        <div className="flex flex-row  bg-[10%] "
        style={{ backgroundImage: `url(${bg})` }}
       >
            <div className=" bg-[#76EEB4] p-20">
                <img className="h-36 mx-20 mt-20" src="/src/assets/reader.png" alt="" />
                <h3 className="font-bold text-4xl text-white text-center my-10">Student <br /> Management <br />System</h3>
            </div>
            <div className="mx-auto mt-10">
                <h3 className="text-4xl font-bold text-center">Welcome To Student Management System</h3>
            </div>
            {/* <h3 className="text-9xl h-[100vh]">Welcome to bd</h3> */}
        </div>
    );
};

export default HomeInterface;