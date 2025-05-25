import FitnessTrainerHeader from "@/components/FitnessTrainerHeader";
import FitnessTrainerFooter from "@/components/FitnessTrainerFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trophy, Heart, Dumbbell, Target, Zap, Star, Quote, Phone, Mail, MessageCircle, Calendar } from "lucide-react";

const FitnessTrainer = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-inter">
      <FitnessTrainerHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-white/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Dumbbell className="text-white" size={24} />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2">
                  NASM Certified Personal Trainer
                </Badge>
              </div>
              
              <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">
                MARCUS
                <br />
                <span className="text-yellow-300">STRONG</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Transform your body and mind through personalized fitness training. 
                Specializing in strength training, weight loss, and athletic performance with 10+ years experience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <MapPin size={20} className="text-yellow-300" />
                  <div>
                    <p className="text-sm opacity-80">Location</p>
                    <p className="font-semibold">Miami, FL</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Trophy size={20} className="text-yellow-300" />
                  <div>
                    <p className="text-sm opacity-80">Certified</p>
                    <p className="font-semibold">NASM-CPT</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Heart size={20} className="text-yellow-300" />
                  <div>
                    <p className="text-sm opacity-80">Success</p>
                    <p className="font-semibold">200+ Clients</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full">
                  <Calendar className="mr-2" size={20} />
                  START TRAINING
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg rounded-full">
                  VIEW RESULTS
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=800&fit=crop" 
                  alt="Fitness Training"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <Zap className="mx-auto mb-2" size={32} />
                    <p className="font-bold text-2xl">200+</p>
                    <p className="text-sm">Transformations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="programs" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6">TRAINING PROGRAMS</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Customized fitness solutions for every goal and fitness level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Dumbbell className="text-white" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-500">$80</p>
                    <p className="text-gray-400 text-sm">per session</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Personal Training</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  One-on-one sessions tailored to your specific goals and fitness level
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-orange-500" />
                    <span className="text-sm text-gray-300">Customized workout plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-orange-500" />
                    <span className="text-sm text-gray-300">Nutrition guidance included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-orange-500" />
                    <span className="text-sm text-gray-300">Progress tracking & analytics</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Book Session</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="text-white" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-red-500">$25</p>
                    <p className="text-gray-400 text-sm">per class</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Group Classes</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  High-energy group workouts and bootcamp sessions
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-red-500" />
                    <span className="text-sm text-gray-300">HIIT & strength circuits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-red-500" />
                    <span className="text-sm text-gray-300">Team motivation & support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-red-500" />
                    <span className="text-sm text-gray-300">All fitness levels welcome</span>
                  </div>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600">Join Class</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="text-white" size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-yellow-500">$150</p>
                    <p className="text-gray-400 text-sm">per month</p>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Online Coaching</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Custom workout plans and nutrition guidance delivered virtually
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-yellow-500" />
                    <span className="text-sm text-gray-300">Weekly video check-ins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-yellow-500" />
                    <span className="text-sm text-gray-300">Custom meal planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-yellow-500" />
                    <span className="text-sm text-gray-300">24/7 app support</span>
                  </div>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">Start Online</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Transformation Gallery */}
      <section id="transformations" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">SUCCESS STORIES</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Real transformations from real people who trusted the process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", before: "165lbs", after: "135lbs", time: "6 months", goal: "Weight Loss" },
              { name: "Mike R.", before: "180lbs", after: "195lbs", time: "8 months", goal: "Muscle Gain" },
              { name: "Lisa K.", before: "Beginner", after: "Marathon", time: "12 months", goal: "Endurance" },
              { name: "John D.", before: "35% BF", after: "12% BF", time: "10 months", goal: "Body Recomp" },
              { name: "Emma S.", before: "150lbs", after: "140lbs", time: "4 months", goal: "Strength" },
              { name: "David L.", before: "200lbs", after: "175lbs", time: "7 months", goal: "Athletic Performance" }
            ].map((transformation, index) => (
              <Card key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:shadow-2xl transition-all duration-500">
                <img 
                  src={`https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&q=80&crop=entropy&cs=tinysrgb&seed=${index + 10}`}
                  alt={`Transformation ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{transformation.name}</h3>
                      <p className="text-gray-400 text-sm">{transformation.goal} - {transformation.time}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-orange-500 font-bold text-lg">{transformation.before}</p>
                      <p className="text-gray-400 text-xs">Before</p>
                    </div>
                    <div>
                      <p className="text-orange-500 font-bold text-lg">→</p>
                      <p className="text-gray-400 text-xs">Journey</p>
                    </div>
                    <div>
                      <p className="text-orange-500 font-bold text-lg">{transformation.after}</p>
                      <p className="text-gray-400 text-xs">After</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">CLIENT FEEDBACK</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Martinez", text: "Marcus completely transformed my relationship with fitness. Best investment I've ever made!", rating: 5, program: "Personal Training" },
              { name: "Mike Rodriguez", text: "The group classes are incredible! So much energy and motivation. I actually look forward to working out now.", rating: 5, program: "Group Classes" },
              { name: "Lisa Thompson", text: "Online coaching was perfect for my busy schedule. Marcus kept me accountable and the results speak for themselves.", rating: 5, program: "Online Coaching" }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gray-700 border-gray-600">
                <CardContent className="p-0">
                  <Quote className="text-orange-400 mb-4" size={32} />
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-orange-400">{testimonial.program}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">START YOUR TRANSFORMATION</h2>
            <p className="text-xl text-gray-300">Ready to change your life? Let's discuss your fitness goals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl">
                <Phone className="text-orange-500" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Call or Text</h3>
                  <p className="text-gray-300">+1 (305) 555-STRONG</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl">
                <Mail className="text-orange-500" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">marcus@strong.fit</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl">
                <MessageCircle className="text-orange-500" size={24} />
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <p className="text-gray-300">+1 (305) 555-STRONG</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">GET STARTED TODAY</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <select className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select Your Goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Building</option>
                  <option>Athletic Performance</option>
                  <option>General Fitness</option>
                </select>
                <textarea 
                  placeholder="Tell me about your fitness goals..." 
                  rows={4}
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 font-bold">
                  START TRAINING
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FitnessTrainerFooter />
    </div>
  );
};

export default FitnessTrainer;
