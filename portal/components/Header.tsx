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
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        .mobile-menu-open {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        @media (max-width: 992px) {
          body.menu-open {
            overflow: hidden;
          }
        }
      `}</style>
      
      <header className="bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] sticky top-0 z-100 relative">
        <div className="flex justify-between items-center py-[15px] px-5 max-w-[1200px] mx-auto relative z-50">
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
            className={`relative flex items-center gap-[5px] bg-white backdrop-blur-[10px] p-[5px] rounded-[50px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-white/30 lg:flex ${isMenuOpen ? 'flex mobile-menu-open' : 'hidden'} lg:flex-row flex-col lg:static absolute top-[calc(100%+12px)] left-4 right-4 lg:rounded-[50px] rounded-2xl lg:p-[5px] py-6 px-3 lg:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] lg:border-white/30 border-[#e5e7eb] lg:bg-white/90 bg-white max-h-[calc(100vh-100px)] overflow-y-auto`}
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
              className={`nav-link relative z-1 lg:py-2 py-3.5 lg:px-4 px-4 lg:rounded-[50px] rounded-xl no-underline font-medium transition-all duration-300 flex items-center lg:justify-center justify-start overflow-hidden lg:text-[14.4px] text-base whitespace-nowrap hover:text-[#4FC3F7] lg:w-auto w-full lg:hover:bg-transparent hover:bg-[#f9fafb] ${isActive('/') ? 'active font-semibold text-[#4FC3F7] lg:bg-transparent bg-[#eff6ff]' : 'text-[#333]'}`}
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
              className={`nav-link relative z-1 lg:py-2 py-3.5 lg:px-4 px-4 lg:rounded-[50px] rounded-xl no-underline font-medium transition-all duration-300 flex items-center lg:justify-center justify-start overflow-hidden lg:text-[14.4px] text-base whitespace-nowrap hover:text-[#4FC3F7] lg:w-auto w-full lg:hover:bg-transparent hover:bg-[#f9fafb] ${isActive('/jobs') ? 'active font-semibold text-[#4FC3F7] lg:bg-transparent bg-[#eff6ff]' : 'text-[#333]'}`}
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
              className={`nav-link relative z-1 lg:py-2 py-3.5 lg:px-4 px-4 lg:rounded-[50px] rounded-xl no-underline font-medium transition-all duration-300 flex items-center lg:justify-center justify-start overflow-hidden lg:text-[14.4px] text-base whitespace-nowrap hover:text-[#4FC3F7] lg:w-auto w-full lg:hover:bg-transparent hover:bg-[#f9fafb] ${isActive('/company-details') ? 'active font-semibold text-[#4FC3F7] lg:bg-transparent bg-[#eff6ff]' : 'text-[#333]'}`}
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
              className={`nav-link relative z-1 lg:py-2 py-3.5 lg:px-4 px-4 lg:rounded-[50px] rounded-xl no-underline font-medium transition-all duration-300 flex items-center lg:justify-center justify-start overflow-hidden lg:text-[14.4px] text-base whitespace-nowrap hover:text-[#4FC3F7] lg:w-auto w-full lg:hover:bg-transparent hover:bg-[#f9fafb] ${isActive('/about') ? 'active font-semibold text-[#4FC3F7] lg:bg-transparent bg-[#eff6ff]' : 'text-[#333]'}`}
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
              className={`nav-link relative z-1 lg:py-2 py-3.5 lg:px-4 px-4 lg:rounded-[50px] rounded-xl no-underline font-medium transition-all duration-300 flex items-center lg:justify-center justify-start overflow-hidden lg:text-[14.4px] text-base whitespace-nowrap hover:text-[#4FC3F7] lg:w-auto w-full lg:hover:bg-transparent hover:bg-[#f9fafb] ${isActive('/contact') ? 'active font-semibold text-[#4FC3F7] lg:bg-transparent bg-[#eff6ff]' : 'text-[#333]'}`}
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
              className={`nav-link relative z-1 lg:py-2 py-3.5 lg:px-4 px-4 lg:rounded-[50px] rounded-xl no-underline font-medium transition-all duration-300 flex items-center lg:justify-center justify-start overflow-hidden lg:text-[14.4px] text-base whitespace-nowrap hover:text-[#4FC3F7] lg:w-auto w-full lg:hover:bg-transparent hover:bg-[#f9fafb] ${isActive('/faq') ? 'active font-semibold text-[#4FC3F7] lg:bg-transparent bg-[#eff6ff]' : 'text-[#333]'}`}
              onMouseEnter={handleLinkHover}
              onClick={(e) => {
                createRipple(e);
                setIsMenuOpen(false);
              }}
            >
              FAQ
            </a>
            
            <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent my-2"></div>
            
            <a 
              href="/login" 
              className={`nav-link relative z-1 lg:py-2 py-3.5 lg:px-4 px-4 lg:rounded-[50px] rounded-xl no-underline font-medium transition-all duration-300 flex items-center lg:justify-center justify-start overflow-hidden lg:text-[14.4px] text-base whitespace-nowrap hover:text-[#4FC3F7] lg:w-auto w-full lg:hover:bg-transparent hover:bg-[#f9fafb] ${isActive('/login') ? 'active font-semibold text-[#4FC3F7] lg:bg-transparent bg-[#eff6ff]' : 'text-[#333]'}`}
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
              className="btn-signup relative z-1 lg:rounded-[1584px] rounded-xl border-2 overflow-hidden lg:py-[12.8px] py-3.5 lg:px-12 px-4 bg-black text-white cursor-pointer lg:font-black font-bold leading-6 lg:uppercase capitalize no-underline transition-all duration-200 flex items-center justify-center whitespace-nowrap hover:text-white hover:bg-[#1a1a1a] group lg:w-auto w-full lg:mt-0 mt-3"
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
