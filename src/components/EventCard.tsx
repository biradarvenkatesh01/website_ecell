import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    description: string;
    date: string;
    venue: string;
    image: string;
    type: string;
    registrationLink: string;
  };
  onClick: () => void;
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            event.type === 'upcoming' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
          }`}>
            {event.type === 'upcoming' ? 'Upcoming' : 'Past Event'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2 text-primary" />
          <span>{formatDate(event.date)}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2 text-primary" />
          <span>{event.venue}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

        <div className="flex items-center justify-between">
          <button className="text-primary font-semibold hover:underline flex items-center">
            View Details
            <ExternalLink className="h-4 w-4 ml-1" />
          </button>
          {event.type === 'upcoming' && event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors text-sm font-semibold"
            >
              Register Now
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
