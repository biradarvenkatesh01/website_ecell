import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, Calendar, User, Tag } from "lucide-react";
import { resources, blogPosts } from "../data";

const Resources = () => {
  const [activeTab, setActiveTab] = useState<"resources" | "blog">("resources");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const resourceCategories = [
    "All",
    ...Array.from(new Set(resources.map((r) => r.category))),
  ];

  const filteredResources =
    selectedCategory === "All"
      ? resources.filter(
          (r) =>
            r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : resources
          .filter((r) => r.category === selectedCategory)
          .filter(
            (r) =>
              r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              r.description.toLowerCase().includes(searchTerm.toLowerCase())
          );

  const filteredBlogs = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">
            Resources & Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tools, guides, and insights to help you build your startup
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab("resources")}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === "resources"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === "blog"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Blog
            </button>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {activeTab === "resources" && (
            <div className="flex flex-wrap justify-center gap-2">
              {resourceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {activeTab === "resources" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-lg shadow-lg p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {resource.category}
                  </span>
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {resource.description}
                </p>

                <a
                  href={resource.link}
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center text-xs bg-secondary/20 text-secondary-dark px-2 py-1 rounded"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-primary font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {((activeTab === "resources" && filteredResources.length === 0) ||
          (activeTab === "blog" && filteredBlogs.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No {activeTab} found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
