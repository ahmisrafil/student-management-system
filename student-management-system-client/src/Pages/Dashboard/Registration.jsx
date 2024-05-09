import { useState } from "react";


const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [gFirstName, setgFirstName] = useState("");
    const [gLastName, setgLastName] = useState("");
    const [gEmail, setgEmail] = useState("");
    const [gMobileNumber, setgMobileNumber] = useState("");
    const [gender, setGender] = useState('');
    const [dept, setDept] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, dob, address, email, mobileNumber, gFirstName, gLastName, gEmail, gMobileNumber, gender,dept);
        // Handle form submission here
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
                <div>
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
                </div>
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
                <h3 htmlFor="Gender" className="block text-gray-700">
                    Gender
                </h3><br />
                <div>
                    <div className="form-control">
                        <label className="label cursor-pointer gap-4 justify-center">
                            <input
                                type="radio"
                                name="radio-10"
                                className="radio checked:bg-red-500"
                                value="Male"
                                checked={gender === 'Male'}
                                // onChange={handleSubmit}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <span className="label-text">Male</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer gap-4 justify-center">
                            <input
                                type="radio"
                                name="radio-10"
                                className="radio checked:bg-blue-500"
                                value="Female"
                                checked={gender === 'Female'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <span className="label-text">Female</span>
                        </label>
                    </div>
                </div>
                <div>
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
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
            >
                Register
            </button>
        </form>
    );
};

export default Registration;