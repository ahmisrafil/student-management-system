import { FaSearch } from "react-icons/fa";


const Results = () => {
    return (
        <div>
            <h3 className="bg-cyan-600 text-white font-semibold text-center p-1">Get Your Results Here</h3>

            <div className="my-10 flex flex-row justify-center gap-20 mt-20 ">
                    <div>
                    <h3 className="text-xl text-gray-700 mb-3">Select Year</h3>
                    <select
                        className="select select-bordered text-center select-sm w-full max-w-xs"
                        // onChange={(e) => setDept(e.target.value)}
                        // value={dept} // Set the value to the selectedDepartment state
                    >
                        <option disabled value="">Select Year</option>
                        <option value="First">1st Year</option>
                        <option value="Second">2nd Year</option>
                        <option value="Third">3rd Year</option>
                        <option value="Fourth">4th Year</option>
                    </select>
                    </div>
                    <div>
                    <h3 className="text-xl text-gray-700 mb-3">Select Semester</h3>
                    <select
                        className="select select-bordered text-center select-sm w-full max-w-xs"
                        // onChange={(e) => setDept(e.target.value)}
                        // value={dept} // Set the value to the selectedDepartment state
                    >
                        <option disabled value="">Select Semester</option>
                        <option value="First">1st Semester</option>
                        <option value="Second">2nd Semester</option>
                    </select>
                    </div>
                    

                </div>
                <div className="flex flex-row gap-6 justify-center">
                    <h3>Roll No</h3>
                <input type="number" name="roll" id="" className="border-2 text-center" />
                </div>
                <button className="flex flex-row items-center justify-center mx-auto my-10 gap-2 btn btn-info text-white" >
                    <FaSearch></FaSearch>
                    <span>Search Result</span>
                </button>
        </div>
    );
};

export default Results;