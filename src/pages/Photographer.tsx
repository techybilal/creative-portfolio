import PhotographerHeader from "@/components/PhotographerHeader";
import PhotographerFooter from "@/components/PhotographerFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Heart, Award, Aperture, Focus, Star, Quote, Phone, Mail, MessageCircle, Calendar } from "lucide-react";

const Photographer = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <PhotographerHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 text-white animate-fade-in-up">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 backdrop-blur-sm">
                  Professional Photographer
                </Badge>
              </div>
              
              <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
                David <span className="text-blue-400">Lens</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Capturing life's precious moments through the art of photography. 
                Specializing in weddings, portraits, and lifestyle photography with 8+ years of experience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <MapPin size={16} className="text-blue-400" />
                  </div>
                  <span>Seattle, WA</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Award size={16} className="text-blue-400" />
                  </div>
                  <span>Award Winner 2023</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Heart size={16} className="text-blue-400" />
                  </div>
                  <span>500+ Happy Clients</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-lg">
                  <Calendar className="mr-2" size={20} />
                  Book Session
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-6 text-lg rounded-lg">
                  View Gallery
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=600&fit=crop" 
                  alt="Photography"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <Camera className="text-blue-600" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Capturing Moments</p>
                      <p className="text-gray-600 text-xs">Since 2016</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Aperture className="text-blue-600" size={32} />
              <h2 className="font-playfair text-4xl font-bold text-gray-900">Photography Services</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional photography for every occasion and milestone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-red-100 to-pink-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="text-red-500 group-hover:scale-110 transition-transform duration-300" size={48} />
                </div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2">
                  <span className="text-red-600 font-bold text-sm">$2,500</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Wedding Photography</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Complete wedding day coverage with engagement session included
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">8 hours coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">500+ edited photos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">Online gallery & prints</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-red-500 hover:bg-red-600">Book Wedding Package</Button>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="text-blue-500 group-hover:scale-110 transition-transform duration-300" size={48} />
                </div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2">
                  <span className="text-blue-600 font-bold text-sm">$300</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Portrait Sessions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Professional headshots and family portrait sessions
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">1-2 hour session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">50+ edited photos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">Print releases included</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600">Book Portrait Session</Button>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="text-purple-500 group-hover:scale-110 transition-transform duration-300" size={48} />
                </div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2">
                  <span className="text-purple-600 font-bold text-sm">$200/hr</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Event Photography</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Corporate events and special celebrations
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">Hourly rates available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">Same-day previews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Focus size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">Quick turnaround</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-purple-500 hover:bg-purple-600">Get Event Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">Through My Lens</h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">A collection of captured moments and stories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group relative aspect-square overflow-hidden bg-gray-200 hover:shadow-lg transition-all duration-300 rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop&q=80&crop=entropy&cs=tinysrgb&seed=${item}`}
                  alt={`Photo ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/50 transition-all duration-300 rounded-lg"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-xs font-mono bg-black/50 px-2 py-1 rounded">
                    f/2.8 • 1/250s • ISO 400
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">Client Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Emma & James", text: "David captured our wedding day perfectly! Every moment was beautifully preserved.", rating: 5, type: "Wedding" },
              { name: "Tech Corp", text: "Professional and creative. Our corporate event photos exceeded expectations.", rating: 5, type: "Corporate" },
              { name: "The Johnson Family", text: "Amazing family portraits. David made everyone feel comfortable and natural.", rating: 5, type: "Family" }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Quote className="text-blue-300 mb-4" size={32} />
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.type} Photography</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">Let's Create Together</h2>
            <p className="text-xl text-gray-600">Ready to capture your special moments? Get in touch today</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Call or Text</h3>
                  <p className="text-gray-700">+1 (206) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">david@lens.photo</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <MessageCircle className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-700">+1 (206) 555-0123</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Book Your Session</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Session Type</option>
                  <option>Wedding Photography</option>
                  <option>Portrait Session</option>
                  <option>Event Photography</option>
                  <option>Corporate Photography</option>
                </select>
                <textarea 
                  placeholder="Tell me about your vision..." 
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <PhotographerFooter />
    </div>
  );
};

export default Photographer;
