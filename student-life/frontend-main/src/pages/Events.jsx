
import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard 
          title="Hackathon 2025" 
          date="Feb 20, 2025" 
          description="Join our annual hackathon to showcase your skills!"
        />
        <EventCard 
          title="Music Fest" 
          date="Mar 15, 2025" 
          description="An evening of great music and fun. Don't miss out!"
        />
      </div>
    </div>
  );
}
