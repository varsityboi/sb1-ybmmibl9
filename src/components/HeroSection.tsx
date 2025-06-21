import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Badge } from './ui/badge';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-24">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-6 py-3 bg-white/20 backdrop-blur-sm border-white/30">
            <Calendar className="w-4 h-4 mr-2" />
            Past Event • CSTC Tech Club
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            AI & Machine Learning Workshop
          </h1>
          <p className="text-2xl md:text-3xl mb-6 opacity-90 font-light">
            March 15, 2024 • South Asian University
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg mb-12 opacity-80">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 mr-2" />
              SAU Tech Lab, New Delhi
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 mr-2" />
              9:00 AM - 6:00 PM
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 mr-2" />
              120 Attendees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};