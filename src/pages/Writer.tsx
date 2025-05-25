import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PenTool, MapPin, Award, Star, BookOpen, Edit3, FileText, Phone, Mail, MessageCircle, Calendar, Clock, Trophy, Users } from "lucide-react";

const Writer = () => {
  return (
    <div className="min-h-screen bg-amber-50 font-inter">
      <Navigation />
      
      {/* Hero Section - Literary and warm */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 text-amber-200/30 text-6xl font-serif">"</div>
          <div className="absolute bottom-20 right-20 text-amber-200/30 text-6xl font-serif rotate-180">"</div>
          <div className="absolute top-1/2 left-1/4 w-px h-24 bg-amber-300/20 rotate-12"></div>
          <div className="absolute top-1/3 right-1/3 w-px h-32 bg-amber-300/20 -rotate-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-block p-4 bg-amber-200/50 rounded-full mb-4">
                <PenTool className="w-8 h-8 text-amber-700" />
              </div>
              <Badge className="bg-amber-200 text-amber-800 border-amber-300 px-4 py-2 rounded-full">
                Content Creator & Copywriter
              </Badge>
            </div>
            
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-amber-900 mb-8 leading-tight">
              Emma Writer
            </h1>
            
            <p className="text-2xl text-amber-800 mb-8 leading-relaxed italic max-w-3xl mx-auto">
              "Words have the power to inspire, persuade, and transform. 
              Let me help you find yours."
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <MapPin size={20} className="text-amber-600" />
                <span className="text-amber-800 font-medium">Austin, TX</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <Award size={20} className="text-amber-600" />
                <span className="text-amber-800 font-medium">Published Author</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <Star size={20} className="text-amber-600" />
                <span className="text-amber-800 font-medium">100+ Projects</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Hire Me
              </Button>
              <Button variant="outline" className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-10 py-6 text-lg rounded-full">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Book/manuscript style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-amber-600"></div>
              <BookOpen className="text-amber-600" size={32} />
              <div className="w-16 h-px bg-amber-600"></div>
            </div>
            <h2 className="font-playfair text-5xl font-bold text-amber-900 mb-4">Writing Services</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Professional writing solutions for businesses and individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-yellow-50 to-amber-50 border-2 border-amber-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <PenTool className="text-amber-600" size={36} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-amber-200 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </div>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-amber-900 mb-4">Copywriting</h3>
                <p className="text-amber-700 leading-relaxed mb-6">
                  Sales pages, email campaigns, and marketing copy that converts
                </p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="text-3xl font-bold text-amber-800 mb-2">$100/hr</p>
                  <p className="text-amber-600 text-sm">Starting rate</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-orange-50 to-amber-50 border-2 border-amber-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Edit3 className="text-orange-600" size={36} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-amber-900 mb-4">Content Strategy</h3>
                <p className="text-amber-700 leading-relaxed mb-6">
                  Blog posts, articles, and comprehensive content planning
                </p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="text-3xl font-bold text-amber-800 mb-2">$1,500</p>
                  <p className="text-amber-600 text-sm">per month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-yellow-50 to-orange-50 border-2 border-amber-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="text-yellow-600" size={36} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-amber-900 mb-4">Brand Storytelling</h3>
                <p className="text-amber-700 leading-relaxed mb-6">
                  Company narratives and brand voice development
                </p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="text-3xl font-bold text-amber-800 mb-2">$2,000</p>
                  <p className="text-amber-600 text-sm">per project</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Published works style */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-amber-900 mb-6">Published Works</h2>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-amber-700">A selection of my recent writing projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Art of Persuasion", type: "Marketing Guide", year: "2024" },
              { title: "Digital Transformation Stories", type: "Case Studies", year: "2024" },
              { title: "Wellness in the Workplace", type: "Content Series", year: "2023" },
              { title: "Small Business Success", type: "E-book", year: "2023" },
              { title: "Social Media Mastery", type: "Blog Series", year: "2023" },
              { title: "Brand Voice Guidelines", type: "Strategy Document", year: "2022" }
            ].map((work, index) => (
              <Card key={index} className="group bg-white border-2 border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <FileText className="text-amber-600" size={24} />
                    </div>
                    <Badge className="bg-amber-100 text-amber-700 text-xs">
                      {work.year}
                    </Badge>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-amber-600 text-sm mb-4">{work.type}</p>
                  <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-100 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-amber-600"></div>
              <Edit3 className="text-amber-600" size={32} />
              <div className="w-16 h-px bg-amber-600"></div>
            </div>
            <h2 className="font-playfair text-5xl font-bold text-amber-900 mb-4">My Writing Process</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">From initial concept to final delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and brand voice", icon: BookOpen },
              { step: "02", title: "Research", desc: "Deep dive into your industry and target market", icon: Star },
              { step: "03", title: "Create", desc: "Crafting compelling content that resonates", icon: PenTool },
              { step: "04", title: "Refine", desc: "Editing and polishing until it's perfect", icon: Edit3 }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-xl font-bold">
                  {item.step}
                </div>
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <item.icon className="text-amber-600" size={28} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-amber-900 mb-2">{item.title}</h3>
                <p className="text-amber-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-amber-900 mb-6">What Clients Say</h2>
            <div className="w-24 h-px bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-white border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-amber-800 mb-6 leading-relaxed italic">
                    "Emma's writing transformed our brand voice completely. Her ability to capture our essence and communicate it clearly to our audience is remarkable."
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&seed=${item}`}
                      alt="Client"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-amber-900">James Rodriguez</h4>
                      <p className="text-sm text-amber-600">CEO, Tech Startup</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-5xl font-bold mb-6">Let's Tell Your Story</h2>
                <p className="text-xl text-amber-200 leading-relaxed">
                  Ready to elevate your content? Let's discuss how we can bring your ideas to life through powerful words.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Home Office</h4>
                    <p className="text-amber-200">321 Writer's Lane, Downtown Austin, TX 78701</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-amber-200">+1 (512) 555-WORD</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp</h4>
                    <p className="text-amber-200">+1 (512) 555-WORD</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Available</h4>
                    <p className="text-amber-200">Mon-Fri: 8am-6pm CST, Emergency projects 24/7</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full shadow-lg">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Chat
                </Button>
                <Button variant="outline" className="border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-amber-900 px-8 py-4 rounded-full">
                  <Calendar className="mr-2" size={20} />
                  Schedule Call
                </Button>
              </div>
            </div>

            <Card className="bg-white text-amber-900 border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="font-playfair text-3xl font-bold mb-6 text-center">Start Your Project</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="border-amber-300 focus:border-amber-600" />
                    <Input placeholder="Last Name" className="border-amber-300 focus:border-amber-600" />
                  </div>
                  <Input type="email" placeholder="Email Address" className="border-amber-300 focus:border-amber-600" />
                  <Input type="tel" placeholder="Phone Number" className="border-amber-300 focus:border-amber-600" />
                  <Input placeholder="Company/Organization" className="border-amber-300 focus:border-amber-600" />
                  <select className="w-full p-3 border border-amber-300 rounded focus:border-amber-600 bg-white">
                    <option>Project Type</option>
                    <option>Website Copy</option>
                    <option>Blog Content</option>
                    <option>Marketing Materials</option>
                    <option>Brand Storytelling</option>
                    <option>Technical Writing</option>
                    <option>Other</option>
                  </select>
                  <Input placeholder="Project Budget" className="border-amber-300 focus:border-amber-600" />
                  <Textarea placeholder="Tell me about your project goals and vision..." className="border-amber-300 focus:border-amber-600 h-32" />
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-full shadow-lg">
                    Send Project Brief
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-playfair text-4xl font-bold text-amber-900 mb-8">Recognition & Awards</h3>
              <div className="space-y-6">
                {[
                  { title: "Content Marketing Writer of the Year", year: "2024", org: "Digital Marketing Awards" },
                  { title: "Best Business Blog", year: "2023", org: "Austin Business Journal" },
                  { title: "Excellence in Copywriting", year: "2023", org: "Texas Writers Association" }
                ].map((award, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Trophy className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-900 text-lg">{award.title}</h4>
                      <p className="text-amber-600">{award.year} • {award.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-4xl font-bold text-amber-900 mb-8">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "100+", label: "Projects Completed", icon: FileText },
                  { number: "50+", label: "Happy Clients", icon: Users },
                  { number: "5", label: "Years Experience", icon: Star },
                  { number: "1M+", label: "Words Written", icon: PenTool }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-3xl font-bold text-amber-900 mb-2">{stat.number}</h4>
                    <p className="text-amber-700 font-medium">{stat.label}</p>
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

export default Writer;
