import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { stats } from '../data/data';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-xl font-display font-bold text-white">E-Cell UVCE</span>
            </div>
            <p className="text-sm mb-4">
              Dream. Dare. Do. Empowering students with the knowledge and skills to become successful entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/merchandise" className="hover:text-primary transition-colors">Merchandise</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Startup Incubation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Founder's Bootcamp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentor Connect</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Innovation Challenge</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Join E-Cell</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">University Visvesvaraya College of Engineering, K.R. Circle, Bangalore - 560001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:entrepreneurshipcelluvce@gmail.com" className="text-sm hover:text-primary transition-colors">
                  entrepreneurshipcelluvce@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">+91 80 2296 1735</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{stats.events}+</div>
              <div className="text-sm">Events Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{stats.students}+</div>
              <div className="text-sm">Students Driven</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">₹{stats.prizes}+</div>
              <div className="text-sm">Prizes Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{stats.workshops}+</div>
              <div className="text-sm">Workshops Conducted</div>
            </div>
          </div>

          <div className="text-center text-sm">
            <p className="mb-2">&copy; {new Date().getFullYear()} E-Cell UVCE. All rights reserved.</p>
            <p className="text-gray-500">Developed with ❤️ by Tech Team, E-Cell UVCE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
