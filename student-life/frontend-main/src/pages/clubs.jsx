export default function Clubs() {
  const clubs = [
    { id: 1, name: "Coding Club", description: "A club for coding enthusiasts." },
    { id: 2, name: "Photography Club", description: "Capture moments with creativity." },
    { id: 3, name: "Drama Club", description: "Unleash your acting skills." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Student Clubs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform"
          >
            <h2 className="text-lg font-semibold text-blue-600">{club.name}</h2>
            <p className="text-gray-700 mt-2">{club.description}</p>
            <button className="bg-blue-500 text-white py-1 px-3 rounded mt-2 hover:bg-blue-600">
              Join Club
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}