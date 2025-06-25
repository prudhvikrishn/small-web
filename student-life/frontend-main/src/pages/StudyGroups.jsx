export default function StudyGroups() {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Study Groups</h1>
        <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
          Collaborate with fellow students by joining or creating study groups tailored to your interests or courses.
        </p>
  
        {/* Call-to-action section */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
            Create a New Group
          </button>
        </div>
  
        {/* Study groups grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600">Data Structures Group</h2>
            <p className="text-sm text-gray-500 mt-2">Mondays at 5 PM - Room 101</p>
            <button className="mt-4 bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
              Join Group
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600">AI and Machine Learning</h2>
            <p className="text-sm text-gray-500 mt-2">Wednesdays at 6 PM - Room 202</p>
            <button className="mt-4 bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
              Join Group
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600">Digital Circuits Study</h2>
            <p className="text-sm text-gray-500 mt-2">Fridays at 3 PM - Room 303</p>
            <button className="mt-4 bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
              Join Group
            </button>
          </div>
        </div>
  
        {/* Footer or additional info */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Want to suggest a new study group topic? Contact us at{" "}
            <span className="text-blue-600 underline cursor-pointer">studentlife@university.edu</span>
          </p>
        </div>
      </div>
    );
  }
  