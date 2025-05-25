import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, MapPin, Award, Star, ChefHat, Flame, Soup, Phone, Mail, MessageCircle, Quote, Calendar } from "lucide-react";

const Chef = () => {
  return (
    <div className="min-h-screen bg-stone-900 text-white font-inter">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-800 via-red-800 to-amber-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-red-400/20"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-amber-400/20 rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 text-orange-300/10 text-9xl">🍴</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ChefHat className="text-orange-300" size={24} />
                </div>
                <Badge className="bg-orange-500/20 text-orange-200 border-orange-500/30 backdrop-blur-sm px-4 py-2">
                  Executive Chef & Culinary Artist
                </Badge>
              </div>
              
              <h1 className="font-playfair text-7xl md:text-8xl font-bold mb-8 leading-tight">
                Chef
                <br />
                <span className="text-orange-300">Antonio</span>
              </h1>
              
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Creating culinary masterpieces that delight the senses and bring people together. 
                Specializing in authentic Italian cuisine, private dining experiences, and culinary education with 15+ years of expertise.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} className="text-orange-400" />
                    <span className="text-orange-200 font-semibold">Location</span>
                  </div>
                  <p className="text-white">Boston, MA</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Award size={20} className="text-orange-400" />
                    <span className="text-orange-200 font-semibold">Training</span>
                  </div>
                  <p className="text-white">Michelin Trained</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Star size={20} className="text-orange-400" />
                    <span className="text-orange-200 font-semibold">Experience</span>
                  </div>
                  <p className="text-white">15+ Years</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Flame size={20} className="text-orange-400" />
                    <span className="text-orange-200 font-semibold">Specialty</span>
                  </div>
                  <p className="text-white">Italian Cuisine</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
                  <Calendar className="mr-2" size={20} />
                  Book Chef
                </Button>
                <Button variant="outline" className="border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-stone-900 px-8 py-6 text-lg rounded-xl">
                  View Menu
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=700&fit=crop" 
                  alt="Culinary Arts"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover border-4 border-orange-300/20"
                />
                <div className="absolute -top-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl rotate-3">
                  <Utensils size={32} />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl -rotate-3">
                  <Soup size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-orange-500"></div>
              <ChefHat className="text-orange-500" size={32} />
              <div className="w-16 h-px bg-orange-500"></div>
            </div>
            <h2 className="font-playfair text-5xl font-bold text-white mb-4">Culinary Services</h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Professional culinary experiences for every occasion and palate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-stone-900 border-2 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Utensils className="text-orange-400" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-orange-400">$150</p>
                    <p className="text-stone-400 text-sm">per person</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Private Dining</h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Exclusive in-home dining experiences with personalized 4-course menus
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">4-course tasting menu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">Wine pairing included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">Service for 2-12 guests</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Book Private Dinner</Button>
              </CardContent>
            </Card>

            <Card className="bg-stone-900 border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                    <ChefHat className="text-red-400" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-red-400">$80</p>
                    <p className="text-stone-400 text-sm">per class</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Cooking Classes</h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Learn authentic Italian cooking techniques and family recipes
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">3-hour hands-on class</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">Recipe cards included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">Small group setting (6 max)</span>
                  </div>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600">Book Cooking Class</Button>
              </CardContent>
            </Card>

            <Card className="bg-stone-900 border-2 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                    <Star className="text-amber-400" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-amber-400">$75</p>
                    <p className="text-stone-400 text-sm">per person</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Event Catering</h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Custom menus for special events and corporate functions
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">Buffet or plated service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">Custom menu design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-stone-400 text-sm">Full service team included</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900">Get Catering Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Signature Dishes Gallery */}
      <section id="menu" className="py-20 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">Signature Dishes</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Flame className="text-orange-500" size={24} />
              <div className="w-12 h-px bg-orange-500"></div>
              <Soup className="text-orange-500" size={24} />
            </div>
            <p className="text-xl text-stone-300">Culinary artistry on every plate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Osso Buco", description: "Braised veal shanks in rich tomato sauce", price: "$45", category: "Main" },
              { name: "Risotto ai Porcini", description: "Creamy arborio rice with wild mushrooms", price: "$28", category: "Primi" },
              { name: "Branzino", description: "Mediterranean sea bass with herbs", price: "$38", category: "Pesce" },
              { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$12", category: "Dolci" },
              { name: "Pasta alla Norma", description: "Sicilian eggplant and ricotta pasta", price: "$24", category: "Pasta" },
              { name: "Vitello Tonnato", description: "Chilled veal with tuna sauce", price: "$32", category: "Antipasti" },
              { name: "Panna Cotta", description: "Silky vanilla custard with berry compote", price: "$10", category: "Dolci" },
              { name: "Carbonara", description: "Traditional Roman pasta with guanciale", price: "$22", category: "Pasta" }
            ].map((dish, index) => (
              <Card key={index} className="group bg-stone-800 border border-orange-500/20 hover:border-orange-500/40 overflow-hidden transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop&q=80&crop=entropy&cs=tinysrgb&seed=${index + 20}`}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {dish.price}
                  </div>
                  <div className="absolute top-2 left-2 bg-stone-900/80 text-orange-400 px-2 py-1 rounded text-xs">
                    {dish.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-playfair text-xl font-bold text-orange-300 mb-2">{dish.name}</h3>
                  <p className="text-stone-400 text-sm">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">Client Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Maria & Giuseppe", text: "Antonio brought Italy to our home! The flavors were absolutely authentic and divine.", rating: 5, service: "Private Dining" },
              { name: "Boston Culinary Club", text: "The cooking class was incredible. Antonio's passion for Italian cuisine is infectious!", rating: 5, service: "Cooking Class" },
              { name: "TechStart Inc.", text: "Our corporate event was elevated to fine dining status. Exceptional food and service.", rating: 5, service: "Event Catering" }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-stone-700 border-stone-600">
                <CardContent className="p-0">
                  <Quote className="text-orange-400 mb-4" size={32} />
                  <p className="text-stone-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-orange-400">{testimonial.service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">Book Your Culinary Experience</h2>
            <p className="text-xl text-stone-300">Ready to taste authentic Italian cuisine? Let's create something delicious together</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-stone-800 rounded-xl border border-orange-500/20">
                <Phone className="text-orange-500" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-stone-300">+1 (617) 555-CHEF</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-stone-800 rounded-xl border border-orange-500/20">
                <Mail className="text-orange-500" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-stone-300">antonio@chef.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-stone-800 rounded-xl border border-orange-500/20">
                <MessageCircle className="text-orange-500" size={24} />
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <p className="text-stone-300">+1 (617) 555-CHEF</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 p-8 rounded-xl border border-orange-500/20">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">Request a Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="p-4 bg-stone-700 border border-stone-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="p-4 bg-stone-700 border border-stone-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 bg-stone-700 border border-stone-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <select className="w-full p-4 bg-stone-700 border border-stone-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select Service</option>
                  <option>Private Dining</option>
                  <option>Cooking Class</option>
                  <option>Event Catering</option>
                  <option>Consultation</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    className="p-4 bg-stone-700 border border-stone-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input 
                    type="number" 
                    placeholder="Number of Guests" 
                    className="p-4 bg-stone-700 border border-stone-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <textarea 
                  placeholder="Tell me about your culinary vision..." 
                  rows={4}
                  className="w-full p-4 bg-stone-700 border border-stone-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4">
                  Send Culinary Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chef;
