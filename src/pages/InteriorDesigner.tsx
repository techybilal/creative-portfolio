import InteriorDesignerHeader from "@/components/InteriorDesignerHeader";
import InteriorDesignerFooter from "@/components/InteriorDesignerFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, Users, Palette, Ruler, Lightbulb, Star, Quote, Phone, Mail, MessageCircle } from "lucide-react";

const InteriorDesigner = () => {
  return (
    <div className="min-h-screen bg-emerald-50 font-inter">
      <InteriorDesignerHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-teal-200/40 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 mb-6 px-4 py-2">
                ✨ Award-Winning Interior Designer
              </Badge>
              
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-emerald-900 mb-8 leading-tight">
                Elena
                <br />
                <span className="text-emerald-600">Creative</span>
              </h1>
              
              <p className="text-xl text-emerald-800 mb-8 leading-relaxed">
                Transforming spaces into stunning environments that reflect your personality and lifestyle. 
                Where design meets emotion, creating homes that tell your unique story.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4">
                  <MapPin size={20} className="text-emerald-600" />
                  <div>
                    <p className="text-sm text-emerald-700">Based in</p>
                    <p className="font-semibold text-emerald-900">Los Angeles, CA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4">
                  <Award size={20} className="text-emerald-600" />
                  <div>
                    <p className="text-sm text-emerald-700">Experience</p>
                    <p className="font-semibold text-emerald-900">12+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl">
                  <Phone className="mr-2" size={20} />
                  Free Consultation
                </Button>
                <Button variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl">
                  View Portfolio
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=700&fit=crop" 
                alt="Interior Design"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Palette className="text-emerald-600" size={24} />
                  <div>
                    <p className="font-semibold text-emerald-900">200+ Projects</p>
                    <p className="text-sm text-emerald-600">Completed Successfully</p>
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Design Services</h2>
            <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your vision and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-emerald-100 hover:border-emerald-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Palette className="text-emerald-600" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-emerald-900 mb-4">Full Home Design</h3>
                <p className="text-emerald-700 mb-6">Complete interior transformation from concept to completion</p>
                <div className="text-3xl font-bold text-emerald-600 mb-4">$15,000+</div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-emerald-100 hover:border-emerald-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <Ruler className="text-teal-600" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-emerald-900 mb-4">Room Makeover</h3>
                <p className="text-emerald-700 mb-6">Single room redesign with personalized touches</p>
                <div className="text-3xl font-bold text-teal-600 mb-4">$3,500+</div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-emerald-100 hover:border-emerald-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Lightbulb className="text-green-600" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-emerald-900 mb-4">Design Consultation</h3>
                <p className="text-emerald-700 mb-6">Professional advice and design direction</p>
                <div className="text-3xl font-bold text-green-600 mb-4">$150/hr</div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Recent Projects</h2>
            <p className="text-xl text-emerald-700">Spaces that inspire and delight</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden border-emerald-100 hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&seed=${item}`}
                    alt={`Design ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-emerald-900 mb-2">Modern Living Space</h3>
                  <p className="text-emerald-600 text-sm">Contemporary • Los Angeles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Client Love</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", text: "Elena transformed our home beyond our wildest dreams. Every detail was perfect!", rating: 5 },
              { name: "Michael Chen", text: "Professional, creative, and incredibly talented. Highly recommend!", rating: 5 },
              { name: "Lisa Rodriguez", text: "The best decision we made was hiring Elena. Our space is absolutely stunning.", rating: 5 }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-emerald-100">
                <CardContent className="p-0">
                  <Quote className="text-emerald-300 mb-4" size={32} />
                  <p className="text-emerald-700 mb-4">{testimonial.text}</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="font-semibold text-emerald-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-emerald-700">Ready to transform your space? Let's discuss your vision</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <Phone className="text-emerald-600" size={24} />
                <div>
                  <h3 className="font-semibold text-emerald-900">Phone</h3>
                  <p className="text-emerald-700">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <Mail className="text-emerald-600" size={24} />
                <div>
                  <h3 className="font-semibold text-emerald-900">Email</h3>
                  <p className="text-emerald-700">elena@designs.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                <MessageCircle className="text-emerald-600" size={24} />
                <div>
                  <h3 className="font-semibold text-emerald-900">WhatsApp</h3>
                  <p className="text-emerald-700">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-emerald-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell me about your project..." 
                    rows={4}
                    className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <InteriorDesignerFooter />
    </div>
  );
};

export default InteriorDesigner;
