

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
          <p className="text-xl text-gray-800 mb-6">Something went wrong.</p>
          <div className="text-2xl text-gray-600 font-semibold animate-bounce">
            <span className="mr-1">Retry</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;