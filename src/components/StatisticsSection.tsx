import React from 'react';
import { Award, Star, Brain } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

export const StatisticsSection: React.FC = () => {
  const attendeeCount = useAnimatedCounter(120, 2000);
  const satisfactionRate = useAnimatedCounter(98, 2500);

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
          <CardContent className="pt-8 pb-8">
            <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <div className="text-5xl font-bold text-blue-600 mb-3">{attendeeCount}</div>
            <p className="text-gray-600 text-lg font-medium">Total Attendees</p>
            <Progress value={(attendeeCount / 120) * 100} className="mt-6 h-2" />
          </CardContent>
        </Card>
        
        <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-yellow-50 border-0 shadow-lg">
          <CardContent className="pt-8 pb-8">
            <div className="bg-yellow-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Star className="w-10 h-10 text-yellow-600" />
            </div>
            <div className="text-5xl font-bold text-yellow-600 mb-3">{satisfactionRate}%</div>
            <p className="text-gray-600 text-lg font-medium">Satisfaction Rate</p>
            <Progress value={satisfactionRate} className="mt-6 h-2" />
          </CardContent>
        </Card>
        
        <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
          <CardContent className="pt-8 pb-8">
            <div className="bg-purple-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Brain className="w-10 h-10 text-purple-600" />
            </div>
            <div className="text-5xl font-bold text-purple-600 mb-3">8</div>
            <p className="text-gray-600 text-lg font-medium">Hours of Learning</p>
            <Progress value={100} className="mt-6 h-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};