

const Home = () => {
    return (
        <div className="bg-gray-100">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Education Management System</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Academic Result</a></li>
                <li><a href="#" className="hover:underline">Class & Exam Schedule</a></li>
                <li><a href="#" className="hover:underline">Attendance</a></li>
                <li><a href="#" className="hover:underline">Admission</a></li>
                <li><a href="#" className="hover:underline">Admit Card</a></li>
                <li><a href="#" className="hover:underline">Receipts Print</a></li>
                <li><a href="#" className="hover:underline">Notice Board</a></li>
                <li><a href="#" className="hover:underline">Profile</a></li>
                <li><a href="#" className="hover:underline">Improvement Form fill-up</a></li>
                <li><a href="#" className="hover:underline">Application Form Reprint</a></li>
                <li><a href="#" className="hover:underline">Pay through Sonali Pay</a></li>
                <li><a href="#" className="hover:underline">Apply for Application Form</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Education Management System</h2>
          <p className="text-gray-700">Please select an option from the menu above to get started.</p>
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Education Management System</p>
          </div>
        </footer>
      </div>
    );
};

export default Home;

