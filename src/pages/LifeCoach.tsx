import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Award, Users, Sun, Compass, Lightbulb, Phone, Mail, MessageCircle, Quote, Star, Calendar } from "lucide-react";

const LifeCoach = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-25 to-blue-50 font-inter">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-indigo-600" />
                </div>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 px-4 py-1">
                  ICF Certified Life Coach
                </Badge>
              </div>
            </div>
            
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gray-800">Sarah</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Mindful
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering individuals to unlock their potential and create meaningful, fulfilling lives. 
              Where transformation begins from within and authentic growth flourishes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <MapPin size={16} className="text-indigo-600" />
                </div>
                <span className="text-gray-700 font-medium">Portland, OR</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award size={16} className="text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">ICF Certified (PCC)</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users size={16} className="text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">200+ Transformations</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Star size={16} className="text-indigo-600" />
                </div>
                <span className="text-gray-700 font-medium">8+ Years Experience</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                <Calendar className="mr-2" size={20} />
                Book Discovery Session
              </Button>
              <Button variant="outline" className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-10 py-6 text-lg rounded-full">
                Learn My Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mindful Journey Section */}
      <section id="process" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sun className="text-indigo-600" size={32} />
              <h2 className="font-playfair text-5xl font-bold text-gray-900">Your Journey to Growth</h2>
              <Sun className="text-indigo-600" size={32} />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A personalized, evidence-based approach to help you discover your authentic self and create lasting positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Compass className="text-indigo-600" size={36} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  1
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Discover & Assess</h3>
              <p className="text-gray-600 leading-relaxed">
                Uncover your core values, strengths, and limiting beliefs through deep self-reflection and proven assessment tools
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Lightbulb className="text-purple-600" size={36} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Transform & Align</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop new perspectives, habits, and strategies that align with your authentic self and desired life outcomes
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Sun className="text-blue-600" size={36} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Thrive & Sustain</h3>
              <p className="text-gray-600 leading-relaxed">
                Live confidently in your purpose with sustainable practices for continued growth, resilience, and fulfillment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">Coaching Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personalized coaching programs designed to help you achieve sustainable transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-white/90 backdrop-blur-sm border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="text-indigo-600" size={36} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">1-on-1 Coaching</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Personalized coaching sessions tailored to your specific goals, challenges, and growth areas
                </p>
                <div className="border-t border-gray-100 pt-6 mb-6">
                  <p className="text-4xl font-bold text-indigo-600 mb-2">$120</p>
                  <p className="text-gray-500">per session</p>
                </div>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>90-minute deep-dive sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Personalized action plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Email support between sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Assessment tools & resources</span>
                  </div>
                </div>
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600">Book Individual Session</Button>
              </CardContent>
            </Card>

            <Card className="group bg-white/90 backdrop-blur-sm border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="text-purple-600" size={36} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Group Coaching</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Small group sessions for shared growth, community support, and collective wisdom
                </p>
                <div className="border-t border-gray-100 pt-6 mb-6">
                  <p className="text-4xl font-bold text-purple-600 mb-2">$60</p>
                  <p className="text-gray-500">per session</p>
                </div>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Small groups (4-6 people)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Peer learning and support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Monthly group activities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Online community access</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Join Group Program</Button>
              </CardContent>
            </Card>

            <Card className="group bg-white/90 backdrop-blur-sm border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Lightbulb className="text-blue-600" size={36} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Intensive Program</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  3-month comprehensive transformation program with deep work and lasting change
                </p>
                <div className="border-t border-gray-100 pt-6 mb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">$1,200</p>
                  <p className="text-gray-500">3-month program</p>
                </div>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>8 individual sessions included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Weekly check-ins & support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Comprehensive assessment suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Workbooks & guided exercises</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Start Transformation</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">Transformation Stories</h2>
            <p className="text-xl text-gray-600">Real people, real breakthroughs, lasting change</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jennifer Clark", text: "Sarah helped me find my authentic voice and build the confidence to pursue my dream career. Life-changing!", rating: 5, program: "Individual Coaching" },
              { name: "Marcus Rodriguez", text: "The group coaching created such a supportive environment. I learned so much from Sarah and my peers.", rating: 5, program: "Group Coaching" },
              { name: "Lisa Thompson", text: "The 3-month intensive was exactly what I needed. Sarah's approach is both gentle and powerful.", rating: 5, program: "Intensive Program" }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-indigo-100 hover:shadow-lg transition-shadow rounded-2xl">
                <CardContent className="p-0">
                  <Quote className="text-indigo-300 mb-4" size={32} />
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-indigo-600">{testimonial.program}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">Begin Your Journey</h2>
            <p className="text-xl text-gray-600">Ready to create meaningful change in your life? Let's explore how coaching can support your growth</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
                <Phone className="text-indigo-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-700">+1 (503) 555-MIND</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
                <Mail className="text-indigo-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">sarah@mindfulcoaching.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
                <MessageCircle className="text-indigo-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-700">+1 (503) 555-MIND</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Free Discovery Call</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Not sure if coaching is right for you? Book a complimentary 30-minute discovery call to explore your goals and see if we're a good fit.
                </p>
                <Button className="bg-indigo-500 hover:bg-indigo-600 text-white w-full">
                  Schedule Free Call
                </Button>
              </div>
            </div>

            <div className="bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-sm">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Start Your Transformation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="p-4 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="p-4 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80"
                />
                <select className="w-full p-4 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80">
                  <option>What interests you most?</option>
                  <option>Individual Coaching</option>
                  <option>Group Coaching</option>
                  <option>3-Month Intensive</option>
                  <option>Free Discovery Call</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <select className="p-4 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80">
                    <option>Primary Goal</option>
                    <option>Career Transition</option>
                    <option>Relationship Growth</option>
                    <option>Personal Development</option>
                    <option>Life Purpose</option>
                    <option>Confidence Building</option>
                  </select>
                  <select className="p-4 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80">
                    <option>Preferred Schedule</option>
                    <option>Weekday Mornings</option>
                    <option>Weekday Evenings</option>
                    <option>Weekend Sessions</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <textarea 
                  placeholder="Tell me about your current situation and what you'd like to change..." 
                  rows={4}
                  className="w-full p-4 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4">
                  Send My Inquiry
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

export default LifeCoach;
