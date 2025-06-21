import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const LocationHighlight: React.FC = () => {
  return (
    <div className="container mx-auto px-6 mb-20">
      <Card className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white overflow-hidden shadow-2xl">
        <CardContent className="p-12 relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6 flex items-center">
              <MapPin className="w-10 h-10 mr-4" />
              Event Location: New Delhi
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Hosted at South Asian University's state-of-the-art Tech Lab in the heart of Delhi, 
              providing the perfect environment for innovation and learning in India's tech capital.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
                <h4 className="font-bold text-xl mb-2">🏛 SAU Tech Lab</h4>
                <p className="opacity-90">Modern facilities & cutting-edge equipment</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
                <h4 className="font-bold text-xl mb-2">🌆 Delhi Location</h4>
                <p className="opacity-90">India's thriving tech ecosystem hub</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
                <h4 className="font-bold text-xl mb-2">🚀 Innovation Center</h4>
                <p className="opacity-90">Vibrant startup & research community</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};