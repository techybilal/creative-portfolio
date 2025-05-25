import EventPlannerHeader from "@/components/EventPlannerHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Star, Heart, Sparkles, Gift, Music, Phone, Mail, MessageCircle, Quote } from "lucide-react";

const EventPlanner = () => {
  return (
    <div className="min-h-screen bg-green-50 font-inter">
      <EventPlannerHeader />
      
      {/* Hero Section - Enhanced */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-4 h-4 bg-emerald-300 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-24 left-1/3 w-5 h-5 bg-teal-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-16 bg-green-200 rotate-45 opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/4 w-2 h-12 bg-emerald-200 -rotate-45 opacity-60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2 rounded-full">
                  Certified Event Planner (CMP)
                </Badge>
              </div>
              
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-green-900 mb-8 leading-tight">
                Grace
                <br />
                <span className="text-emerald-600 relative">
                  Events
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-300 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-xl text-green-800 mb-8 leading-relaxed">
                Creating unforgettable experiences and celebrations that bring your vision to life. 
                Where dreams meet reality and every detail tells your story.
              </p>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-green-700 opacity-80">Based in</p>
                    <p className="font-semibold text-green-900">Chicago, IL</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Star size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-green-700 opacity-80">Certified</p>
                    <p className="font-semibold text-green-900">CMP Professional</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Heart size={20} className="text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-green-700 opacity-80">Experience</p>
                    <p className="font-semibold text-green-900">300+ Events</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Sparkles size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-green-700 opacity-80">Satisfaction</p>
                    <p className="font-semibold text-green-900">100% Happy</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <Calendar className="mr-2" size={20} />
                  Plan Your Event
                </Button>
                <Button variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg rounded-2xl">
                  View Portfolio
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop" 
                  alt="Event Planning"
                  className="rounded-2xl w-full h-80 object-cover mb-6"
                />
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-4 rounded-2xl shadow-xl">
                  <Calendar size={32} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border-2 border-emerald-100">
                  <div className="flex items-center gap-3">
                    <Gift className="text-emerald-600" size={24} />
                    <div>
                      <p className="font-semibold text-green-900">Perfect Events</p>
                      <p className="text-sm text-green-600">Every Detail Matters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sparkles className="text-emerald-600" size={32} />
              <h2 className="font-playfair text-5xl font-bold text-green-900">Event Services</h2>
              <Sparkles className="text-emerald-600" size={32} />
            </div>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Comprehensive event planning and coordination services for every celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-pink-50 to-rose-50">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Heart size={80} className="text-pink-400" />
              </div>
              <CardContent className="relative p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="text-pink-600" size={32} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-green-900 mb-4">Wedding Planning</h3>
                <p className="text-green-700 leading-relaxed mb-6">
                  Full-service wedding planning and coordination for your perfect day
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-3xl font-bold text-pink-600">$3,500</p>
                    <p className="text-green-600 text-sm">Starting package</p>
                  </div>
                  <Music className="text-pink-400 group-hover:rotate-12 transition-transform" size={24} />
                </div>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Plan Wedding</Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Calendar size={80} className="text-blue-400" />
              </div>
              <CardContent className="relative p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="text-blue-600" size={32} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-green-900 mb-4">Corporate Events</h3>
                <p className="text-green-700 leading-relaxed mb-6">
                  Professional conferences and company celebrations
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">$2,000</p>
                    <p className="text-green-600 text-sm">Per event</p>
                  </div>
                  <Gift className="text-blue-400 group-hover:rotate-12 transition-transform" size={24} />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Plan Corporate</Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-violet-50">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Star size={80} className="text-purple-400" />
              </div>
              <CardContent className="relative p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="text-purple-600" size={32} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-green-900 mb-4">Social Events</h3>
                <p className="text-green-700 leading-relaxed mb-6">
                  Birthday parties, anniversaries, and celebrations
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-3xl font-bold text-purple-600">$1,500</p>
                    <p className="text-green-600 text-sm">Base price</p>
                  </div>
                  <Sparkles className="text-purple-400 group-hover:rotate-12 transition-transform" size={24} />
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Plan Celebration</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keep existing portfolio gallery and add testimonials */}
      <section id="events" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-green-900 mb-6">Recent Celebrations</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-px bg-emerald-400"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="w-8 h-px bg-emerald-400"></div>
            </div>
            <p className="text-xl text-green-700">Moments that matter, perfectly planned</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Luxury Wedding", guests: "150", location: "Chicago Botanic Garden", budget: "$45K" },
              { type: "Corporate Gala", guests: "300", location: "Four Seasons Hotel", budget: "$25K" },
              { type: "Birthday Party", guests: "80", location: "Private Residence", budget: "$8K" },
              { type: "Anniversary", guests: "120", location: "Rooftop Venue", budget: "$15K" },
              { type: "Product Launch", guests: "200", location: "Art Gallery", budget: "$20K" },
              { type: "Charity Event", guests: "400", location: "Convention Center", budget: "$35K" }
            ].map((event, index) => (
              <Card key={index} className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&q=80&crop=entropy&cs=tinysrgb&seed=${index + 10}`}
                    alt={`${event.type} Event`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{event.type}</h3>
                    <p className="text-sm opacity-90">{event.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-green-800 font-semibold text-sm">{event.guests} guests</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white font-semibold text-sm">{event.budget}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-green-900 mb-6">Happy Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jennifer & Mark", text: "Grace made our wedding day absolutely perfect! Every detail was flawless and stress-free.", rating: 5, event: "Wedding" },
              { name: "TechCorp Inc.", text: "Our corporate gala was a huge success thanks to Grace's meticulous planning and creativity.", rating: 5, event: "Corporate Event" },
              { name: "The Williams Family", text: "My daughter's 16th birthday party was beyond our dreams. Grace truly understands her clients.", rating: 5, event: "Birthday Party" }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Quote className="text-emerald-300 mb-4" size={32} />
                  <p className="text-green-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="font-semibold text-green-900">{testimonial.name}</p>
                  <p className="text-sm text-emerald-600">{testimonial.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-green-900 mb-6">Let's Plan Together</h2>
            <p className="text-xl text-green-700">Ready to create your perfect event? Let's discuss your vision</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <Phone className="text-emerald-600" size={24} />
                <div>
                  <h3 className="font-semibold text-green-900">Phone</h3>
                  <p className="text-green-700">+1 (312) 555-EVENT</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <Mail className="text-emerald-600" size={24} />
                <div>
                  <h3 className="font-semibold text-green-900">Email</h3>
                  <p className="text-green-700">grace@events.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <MessageCircle className="text-emerald-600" size={24} />
                <div>
                  <h3 className="font-semibold text-green-900">WhatsApp</h3>
                  <p className="text-green-700">+1 (312) 555-EVENT</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-green-900 mb-6">Start Planning</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <select className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Select Event Type</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Anniversary</option>
                  <option>Other Celebration</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    className="p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input 
                    type="number" 
                    placeholder="Guest Count" 
                    className="p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <textarea 
                  placeholder="Tell me about your dream event..." 
                  rows={4}
                  className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4">
                  Send Event Inquiry
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

export default EventPlanner;
