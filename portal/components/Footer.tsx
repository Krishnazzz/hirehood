'use client';

import { useState } from 'react';

export default function Footer() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Hire Hood helped me find my dream job! The platform is so different.",
      author: "Sarah K.",
      image: "https://via.placeholder.com/40x40"
    },
    {
      text: "Amazing experience! Found my perfect role within weeks.",
      author: "John D.",
      image: "https://via.placeholder.com/40x40"
    },
    {
      text: "The best job platform I've ever used. Highly recommended!",
      author: "Emily R.",
      image: "https://via.placeholder.com/40x40"
    }
  ];

  return (
    <footer className="bg-white border-t border-[#eee] pt-[60px] pb-[30px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div>
              <div className="flex items-center text-xl font-semibold text-[#333] mb-[15px]">
                <i className="w-6 h-6 rounded-full bg-[#4FC3F7] flex items-center justify-center mr-2"></i>
                <span>Hire Hood</span>
              </div>
              <p className="text-[#666] leading-[25.6px]">
                Your trusted destination for exceptional careers opportunities across diverse fields.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#333] font-semibold mb-5">Job Seekers</h4>
            <ul className="list-none m-0 p-0">
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Browse Jobs
                </a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Browse Jobs
                </a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Saved Jobs
                </a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Legal
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#333] font-semibold mb-5">Employers</h4>
            <ul className="list-none m-0 p-0">
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Post a Job
                </a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Profile
                </a>
              </li>
              <li className="mb-2.5">
                <a href="/404" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Saved Jobs
                </a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Employer Dashboard
                </a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Terms
                </a>
              </li>
              <li className="mb-2.5">
                <a href="#" className="text-[#666] no-underline transition-colors duration-300 hover:text-[#4FC3F7]">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#333] font-semibold mb-5">Testimonials</h4>
            <div className="bg-[#f8f9fc] p-5 rounded-[10px] relative">
              <p className="text-[#666] text-sm mb-[15px] leading-[21px]">
                {testimonials[activeTestimonial].text} - {testimonials[activeTestimonial].author}
              </p>
              <div>
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  className="w-10 h-10 rounded-full mb-[15px]"
                />
              </div>
              <div className="flex gap-[5px] mb-2.5">
                {testimonials.map((_, index) => (
                  <span 
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeTestimonial === index ? 'bg-[#4FC3F7] w-6' : 'bg-[#ddd]'
                    }`}
                  ></span>
                ))}
              </div>
              <a href="#" className="text-[#4FC3F7] no-underline text-sm font-medium hover:underline">
                See all
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-[30px] border-t border-[#eee]">
          <p className="text-[#999] text-sm">
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
