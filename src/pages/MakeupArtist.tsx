import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Sparkles, MapPin, Phone, Mail, Instagram, Heart, Brush, Camera, Calendar, MessageCircle, Award, Users } from "lucide-react";

const MakeupArtist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-white font-inter">
      <Navigation />
      
      {/* Hero Section - Glamorous with flowing elements */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-rose-200 to-pink-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full blur-xl opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-block p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4">
                <Brush className="w-8 h-8 text-pink-600" />
              </div>
              <Badge className="bg-pink-100 text-pink-800 border-pink-200 text-sm px-4 py-2 rounded-full">
                Beauty Transformation Expert
              </Badge>
            </div>
            
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gray-900">Isabella</span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">Rose</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Creating stunning beauty transformations for weddings, special events, and photoshoots. 
              Where artistry meets elegance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-pink-600" />
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles size={18} className="text-pink-600" />
                <span>6+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart size={18} className="text-pink-600" />
                <span>500+ Happy Clients</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                Book Your Look
              </Button>
              <Button variant="outline" className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 px-10 py-6 text-lg rounded-full">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Elegant cards with gradients */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">Beauty Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From everyday glam to special occasions, I create looks that enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 opacity-90"></div>
              <CardContent className="relative p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">Bridal Makeup</h3>
                <p className="leading-relaxed mb-6 opacity-90">
                  Your perfect wedding day look with trial session included
                </p>
                <p className="text-3xl font-bold">$350</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-600 opacity-90"></div>
              <CardContent className="relative p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="text-white" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">Photoshoot Glam</h3>
                <p className="leading-relaxed mb-6 opacity-90">
                  Editorial and commercial makeup for photography
                </p>
                <p className="text-3xl font-bold">$200</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 opacity-90"></div>
              <CardContent className="relative p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-white" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">Special Events</h3>
                <p className="leading-relaxed mb-6 opacity-90">
                  Perfect for parties, galas, and special occasions
                </p>
                <p className="text-3xl font-bold">$150</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - Circular frames */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-4">Beauty Transformations</h2>
            <p className="text-xl text-gray-600">Browse my latest makeup artistry work</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group relative">
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={`https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&q=80&crop=entropy&cs=tinysrgb&seed=${item}`}
                    alt={`Makeup Look ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="text-white text-center">
                      <h3 className="font-semibold">Natural Glam</h3>
                      <p className="text-sm opacity-90">Bridal</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">Client Love</h2>
            <p className="text-xl text-gray-600">What my beautiful clients say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-pink-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Isabella is absolutely amazing! She made me feel like a princess on my wedding day. Her attention to detail is incredible."
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={`https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=60&h=60&fit=crop&crop=face`}
                      alt="Client"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                      <p className="text-sm text-gray-600">Bride 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">Let's Create Magic Together</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready for your transformation? Book your session today and let's create something beautiful.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Studio Address</h4>
                    <p className="text-gray-600">123 Beauty Lane, Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Phone className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Me</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Mail className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">isabella@beautyrose.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full shadow-lg">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Me
                </Button>
                <Button variant="outline" className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-full">
                  <Calendar className="mr-2" size={20} />
                  Book Session
                </Button>
              </div>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-6 text-center">Book Your Session</h3>
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 transition-colors"
                    />
                  </div>
                  <div>
                    <select className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 transition-colors bg-white">
                      <option>Select Service</option>
                      <option>Bridal Makeup</option>
                      <option>Photoshoot Glam</option>
                      <option>Special Events</option>
                    </select>
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Tell me about your vision..."
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 transition-colors h-32"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 rounded-xl shadow-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-playfair text-4xl font-bold text-gray-900 mb-8">Follow My Journey</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={`https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&seed=${item + 10}`}
                      alt="Instagram post"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full">
                  <Instagram className="mr-2" size={20} />
                  @isabellarose
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-4xl font-bold text-gray-900 mb-8">Awards & Recognition</h3>
              <div className="space-y-6">
                {[
                  { title: "Best Bridal Makeup Artist 2024", org: "LA Beauty Awards" },
                  { title: "Celebrity Makeup Artist of the Year", org: "Hollywood Beauty Magazine" },
                  { title: "Top 10 Makeup Artists in LA", org: "Allure Magazine" }
                ].map((award, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{award.title}</h4>
                      <p className="text-gray-600">{award.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MakeupArtist;
