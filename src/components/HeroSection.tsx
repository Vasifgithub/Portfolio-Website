import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, MapPin, Calendar, Award, Sparkles, Code, Cloud } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl opacity-50"></div>
        
        {/* Stationary Tech Icons with subtle glow */}
        <div className="absolute top-1/4 left-1/5">
          <div className="relative">
            <Code className="w-8 h-8 text-blue-400/50" />
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-sm -z-10"></div>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4">
          <div className="relative">
            <Cloud className="w-8 h-8 text-purple-400/50" />
            <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-sm -z-10"></div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-cyan-400/50" />
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-sm -z-10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-blue-400 group">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-16"></div>
                <span className="text-sm font-semibold tracking-wider uppercase transition-all duration-300 group-hover:text-blue-300">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-indigo-300 transition-all duration-500">
                  Vasif Uravakonda
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-gray-300 font-medium">
                  CSE AIML Student at <span className="text-white font-semibold">Vellore Institute of Technology</span>  - Amaravati
                </p>
                <p className="text-lg lg:text-xl text-gray-400">Aspiring Software Engineer</p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-green-900/30 to-green-800/30 px-4 py-2 rounded-full border border-green-700/50 hover:border-green-500/70 transition-all duration-300 group">
                    <Award className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                    <span className="text-green-300 font-medium group-hover:text-green-200 transition-colors">
                      AWS Certified Cloud Practitioner
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-900/30 to-orange-800/30 px-4 py-2 rounded-full border border-orange-700/50 hover:border-orange-500/70 transition-all duration-300 group">
                    <span className="text-2xl">🤖</span>
                    <span className="text-orange-300 font-medium group-hover:text-orange-200 transition-colors">
                      AI/ML Enthusiast
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="group-hover:translate-x-1 transition-transform">View My Work</span>
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-black-400 hover:bg-blue-600/30 hover:text-blue px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="group-hover:translate-x-1 transition-transform">Get In Touch</span>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 font-medium hover:text-white transition-colors">
                  Available for opportunities
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <MapPin className="w-4 h-4 text-blue-400 hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 font-medium hover:text-white transition-colors">
                  Amaravati, India
                </span>
              </div>
              
            </div>
          </div>

          {/* Enhanced Profile Image Section - Moved further up */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right -mt-20"> {/* Changed to -mt-12 */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 -z-10"></div>
              
              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gray-700/50 hover:border-blue-500/70 transition-all duration-500 group">
                <img
                  src="/lovable-uploads/1b540a14-c4ae-4ee4-b478-49f17d28ada0.png"
                  alt="Vasif Uravakonda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Initials Badge - Enhanced Size */}
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl border-4 border-gray-800 hover:rotate-12 transition-transform duration-500 group">
                <span className="text-white font-bold text-xl">VU</span>
                {/* Added subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-8 -right-6 bg-gray-800 rounded-full p-3 shadow-lg z-20 border border-gray-700 hover:border-orange-400 transition-all duration-300 hover:shadow-orange-500/20">
                <Award className="w-5 h-5 text-orange-400 hover:text-orange-300 transition-colors" />
                <div className="absolute -z-10 inset-0 rounded-full bg-orange-500/10 blur-sm"></div>
              </div>
              <div className="absolute -top-4 -left-4 bg-gray-800 rounded-full p-3 shadow-lg z-20 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-blue-500/20">
                <span className="text-xl hover:scale-110 transition-transform">🎓</span>
                <div className="absolute -z-10 inset-0 rounded-full bg-blue-500/10 blur-sm"></div>
              </div>
              <div className="absolute bottom-8 -left-6 bg-gray-800 rounded-full p-3 shadow-lg z-20 border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-green-500/20">
                <Code className="w-5 h-5 text-green-400 hover:text-green-300 transition-colors" />
                <div className="absolute -z-10 inset-0 rounded-full bg-green-500/10 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm font-medium hover:text-white transition-colors">
            Scroll to explore
          </span>
          <div className="animate-bounce bg-gray-800 rounded-full p-2 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <ArrowDown className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;