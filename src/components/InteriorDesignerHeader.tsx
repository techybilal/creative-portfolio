
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const InteriorDesignerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="font-playfair text-xl font-bold text-gray-900">Elena Designs</h1>
              <p className="text-xs text-emerald-600">Interior Designer</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-gray-700 hover:text-emerald-600 transition-colors">Portfolio</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Free Consultation
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100">
            <nav className="flex flex-col gap-4">
              <a href="#portfolio" className="text-gray-700 hover:text-emerald-600">Portfolio</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600">Contact</a>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full mt-4">
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default InteriorDesignerHeader;
