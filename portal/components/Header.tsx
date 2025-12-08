'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({ width: 0, left: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateHighlight = (element: HTMLElement) => {
      if (!navRef.current || window.innerWidth <= 992) return;
      
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = element.getBoundingClientRect();
      
      setHighlightStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
        opacity: 1
      });
    };

    const activeLink = navRef.current?.querySelector('.nav-link.active') as HTMLElement;
    if (activeLink) {
      setTimeout(() => updateHighlight(activeLink), 100);
    }

    const handleResize = () => {
      if (activeLink) updateHighlight(activeLink);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    if (!navRef.current || window.innerWidth <= 992) return;
    
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();
    
    setHighlightStyle({
      width: linkRect.width,
      left: linkRect.left - navRect.left,
      opacity: 1
    });
  };

  const handleNavLeave = () => {
    const activeLink = navRef.current?.querySelector('.nav-link.active') as HTMLElement;
    if (activeLink && window.innerWidth > 992) {
      const navRect = navRef.current!.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setHighlightStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
        opacity: 1
      });
    } else {
      setHighlightStyle(prev => ({ ...prev, opacity: 0 }));
    }
  };

  const createRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) existingRipple.remove();
    
    button.appendChild(circle);
    
    setTimeout(() => circle.remove(), 600);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(79, 195, 247, 0.3);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }
      `}</style>
      
      <header className="bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] sticky top-0 z-100">
        <div className="flex justify-between items-center py-[15px] px-5 max-w-[1200px] mx-auto">
          <div className="flex items-center">
            <div className="flex items-center text-xl font-semibold text-[#333]">
              <i className="w-6 h-6 rounded-full bg-[#4FC3F7] flex items-center justify-center mr-2"></i>
              <a href="/" className="font-semibold text-[#4FC3F7] relative z-1 py-2 px-4 rounded-[50px] no-underline transition-colors duration-300 flex items-center justify-center overflow-hidden text-[14.4px] whitespace-nowrap">
                <span>Hire Hood</span>
              </a>
            </div>
          </div>
          
          {/* Dynamic Navigation */}
          <nav 
            ref={navRef}
            onMouseLeave={handleNavLeave}
            className={`relative flex items-center gap-[5px] bg-white/90 backdrop-blur-[10px] p-[5px] rounded-[50px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-white/30 lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:flex-row flex-col lg:static absolute top-full left-0 right-0 lg:rounded-[50px] rounded-none lg:p-[5px] p-5 lg:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]`}
          >
            <div 
              className="absolute top-[5px] left-0 h-[calc(100%-10px)] bg-black/5 rounded-[50px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0 pointer-events-none lg:block hidden"
              style={{
                width: `${highlightStyle.width}px`,
                transform: `translateX(${highlightStyle.left}px)`,
                opacity: highlightStyle.opacity
              }}
            ></div>
            
            <a 
              href="/" 
              className={`nav-link relative z-1 lg:py-2 py-3 lg:px-4 px-5 lg:rounded-[50px] rounded-lg no-underline font-medium transition-colors duration-300 flex items-center lg:justify-center justify-start overflow-hidden text-[14.4px] whitespace-nowrap hover:text-[#4FC3F7] ${isActive('/') ? 'active font-semibold text-[#4FC3F7]' : 'text-[#333]'}`}
              onMouseEnter={handleLinkHover}
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              Home
            </a>
            
            <a 
              href="/jobs" 
              className={`nav-link relative z-1 lg:py-2 py-3 lg:px-4 px-5 lg:rounded-[50px] rounded-lg no-underline font-medium transition-colors duration-300 flex items-center lg:justify-center justify-start overflow-hidden text-[14.4px] whitespace-nowrap hover:text-[#4FC3F7] ${isActive('/jobs') ? 'active font-semibold text-[#4FC3F7]' : 'text-[#333]'}`}
              onMouseEnter={handleLinkHover}
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              Jobs
            </a>
            
            <a 
              href="/company-details" 
              className={`nav-link relative z-1 lg:py-2 py-3 lg:px-4 px-5 lg:rounded-[50px] rounded-lg no-underline font-medium transition-colors duration-300 flex items-center lg:justify-center justify-start overflow-hidden text-[14.4px] whitespace-nowrap hover:text-[#4FC3F7] ${isActive('/company-details') ? 'active font-semibold text-[#4FC3F7]' : 'text-[#333]'}`}
              onMouseEnter={handleLinkHover}
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              Companies
            </a>
            
            <a 
              href="/about" 
              className={`nav-link relative z-1 lg:py-2 py-3 lg:px-4 px-5 lg:rounded-[50px] rounded-lg no-underline font-medium transition-colors duration-300 flex items-center lg:justify-center justify-start overflow-hidden text-[14.4px] whitespace-nowrap hover:text-[#4FC3F7] ${isActive('/about') ? 'active font-semibold text-[#4FC3F7]' : 'text-[#333]'}`}
              onMouseEnter={handleLinkHover}
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              About
            </a>
            
            <a 
              href="/contact" 
              className={`nav-link relative z-1 lg:py-2 py-3 lg:px-4 px-5 lg:rounded-[50px] rounded-lg no-underline font-medium transition-colors duration-300 flex items-center lg:justify-center justify-start overflow-hidden text-[14.4px] whitespace-nowrap hover:text-[#4FC3F7] ${isActive('/contact') ? 'active font-semibold text-[#4FC3F7]' : 'text-[#333]'}`}
              onMouseEnter={handleLinkHover}
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              Contact
            </a>
            
            <a 
              href="/faq" 
              className={`nav-link relative z-1 lg:py-2 py-3 lg:px-4 px-5 lg:rounded-[50px] rounded-lg no-underline font-medium transition-colors duration-300 flex items-center lg:justify-center justify-start overflow-hidden text-[14.4px] whitespace-nowrap hover:text-[#4FC3F7] ${isActive('/faq') ? 'active font-semibold text-[#4FC3F7]' : 'text-[#333]'}`}
              onMouseEnter={handleLinkHover}
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              FAQ
            </a>
            
            <a 
              href="/login" 
              className={`nav-link relative z-1 lg:py-2 py-3 lg:px-4 px-5 lg:rounded-[50px] rounded-lg no-underline font-medium transition-colors duration-300 flex items-center lg:justify-center justify-start overflow-hidden text-[14.4px] whitespace-nowrap hover:text-[#4FC3F7] ${isActive('/login') ? 'active font-semibold text-[#4FC3F7]' : 'text-[#333]'}`}
              onMouseEnter={handleLinkHover}
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              Login
            </a>
            
            <a 
              href="/register" 
              className="btn-signup relative z-1 rounded-[1584px] border-2 overflow-hidden py-[12.8px] px-12 bg-black text-white cursor-pointer font-black leading-6 uppercase no-underline transition-all duration-200 flex items-center justify-center whitespace-nowrap hover:text-white group"
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              <span className="mix-blend-difference">Signup</span>
              <span className="absolute inset-0 bg-[linear-gradient(90deg,#fff_25%,transparent_0,transparent_50%,#fff_0,#fff_75%,transparent_0)] translate-y-full transition-transform duration-200 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_25%,#fff_0,#fff_50%,transparent_0,transparent_75%,#fff_0)] -translate-y-full transition-transform duration-200 group-hover:translate-y-0 -z-1"></span>
            </a>
          </nav>
          
          <div 
            className={`hamburger lg:hidden flex flex-col cursor-pointer gap-1 ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-[25px] h-[3px] bg-[#333] transition-all duration-300 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-[25px] h-[3px] bg-[#333] transition-all duration-300 rounded-sm ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-[25px] h-[3px] bg-[#333] transition-all duration-300 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </div>
      </header>
    </>
  );
}
