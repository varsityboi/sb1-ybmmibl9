import React from 'react';
import { Brain, Code, Zap, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { learningOutcomes, technologies } from '../data/eventData';

const iconMap = {
  'Neural Network Mastery': Brain,
  'Practical Coding Skills': Code,
  'AI Implementation': Zap,
  'Project Portfolio': Target
};

export const EventOverview: React.FC = () => {
  return (
    <div className="container mx-auto px-6 mb-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Event Overview
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A transformative learning experience that brought together passionate minds in the heart of Delhi's tech ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Workshop Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">45+</div>
                <p className="text-blue-100">Neural Networks Built</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30+</div>
                <p className="text-blue-100">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">120</div>
                <p className="text-blue-100">Certificates Awarded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">8</div>
                <p className="text-blue-100">Industry Mentors</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Learning Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => {
                const IconComponent = iconMap[outcome.title as keyof typeof iconMap];
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">{outcome.title}</h4>
                        <p className="text-gray-600 text-sm">{outcome.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Technologies Covered</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="space-y-6">
          {/* Main Featured Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" 
              alt="AI Workshop Main Session"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Main Workshop Session</h4>
                <p className="text-blue-200">Interactive AI learning experience</p>
              </div>
            </div>
          </div>

          {/* Secondary Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" 
                alt="Coding Session"
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-semibold text-sm">Live Coding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" 
                alt="Data Analysis"
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-semibold text-sm">Data Analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Features */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-800">Workshop Highlights</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Hands-on ML projects with real datasets</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Industry expert speakers from Delhi's top tech companies</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Project showcase and peer learning sessions</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Networking with 120+ passionate developers</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};