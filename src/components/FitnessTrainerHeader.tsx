
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell, Phone, Instagram, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FitnessTrainerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-orange-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Dumbbell className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-playfair text-xl font-bold text-white">MARCUS STRONG</h1>
              <p className="text-xs text-orange-400">Certified Personal Trainer</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#programs" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold">PROGRAMS</a>
            <a href="#transformations" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold">RESULTS</a>
            <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold">ABOUT</a>
            <a href="#nutrition" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold">NUTRITION</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold">CONTACT</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Phone size={14} />
              <span>+1 (305) 555-STRONG</span>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold">
              START TRAINING
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
          <div className="md:hidden py-4 border-t border-orange-500/30">
            <nav className="flex flex-col gap-4">
              <a href="#programs" className="text-gray-300 hover:text-orange-400 font-semibold">PROGRAMS</a>
              <a href="#transformations" className="text-gray-300 hover:text-orange-400 font-semibold">RESULTS</a>
              <a href="#about" className="text-gray-300 hover:text-orange-400 font-semibold">ABOUT</a>
              <a href="#nutrition" className="text-gray-300 hover:text-orange-400 font-semibold">NUTRITION</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 font-semibold">CONTACT</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default FitnessTrainerHeader;
