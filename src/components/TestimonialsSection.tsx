
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael R.",
    location: "Denver, CO",
    content: "When I lost my housing, I didn't know where to turn. Homie connected me with local shelters and helped me navigate the system to get emergency assistance. The step-by-step guidance was exactly what I needed.",
    rating: 5
  },
  {
    name: "Sarah T.",
    location: "Atlanta, GA",
    content: "I was struggling to find resources for my family after a job loss. This tool helped me locate food banks, apply for benefits, and create a plan to get back on my feet. The personalized approach made all the difference.",
    rating: 5
  },
  {
    name: "James L.",
    location: "Portland, OR",
    content: "The job search assistance was incredible. Homie helped me update my resume, find open positions that matched my skills, and prepare for interviews. I'm now employed and rebuilding my life.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-cyber-dark to-cyber-dark-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Real <span className="text-cyber-magenta text-glow-magenta">Success</span> Stories
          </h2>
          <p className="text-gray-300">
            See how Social Safety Net GPT has helped people navigate challenging situations and find the support they need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glassmorphism rounded-lg p-8 transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-cyber-yellow fill-cyber-yellow' : 'text-gray-500'}`}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-cyber-blue/20 flex items-center justify-center text-cyber-blue font-bold">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
