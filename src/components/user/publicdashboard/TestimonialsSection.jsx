import React from 'react';
import { FiMapPin } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    comment: 'Best pizza in Mumbai! The custom builder is amazing. I can create exactly what I want.',
    image: '👨',
    role: 'Food Blogger',
    location: 'Mumbai'
  },
  {
    name: 'Priya Patel',
    rating: 5,
    comment: 'Love the gluten-free options. Delivered hot and fresh every single time!',
    image: '👩',
    role: 'Fitness Enthusiast',
    location: 'Delhi'
  },
  {
    name: 'Arjun Singh',
    rating: 5,
    comment: 'Fast delivery and great service. The stuffed crust is to die for!',
    image: '👨',
    role: 'Pizza Lover',
    location: 'Bangalore'
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-8 text-sm">Join 10,000+ happy pizza lovers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-red-200">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl mr-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                    <p className="text-[10px] text-gray-400 flex items-center">
                      <FiMapPin className="mr-1" /> {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;