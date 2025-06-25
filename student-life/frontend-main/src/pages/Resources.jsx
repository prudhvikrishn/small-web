export default function Resources() {
    const resources = [
      { id: 1, title: "Academic Advising", description: "Get advice on courses and career planning." },
      { id: 2, title: "Mental Health Support", description: "Access counseling and mental health resources." },
      { id: 3, title: "Library Services", description: "Find books, journals, and study materials." },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Resources and Support
        </h1>
        <ul className="space-y-4">
          {resources.map((resource) => (
            <li
              key={resource.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform"
            >
              <h2 className="text-lg font-semibold text-blue-600">{resource.title}</h2>
              <p className="text-gray-700 mt-2">{resource.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }