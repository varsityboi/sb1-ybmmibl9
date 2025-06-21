import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { StarRating } from './StarRating';
import { reviews } from '../data/eventData';

export const ReviewsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 mb-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        What Students Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Avatar className="w-16 h-16 mr-4">
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg">
                    {review.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{review.name}</h4>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              </div>
              
              <StarRating rating={review.rating} className="mb-4" />
              
              <p className="text-gray-700 italic leading-relaxed">"{review.comment}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};