
import { Button } from "@/components/ui/button";
import { Dumbbell, Phone, Mail, Instagram, Linkedin, Youtube, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const FitnessTrainerFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Dumbbell className="text-orange-400" size={24} />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">MARCUS STRONG</h3>
                <p className="text-orange-400">TRANSFORM YOUR LIFE</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your fitness journey starts here. With proven training methods and personalized nutrition guidance, 
              I'll help you achieve the transformation you've always wanted.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-orange-400">TRAINING</h4>
            <ul className="space-y-3">
              <li><a href="#personal" className="text-gray-300 hover:text-orange-300 transition-colors">Personal Training</a></li>
              <li><a href="#group" className="text-gray-300 hover:text-orange-300 transition-colors">Group Classes</a></li>
              <li><a href="#online" className="text-gray-300 hover:text-orange-300 transition-colors">Online Coaching</a></li>
              <li><a href="#nutrition" className="text-gray-300 hover:text-orange-300 transition-colors">Nutrition Plans</a></li>
              <li><Link to="/" className="text-gray-300 hover:text-orange-300 transition-colors">Portfolio Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-orange-400">CONTACT</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-400" />
                <span className="text-gray-300 text-sm">Miami, FL</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-orange-400" />
                <span className="text-gray-300 text-sm">+1 (305) 555-STRONG</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-orange-400" />
                <span className="text-gray-300 text-sm">marcus@strong.fit</span>
              </div>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-6 w-full font-bold">
              START NOW
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2024 Marcus Strong Fitness. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-2 md:mt-0">
            Powered by <Zap size={14} className="text-orange-400" /> and determination
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FitnessTrainerFooter;
