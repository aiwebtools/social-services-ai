
import React from 'react';
import { Search, FileSearch, HandHeart, Briefcase, BookOpen, Shield } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Comprehensive Data Search",
    description: "Access up-to-date information on shelters, food banks, and support services through extensive web searches with verified results."
  },
  {
    icon: FileSearch,
    title: "Resource Matching",
    description: "Get personalized recommendations for local resources based on your specific situation and immediate needs."
  },
  {
    icon: HandHeart,
    title: "Immediate Assistance",
    description: "Receive actionable steps to address your situation with practical guidance and support tailored to your circumstances."
  },
  {
    icon: Briefcase,
    title: "Employment Assistance",
    description: "Access job search help, resume building, and application guidance to improve employment prospects."
  },
  {
    icon: BookOpen,
    title: "Legal Rights Information",
    description: "Learn about your legal rights and get assistance with legal matters such as eviction prevention and advocacy."
  },
  {
    icon: Shield,
    title: "Personal Safety Planning",
    description: "Develop strategies for personal safety and well-being with practical tips and resource connections."
  }
];

const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-dark-blue/30 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            How <span className="text-cyber-blue text-glow">Homie</span> Works For You
          </h2>
          <p className="text-gray-300">
            Our AI assistant combines advanced technologies with human-centered design to provide practical help when you need it most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-lg p-6 transition-all duration-300 hover:shadow-neon-blue group"
            >
              <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-cyber-blue/10 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white transition-all">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
