import { motion } from 'framer-motion';

interface PartnerCardProps {
  partner: {
    id: number;
    name: string;
    logo: string;
    website: string;
  };
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <motion.a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-32 group"
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </motion.a>
  );
};

export default PartnerCard;
