import { useEffect, useState } from "react";


const UpdateResult = () => {
const [courseName, setCourseName] = useState("")

useEffect(()=>{
    fetch("http://localhost:5000/")
},[])
    return (
        <div>
            <h3 className="bg-cyan-600 text-white text-center font-semibold p-1">Monitor Students Performance</h3>
            <form action="">
            <div className="grid grid-cols-2 gap-4">
                <h3>Select Session:</h3>
                    <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        onChange={(e) => setSession(e.target.value)}
                        value={session} // Set the value to the selectedDepartment state
                    >
                        <option disabled value="">Select Session</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                    <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        onChange={(e) => setSemester(e.target.value)}
                        value={semester} // Set the value to the selectedDepartment state
                    >
                        <option disabled value="">Select Session</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                    </select>
                    <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        onChange={(e) => setCourseName(e.target.value)}
                        value={courseName} // Set the value to the selectedDepartment state
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

            </form>
        </div>
    );
};

export default UpdateResult;