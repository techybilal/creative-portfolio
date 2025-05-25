import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, MapPin, Crown, Users, Shirt, ArrowRight, Phone, Mail, MessageCircle, Instagram, Star, Award, Calendar, Clock } from "lucide-react";

const FashionStylist = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navigation />
      
      {/* Hero Section - High fashion with bold typography */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-purple-900 via-black to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                  Personal Stylist & Fashion Curator
                </Badge>
                <h1 className="font-playfair text-7xl md:text-9xl font-bold leading-none">
                  VICTORIA
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    STYLE
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Transforming wardrobes and boosting confidence through personalized styling. 
                  Where fashion meets identity.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-300 border border-gray-700 px-4 py-2 rounded-full">
                    <MapPin size={16} className="text-purple-400" />
                    <span>New York City</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 border border-gray-700 px-4 py-2 rounded-full">
                    <Crown size={16} className="text-purple-400" />
                    <span>Celebrity Stylist</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 border border-gray-700 px-4 py-2 rounded-full">
                    <Users size={16} className="text-purple-400" />
                    <span>300+ Styled Clients</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-none">
                  STYLE CONSULTATION
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-none">
                  VIEW LOOKBOOKS
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop" 
                    alt="Fashion Look 1"
                    className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop&seed=2" 
                    alt="Fashion Look 2"
                    className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&seed=3" 
                    alt="Fashion Look 3"
                    className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&seed=4" 
                    alt="Fashion Look 4"
                    className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Minimalist cards */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6">STYLING SERVICES</h2>
            <div className="w-24 h-px bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From closet cleanouts to complete wardrobe transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black">
            <div className="group p-12 text-center border-r border-black hover:bg-black hover:text-white transition-all duration-300">
              <div className="w-16 h-16 border-2 border-black group-hover:border-white flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
                <Shirt size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">PERSONAL SHOPPING</h3>
              <p className="leading-relaxed mb-6 text-gray-600 group-hover:text-gray-300">
                Curated shopping experience tailored to your style and budget
              </p>
              <p className="text-2xl font-bold">$200/hr</p>
            </div>

            <div className="group p-12 text-center border-r border-black hover:bg-black hover:text-white transition-all duration-300">
              <div className="w-16 h-16 border-2 border-black group-hover:border-white flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
                <Crown size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">WARDROBE AUDIT</h3>
              <p className="leading-relaxed mb-6 text-gray-600 group-hover:text-gray-300">
                Complete closet organization and styling consultation
              </p>
              <p className="text-2xl font-bold">$350</p>
            </div>

            <div className="group p-12 text-center hover:bg-black hover:text-white transition-all duration-300">
              <div className="w-16 h-16 border-2 border-black group-hover:border-white flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
                <Sparkles size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">EVENT STYLING</h3>
              <p className="leading-relaxed mb-6 text-gray-600 group-hover:text-gray-300">
                Perfect looks for special occasions and red carpet events
              </p>
              <p className="text-2xl font-bold">$500</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - Fashion magazine style */}
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-4">STYLE TRANSFORMATIONS</h2>
            <div className="w-24 h-px bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Before & after styling success stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group relative overflow-hidden aspect-[3/4] bg-black">
                <img 
                  src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop&q=80&crop=entropy&cs=tinysrgb&seed=${item}`}
                  alt={`Style Look ${item}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="font-bold text-xl mb-2">EXECUTIVE CHIC</h3>
                    <div className="w-12 h-px bg-white mx-auto mb-2"></div>
                    <p className="text-sm">BUSINESS • 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrity Clients & Press */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-4">CELEBRITY CLIENTELE</h2>
            <div className="w-24 h-px bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Styling Hollywood's finest</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              "A-List Actor", "Grammy Winner", "Fashion Icon", "Top Model",
              "Director", "Producer", "Influencer", "Entrepreneur"
            ].map((client, index) => (
              <div key={index} className="text-center p-6 border border-gray-800 hover:border-purple-500 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown size={24} />
                </div>
                <h4 className="font-bold text-lg">{client}</h4>
                <p className="text-gray-400 text-sm">Confidential</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="font-playfair text-3xl font-bold mb-8">FEATURED IN</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {["VOGUE", "ELLE", "HARPER'S BAZAAR", "GQ", "VANITY FAIR"].map((mag, index) => (
                <div key={index} className="text-2xl font-bold tracking-wider">{mag}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-4">CLIENT TESTIMONIALS</h2>
            <div className="w-24 h-px bg-purple-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <Card key={item} className="bg-black/50 border-purple-500/30 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-purple-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed italic">
                    "Victoria has an incredible eye for style. She completely transformed my wardrobe and boosted my confidence. Working with her was life-changing."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold">
                      A.C.
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl">Anonymous Celebrity</h4>
                      <p className="text-purple-300">Academy Award Winner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-6xl font-bold mb-6">READY TO TRANSFORM YOUR STYLE?</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Let's create your signature look together. From red carpet moments to everyday elegance.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 border border-gray-200 hover:border-black transition-colors">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">STUDIO LOCATION</h4>
                    <p className="text-gray-600">789 Fashion Ave, SoHo, New York, NY 10013</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 hover:border-black transition-colors">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">PHONE</h4>
                    <p className="text-gray-600">+1 (212) 555-STYLE</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 hover:border-black transition-colors">
                  <div className="w-12 h-12 border-2 border-green-600 flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">WHATSAPP</h4>
                    <p className="text-gray-600">+1 (212) 555-STYLE</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 hover:border-black transition-colors">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">AVAILABILITY</h4>
                    <p className="text-gray-600">By Appointment Only - 24/7 for VIP clients</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-none text-lg font-semibold">
                  <MessageCircle className="mr-2" size={20} />
                  WHATSAPP CONSULT
                </Button>
                <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-none text-lg">
                  <Calendar className="mr-2" size={20} />
                  BOOK SESSION
                </Button>
              </div>
            </div>

            <Card className="bg-black text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="font-playfair text-4xl font-bold mb-8 text-center">STYLE CONSULTATION</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="FIRST NAME" className="bg-transparent border-white text-white placeholder-gray-400 rounded-none" />
                    <Input placeholder="LAST NAME" className="bg-transparent border-white text-white placeholder-gray-400 rounded-none" />
                  </div>
                  <Input type="email" placeholder="EMAIL" className="bg-transparent border-white text-white placeholder-gray-400 rounded-none" />
                  <Input type="tel" placeholder="PHONE" className="bg-transparent border-white text-white placeholder-gray-400 rounded-none" />
                  <select className="w-full p-3 bg-transparent border border-white text-white rounded-none">
                    <option className="bg-black">SERVICE TYPE</option>
                    <option className="bg-black">PERSONAL SHOPPING</option>
                    <option className="bg-black">WARDROBE AUDIT</option>
                    <option className="bg-black">EVENT STYLING</option>
                    <option className="bg-black">VIP PACKAGE</option>
                  </select>
                  <Input placeholder="BUDGET RANGE" className="bg-transparent border-white text-white placeholder-gray-400 rounded-none" />
                  <Textarea placeholder="DESCRIBE YOUR STYLE GOALS..." className="bg-transparent border-white text-white placeholder-gray-400 rounded-none h-32" />
                  <Button className="w-full bg-white text-black hover:bg-gray-100 py-4 rounded-none font-semibold text-lg">
                    SUBMIT REQUEST
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Social */}
      <section className="py-20 bg-gradient-to-br from-black to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-playfair text-4xl font-bold mb-8">AWARDS & RECOGNITION</h3>
              <div className="space-y-6">
                {[
                  { title: "STYLIST OF THE YEAR", year: "2024", org: "Fashion Industry Awards" },
                  { title: "BEST CELEBRITY STYLIST", year: "2023", org: "Hollywood Style Awards" },
                  { title: "INNOVATION IN FASHION", year: "2023", org: "NYC Fashion Week" }
                ].map((award, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-purple-500/30 hover:border-purple-500 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{award.title}</h4>
                      <p className="text-purple-300">{award.year} • {award.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-4xl font-bold mb-8">FOLLOW MY WORK</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&seed=${item + 20}`}
                      alt="Style work"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-none font-semibold">
                <Instagram className="mr-2" size={20} />
                @VICTORIASTYLE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FashionStylist;
