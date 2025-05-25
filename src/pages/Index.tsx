
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Camera, Users, Heart, PenTool, Utensils, Calendar, Sparkles, Dumbbell, Brush } from "lucide-react";

const portfolios = [
  {
    id: 1,
    title: "Interior Designer",
    description: "Transform spaces with stunning design concepts",
    icon: <Palette className="w-8 h-8" />,
    gradient: "from-emerald-400 to-teal-600",
    link: "/interior-designer",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Makeup Artist",
    description: "Beauty transformations and artistic makeup",
    icon: <Brush className="w-8 h-8" />,
    gradient: "from-pink-400 to-rose-600",
    link: "/makeup-artist",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Fashion Stylist",
    description: "Curated style and personal shopping expertise",
    icon: <Sparkles className="w-8 h-8" />,
    gradient: "from-purple-400 to-indigo-600",
    link: "/fashion-stylist",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Fitness Trainer",
    description: "Transform bodies and minds through fitness",
    icon: <Dumbbell className="w-8 h-8" />,
    gradient: "from-orange-400 to-red-600",
    link: "/fitness-trainer",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Photographer",
    description: "Capture moments and create visual stories",
    icon: <Camera className="w-8 h-8" />,
    gradient: "from-blue-400 to-cyan-600",
    link: "/photographer",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Writer & Blogger",
    description: "Craft compelling stories and content",
    icon: <PenTool className="w-8 h-8" />,
    gradient: "from-yellow-400 to-amber-600",
    link: "/writer",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Event Planner",
    description: "Create unforgettable experiences and celebrations",
    icon: <Calendar className="w-8 h-8" />,
    gradient: "from-green-400 to-emerald-600",
    link: "/event-planner",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Chef & Food Artist",
    description: "Culinary artistry and gastronomic excellence",
    icon: <Utensils className="w-8 h-8" />,
    gradient: "from-red-400 to-pink-600",
    link: "/chef",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    title: "Life Coach",
    description: "Guide personal growth and transformation",
    icon: <Heart className="w-8 h-8" />,
    gradient: "from-indigo-400 to-purple-600",
    link: "/life-coach",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    title: "Artist & Craftmaker",
    description: "Original artwork and handcrafted creations",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-teal-400 to-blue-600",
    link: "/artist",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlMGU3ZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Explore <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10 Inspiring</span>
              <br />
              Portfolio Styles
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              For Creative Professionals
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Discover beautifully crafted portfolio examples across diverse creative industries. 
              Find inspiration for your own professional showcase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Portfolios <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolios Grid */}
      <section id="portfolios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each portfolio is uniquely designed to reflect the profession&apos;s aesthetic and showcase their work effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio, index) => (
              <Card 
                key={portfolio.id} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={portfolio.image} 
                    alt={portfolio.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${portfolio.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 group-hover:text-white transition-colors duration-300">
                    {portfolio.icon}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {portfolio.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {portfolio.description}
                  </p>
                  <Link to={portfolio.link}>
                    <Button 
                      className={`w-full bg-gradient-to-r ${portfolio.gradient} text-white border-0 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                    >
                      View Portfolio <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Choose Our Portfolio Hub?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="font-inter text-xl font-semibold text-gray-900 mb-3">Professional Design</h3>
                <p className="text-gray-600">Each portfolio is crafted with modern design principles and industry best practices</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="font-inter text-xl font-semibold text-gray-900 mb-3">Diverse Industries</h3>
                <p className="text-gray-600">Covering 10 different creative professions with unique styling for each</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-inter text-xl font-semibold text-gray-900 mb-3">Inspiration Hub</h3>
                <p className="text-gray-600">Find inspiration and ideas for creating your own professional portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
