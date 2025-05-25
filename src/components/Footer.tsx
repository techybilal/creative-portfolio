
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creative Portfolios Hub
            </h3>
            <p className="text-gray-300 mb-6 max-w-md font-inter">
              Showcasing the best creative professionals across 10 different industries. 
              Find inspiration and connect with talented creatives worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 font-inter">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#portfolios" className="text-gray-300 hover:text-white transition-colors">Portfolios</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 font-inter">Industries</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="/interior-designer" className="text-gray-300 hover:text-white transition-colors">Interior Design</Link></li>
              <li><Link to="/makeup-artist" className="text-gray-300 hover:text-white transition-colors">Beauty & Makeup</Link></li>
              <li><Link to="/photographer" className="text-gray-300 hover:text-white transition-colors">Photography</Link></li>
              <li><Link to="/fitness-trainer" className="text-gray-300 hover:text-white transition-colors">Fitness & Wellness</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-inter">
              Bilalwaris © 2025 Creative Portfolios Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 font-inter">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
