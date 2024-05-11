import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h3>Welcome to profile</h3>
        </div>
    );
};

export default Profile;