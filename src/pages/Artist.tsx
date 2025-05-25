import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brush, MapPin, Award, Star, Palette, Scissors, Paintbrush, Phone, Mail, MessageCircle, Quote, Calendar } from "lucide-react";

const Artist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-cyan-900 text-white font-inter">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-3 h-20 bg-teal-400/30 rotate-12 blur-sm"></div>
          <div className="absolute top-32 right-32 w-2 h-16 bg-cyan-400/40 -rotate-12 blur-sm"></div>
          <div className="absolute bottom-24 left-1/4 w-4 h-24 bg-blue-400/20 rotate-45 blur-sm"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-2 bg-teal-300/30 rotate-90 blur-sm"></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-3 bg-cyan-300/40 -rotate-45 blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex gap-2">
                  <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
                <Badge className="bg-teal-500/20 text-teal-200 border-teal-500/30 backdrop-blur-sm px-4 py-2">
                  Visual Artist & Mixed Media Creator
                </Badge>
              </div>
              
              <h1 className="font-playfair text-7xl md:text-8xl font-bold mb-8 leading-tight">
                Luna
                <br />
                <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Arts
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Creating unique handcrafted art pieces that tell stories and inspire emotions. 
                Where imagination meets reality through mixed media, abstract expression, and contemporary design.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-teal-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} className="text-teal-400" />
                    <span className="text-teal-200 font-semibold">Studio</span>
                  </div>
                  <p className="text-white">Santa Fe, NM</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Award size={20} className="text-cyan-400" />
                    <span className="text-cyan-200 font-semibold">Featured</span>
                  </div>
                  <p className="text-white">5 Gallery Shows</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Star size={20} className="text-blue-400" />
                    <span className="text-blue-200 font-semibold">Sold</span>
                  </div>
                  <p className="text-white">200+ Pieces</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-teal-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Palette size={20} className="text-teal-400" />
                    <span className="text-teal-200 font-semibold">Medium</span>
                  </div>
                  <p className="text-white">Mixed Media</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl">
                  <Calendar className="mr-2" size={20} />
                  Commission Art
                </Button>
                <Button variant="outline" className="border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-teal-900 px-8 py-6 text-lg rounded-2xl">
                  View Gallery
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=250&h=300&fit=crop" 
                      alt="Art Piece 1"
                      className="w-full h-72 object-cover rounded-2xl shadow-xl border-2 border-teal-400/20"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=250&h=200&fit=crop&seed=2" 
                      alt="Art Piece 2"
                      className="w-full h-48 object-cover rounded-2xl shadow-xl border-2 border-cyan-400/20"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=250&h=200&fit=crop&seed=3" 
                      alt="Art Piece 3"
                      className="w-full h-48 object-cover rounded-2xl shadow-xl border-2 border-blue-400/20"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=250&h=300&fit=crop&seed=4" 
                      alt="Art Piece 4"
                      className="w-full h-72 object-cover rounded-2xl shadow-xl border-2 border-teal-400/20"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-teal-500 text-white p-4 rounded-xl shadow-xl rotate-3">
                  <Brush size={24} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-white p-4 rounded-xl shadow-xl -rotate-3">
                  <Paintbrush size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-slate-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Palette className="text-teal-400" size={32} />
              <h2 className="font-playfair text-5xl font-bold text-white">Art Services</h2>
              <Brush className="text-cyan-400" size={32} />
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Original artwork and custom pieces for collectors, businesses, and art lovers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-teal-900/80 to-cyan-900/80 border-2 border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                    <Brush className="text-teal-400" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-teal-400">$500+</p>
                    <p className="text-gray-400 text-sm">starting</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Custom Paintings</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Personalized artwork created just for you, capturing your vision and story
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Free consultation included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Multiple size options available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Weekly progress updates</span>
                  </div>
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600">Commission Custom Art</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/80 to-blue-900/80 border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <Award className="text-cyan-400" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-cyan-400">$200-2K</p>
                    <p className="text-gray-400 text-sm">range</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Original Pieces</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  One-of-a-kind artworks ready for collection, each with its own story
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Certificate of authenticity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Professional framing available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Worldwide shipping included</span>
                  </div>
                </div>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Browse Collection</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/80 to-teal-900/80 border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Star className="text-blue-400" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-400">$85</p>
                    <p className="text-gray-400 text-sm">per workshop</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Art Workshops</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Learn painting techniques and creative expression in small groups
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">All materials included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Small group setting (8 max)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Take home your creation</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Join Workshop</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Art Gallery */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-slate-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">Creative Portfolio</h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-teal-400"></div>
              <Scissors className="text-teal-400" size={24} />
              <div className="w-12 h-px bg-teal-400"></div>
            </div>
            <p className="text-xl text-gray-300">Explore my latest artistic expressions and collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ocean Dreams", medium: "Acrylic on Canvas", year: "2024", price: "$1,200", status: "Available" },
              { title: "Urban Pulse", medium: "Mixed Media", year: "2024", price: "$800", status: "Available" },
              { title: "Forest Whispers", medium: "Oil Painting", year: "2023", price: "$1,500", status: "Sold" },
              { title: "Digital Harmony", medium: "Digital Art Print", year: "2023", price: "$600", status: "Available" },
              { title: "Abstract Emotions", medium: "Watercolor", year: "2024", price: "$900", status: "Available" },
              { title: "Cosmic Journey", medium: "Acrylic & Gold Leaf", year: "2023", price: "$1,100", status: "Reserved" },
              { title: "Nature's Pattern", medium: "Mixed Media Collage", year: "2024", price: "$750", status: "Available" },
              { title: "City Lights", medium: "Oil on Canvas", year: "2023", price: "$1,300", status: "Available" }
            ].map((artwork, index) => (
              <Card key={index} className="group bg-slate-800/80 border border-teal-500/20 hover:border-teal-400/40 overflow-hidden transition-all duration-500 backdrop-blur-sm">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&q=80&crop=entropy&cs=tinysrgb&seed=${index + 30}`}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-teal-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {artwork.price}
                  </div>
                  <div className={`absolute top-4 left-4 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold ${
                    artwork.status === 'Available' ? 'bg-green-500/90' : 
                    artwork.status === 'Sold' ? 'bg-red-500/90' : 'bg-yellow-500/90'
                  }`}>
                    {artwork.status}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-playfair text-lg font-bold text-white mb-1">{artwork.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{artwork.medium}</p>
                  <p className="text-teal-400 text-xs">{artwork.year}</p>
                  {artwork.status === 'Available' && (
                    <Button className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-sm py-2">
                      Inquire About Piece
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">Collector Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Mitchell", text: "Luna's artwork transformed our living space. The custom piece perfectly captured our vision.", rating: 5, purchase: "Custom Commission" },
              { name: "Art Gallery of Santa Fe", text: "Luna's mixed media work has been incredibly popular with our collectors. Exceptional talent!", rating: 5, purchase: "Gallery Collection" },
              { name: "Michael Torres", text: "The art workshop was inspiring! Luna's teaching style helped me discover my own creative voice.", rating: 5, purchase: "Workshop" }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-slate-700/80 border-slate-600/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <Quote className="text-teal-400 mb-4" size={32} />
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-teal-400">{testimonial.purchase}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">Let's Create Together</h2>
            <p className="text-xl text-gray-300">Ready to commission your perfect piece or join a workshop? Let's discuss your artistic vision</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-slate-800/80 rounded-xl border border-teal-500/20 backdrop-blur-sm">
                <Phone className="text-teal-400" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Studio Phone</h3>
                  <p className="text-gray-300">+1 (505) 555-ARTS</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-slate-800/80 rounded-xl border border-teal-500/20 backdrop-blur-sm">
                <Mail className="text-teal-400" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">luna@arts.studio</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-slate-800/80 rounded-xl border border-teal-500/20 backdrop-blur-sm">
                <MessageCircle className="text-teal-400" size={24} />
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <p className="text-gray-300">+1 (505) 555-ARTS</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-xl border border-teal-500/20 backdrop-blur-sm">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">Commission Request</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="p-4 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="p-4 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm"
                />
                <select className="w-full p-4 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm">
                  <option>Select Interest</option>
                  <option>Custom Commission</option>
                  <option>Purchase Original Piece</option>
                  <option>Art Workshop</option>
                  <option>Gallery Inquiry</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <select className="p-4 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm">
                    <option>Budget Range</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,000</option>
                    <option>$2,000 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                  <select className="p-4 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm">
                    <option>Preferred Medium</option>
                    <option>Acrylic Painting</option>
                    <option>Oil Painting</option>
                    <option>Mixed Media</option>
                    <option>Digital Art</option>
                    <option>Watercolor</option>
                  </select>
                </div>
                <textarea 
                  placeholder="Describe your artistic vision..." 
                  rows={4}
                  className="w-full p-4 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm"
                ></textarea>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4">
                  Send Art Inquiry
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

export default Artist;
