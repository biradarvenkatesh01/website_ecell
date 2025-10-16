import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, MapPin, ExternalLink } from "lucide-react";
import { events as eventsData } from "../data";
import EventCard from "../components/EventCard";
import Modal from "../components/Modal";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const filteredEvents = eventsData
    .filter((event) => event.type === activeTab)
    .filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">
            Events
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for workshops, competitions, talks, and networking
            opportunities
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === "upcoming"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === "past"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No events found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <EventCard
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              </motion.div>
            ))}
          </div>
        )}

        <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
          {selectedEvent && (
            <div className="p-8">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedEvent.title}
              </h2>

              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span>{formatDate(selectedEvent.date)}</span>
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>{selectedEvent.venue}</span>
              </div>

              <div className="mb-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedEvent.type === "upcoming"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {selectedEvent.type === "upcoming"
                    ? "Upcoming Event"
                    : "Past Event"}
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                {selectedEvent.fullDescription || selectedEvent.description}
              </p>

              {selectedEvent.type === "upcoming" &&
                selectedEvent.registrationLink && (
                  <a
                    href={selectedEvent.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                  >
                    Register Now
                    <ExternalLink className="h-5 w-5 ml-2" />
                  </a>
                )}
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Events;
