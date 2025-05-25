
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, Phone, Mail, Instagram } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PhotographerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
              <Camera className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-playfair text-xl font-bold text-white">David Lens</h1>
              <p className="text-xs text-blue-400">Professional Photographer</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors">Gallery</a>
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#packages" className="text-gray-300 hover:text-blue-400 transition-colors">Packages</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Phone size={14} />
              <span>+1 (206) 555-0123</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Session
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-500/20">
            <nav className="flex flex-col gap-4">
              <a href="#gallery" className="text-gray-300 hover:text-blue-400">Gallery</a>
              <a href="#services" className="text-gray-300 hover:text-blue-400">Services</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400">About</a>
              <a href="#packages" className="text-gray-300 hover:text-blue-400">Packages</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default PhotographerHeader;
