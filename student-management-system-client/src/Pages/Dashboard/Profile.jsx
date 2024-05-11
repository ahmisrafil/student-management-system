import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
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

        </div>
    );
};

export default Profile;