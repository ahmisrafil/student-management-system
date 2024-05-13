import { useState } from "react";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [gFirstName, setgFirstName] = useState("");
    const [gLastName, setgLastName] = useState("");
    const [gEmail, setgEmail] = useState("");
    const [gMobileNumber, setgMobileNumber] = useState("");
    const [dept, setDept] = useState("");
    const [session, setSession] = useState("");
    const [img, setImg] = useState('')

    const axiosPublic = useAxiosPublic();
    // const {email, name, _id} = useLoaderData();
    const {_id, name} = useLoaderData();
    // console.log(email, name, _id);
    const imgData = {image: img}

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(firstName, lastName, dob, address, mobileNumber, gFirstName, gLastName, gEmail, gMobileNumber, session, dept, img);
        console.log(img);

        // Handle form submission here

        const res = await axiosPublic.post(image_hosting_api, imgData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            // now send the new data to the server with the image url
            const stuData = {
                firstName: firstName, 
                lastName: lastName, 
                dob:dob, 
                address: address, 
                mobileNumber: mobileNumber, 
                gFirstName: gFirstName, 
                gLastName: gLastName, 
                gEmail: gEmail, 
                gMobileNumber: gMobileNumber, 
                session: session, 
                dept: dept, 
                image: res.data.data.display_url}
            // 
            const dataRes = await axiosPublic.patch(`/users/${_id}`, stuData);
            console.log(dataRes.data)
            if (dataRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${name}'s profile is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);

    };
    return (


        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-700">Students Information</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    {/* <h3 className="text-xl font-semibold">Personal Details</h3> */}
                    <label htmlFor="firstName" className="block text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="dob" className="block text-gray-700">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                {/* <div>
                    <label htmlFor="email" className="block text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div> */}
                <div>
                    <label htmlFor="mobileNumber" className="block text-gray-700">
                        Mobile Number
                    </label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <h3 className="text-xl text-gray-700">Session</h3>
                    <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        onChange={(e) => setSession(e.target.value)}
                        value={dept} // Set the value to the selectedDepartment state
                    >
                        <option disabled value="">Select Session</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
                <div className="my-6">
                    <h3 className="text-xl text-gray-700">Department</h3>
                    <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        onChange={(e) => setDept(e.target.value)}
                        value={dept} // Set the value to the selectedDepartment state
                    >
                        <option disabled value="">Select Department</option>
                        <option value="Bangla">Bangla</option>
                        <option value="English">English</option>
                        <option value="CSE">CSE</option>
                        <option value="EEE">EEE</option>
                        <option value="BBA">BBA</option>
                        <option value="Law">Law</option>
                    </select>

                </div>
            </div>
            <h3 className="text-xl text-gray-700">Guardians Information</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    {/* <h3 className="text-xl font-semibold">Personal Details</h3> */}
                    <label htmlFor="firstName" className="block text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="gFirstName"
                        value={gFirstName}
                        onChange={(e) => setgFirstName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="gLastName"
                        value={gLastName}
                        onChange={(e) => setgLastName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="gEmail"
                        value={gEmail}
                        onChange={(e) => setgEmail(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="mobileNumber" className="block text-gray-700">
                        Mobile Number
                    </label>
                    <input
                        type="tel"
                        id="gMobileNumber"
                        value={gMobileNumber}
                        onChange={(e) => setgMobileNumber(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
            </div>
            <div>
                <h3 className="text-xl my-4 text-gray-700">Upload Your Photo</h3>
                <input
                    type="file"
                    className="file-input file-input-bordered file-input-info w-full max-w-xs"
                    onChange={(e) => setImg(e.target.files[0])}

                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
            >
                Register
            </button>
        </form>
    );
};

export default UpdateProfile;