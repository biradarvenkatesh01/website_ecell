import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { merchandise } from "../data";
import ProductCard from "../components/ProductCard";

const Merchandise = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(merchandise.map((item) => item.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? merchandise
      : merchandise.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">
            E-Cell Merchandise
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Show your entrepreneurial spirit with official E-Cell merchandise
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found in this category.
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Bulk Orders</h2>
          <p className="text-lg mb-6">
            Looking to place a bulk order for your team or event? Contact us for
            special pricing!
          </p>
          <a
            href="mailto:entrepreneurshipcelluvce@gmail.com"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us for Bulk Orders
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Delivery Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Free Campus Delivery
              </h3>
              <p className="text-sm text-gray-600">
                For UVCE students, pickup available at E-Cell office
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quick Processing
              </h3>
              <p className="text-sm text-gray-600">
                Orders processed within 3-5 business days
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-sm text-gray-600">
                Premium materials with satisfaction guaranteed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Merchandise;
