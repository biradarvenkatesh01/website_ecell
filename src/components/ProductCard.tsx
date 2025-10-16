import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    productName: string;
    description: string;
    price: string;
    image: string;
    orderLink: string;
    category: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.productName}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{product.price}</span>
          <a
            href={product.orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Order Now</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
