import { Link } from "react-router-dom";


const Performance = () => {
    return (
        <div>
            <h3 className="bg-cyan-600 text-white text-center font-semibold p-1">Monitor Students Performance</h3>
            
        <div className="grid grid-cols-2 mx-20 justify-center items-center gap-6 my-20">
            <Link to=""><button className="btn btn-sm ">Update Attendance</button></Link>
            <Link to="/dashboard/update-result"><button className="btn btn-sm ">Update Result</button></Link>
            <Link to=""><button className="btn btn-sm ">Update Applications</button></Link>
            <Link to=""><button className="btn btn-sm ">Update Routine</button></Link>
            <Link to=""><button className="btn btn-sm ">Update Applications</button></Link>
            <Link to=""><button className="btn btn-sm ">Update Applications</button></Link>
        </div>
        </div>
    );
};

export default Performance;