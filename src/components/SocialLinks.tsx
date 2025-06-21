import React from 'react';
import { ExternalLink, Instagram, Facebook, Twitter, Linkedin, Github, Globe } from 'lucide-react';
import { socialLinks } from '../data/eventData';

const iconMap = {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
  Website: Globe
};

export const SocialLinks: React.FC = () => {
  return (
    <div className="container mx-auto px-6 mb-16">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Connect with CSTC Tech Club</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((social) => {
          const IconComponent = iconMap[social.name as keyof typeof iconMap];
          return (
            <a
              key={social.name}
              href={social.url}
              className={`group flex items-center space-x-3 ${social.color} text-white px-6 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              <IconComponent className="w-6 h-6" />
              <span className="font-medium">{social.name}</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          );
        })}
      </div>
    </div>
  );
};