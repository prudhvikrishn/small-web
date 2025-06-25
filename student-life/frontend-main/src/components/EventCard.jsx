function EventCard({ title, date, description }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">{date}</p>
        <p className="mt-2 text-gray-800">{description}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Register
        </button>
      </div>
    );
  }
  
  export default EventCard;
  