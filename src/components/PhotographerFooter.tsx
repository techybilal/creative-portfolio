
import { Button } from "@/components/ui/button";
import { Camera, Phone, Mail, Instagram, Linkedin, Facebook, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const PhotographerFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Camera className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">David Lens</h3>
                <p className="text-blue-400">Capturing Life's Moments</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Professional photographer specializing in weddings, portraits, and lifestyle photography. 
              Every frame tells a story, and I'm here to help you tell yours beautifully.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#wedding" className="text-gray-300 hover:text-blue-300 transition-colors">Wedding Photography</a></li>
              <li><a href="#portrait" className="text-gray-300 hover:text-blue-300 transition-colors">Portrait Sessions</a></li>
              <li><a href="#event" className="text-gray-300 hover:text-blue-300 transition-colors">Event Photography</a></li>
              <li><a href="#commercial" className="text-gray-300 hover:text-blue-300 transition-colors">Commercial Work</a></li>
              <li><Link to="/" className="text-gray-300 hover:text-blue-300 transition-colors">Portfolio Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">Seattle, WA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (206) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">david@lens.photo</span>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white mt-6 w-full">
              Book Now
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2024 David Lens Photography. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-2 md:mt-0">
            Capturing memories with <Heart size={14} className="text-blue-400" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PhotographerFooter;
