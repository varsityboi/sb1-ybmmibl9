import React from 'react';
import { Button } from './ui/button';

export const CallToAction: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 shadow-2xl">
        <h3 className="text-4xl font-bold mb-6">Join Our Next Event!</h3>
        <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Don't miss out on future workshops and events. Be part of our growing community 
          of tech enthusiasts at CSTC Tech Club, South Asian University.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all duration-300">
            Join CSTC Community
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all duration-300">
            View Upcoming Events
          </Button>
        </div>
      </div>
    </div>
  );
};