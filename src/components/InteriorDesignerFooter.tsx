
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const InteriorDesignerFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-emerald-300 font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">Elena Designs</h3>
                <p className="text-emerald-300">Creating Beautiful Spaces</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transforming spaces into stunning environments that reflect your personality and lifestyle. 
              Every design tells a story, and I'm here to help you tell yours.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-gray-300 hover:text-emerald-300 transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-300 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-300 transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-emerald-300 transition-colors">Testimonials</a></li>
              <li><Link to="/" className="text-gray-300 hover:text-emerald-300 transition-colors">Back to Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-emerald-300" />
                <span className="text-gray-300 text-sm">Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-300" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-300" />
                <span className="text-gray-300 text-sm">elena@designs.com</span>
              </div>
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white mt-6 w-full">
              Get Quote
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2024 Elena Designs. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={14} className="text-emerald-400" /> for beautiful spaces
          </p>
        </div>
      </div>
    </footer>
  );
};

export default InteriorDesignerFooter;
