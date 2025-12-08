'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Companies', href: '/company-details' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

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
      
      <header className="bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] sticky top-0 z-100">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#333] hover:bg-[#f3f4f6] hover:text-[#4FC3F7] transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center lg:flex-1">
              <div className="flex items-center">
                <i className="w-6 h-6 rounded-full bg-[#4FC3F7] flex items-center justify-center"></i>
                <a href="/" className="ml-2 text-xl font-semibold text-[#4FC3F7] hover:opacity-80 transition-opacity">
                  Hire Hood
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav 
              ref={navRef}
              onMouseLeave={handleNavLeave}
              className="hidden lg:flex items-center gap-[5px] bg-white/90 backdrop-blur-[10px] p-[5px] rounded-[50px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-white/30 relative"
            >
              <div 
                className="absolute top-[5px] left-0 h-[calc(100%-10px)] bg-black/5 rounded-[50px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0 pointer-events-none"
                style={{
                  width: `${highlightStyle.width}px`,
                  transform: `translateX(${highlightStyle.left}px)`,
                  opacity: highlightStyle.opacity
                }}
              ></div>

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link relative z-1 py-2 px-4 rounded-[50px] no-underline font-medium transition-colors duration-300 flex items-center justify-center overflow-hidden text-[14.4px] whitespace-nowrap hover:text-[#4FC3F7] ${
                    isActive(item.href) ? 'active font-semibold text-[#4FC3F7]' : 'text-[#333]'
                  }`}
                  onMouseEnter={handleLinkHover}
                  onClick={(e) => createRipple(e)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Auth Buttons Desktop */}
            <div className="hidden lg:flex items-center gap-3 ml-6">
              <a
                href="/login"
                className="py-2 px-6 rounded-[50px] text-[#333] hover:text-[#4FC3F7] font-medium transition-colors duration-300"
              >
                Login
              </a>
              <a
                href="/register"
                className="py-[12.8px] px-12 rounded-[1584px] bg-black text-white font-black uppercase hover:bg-[#1a1a1a] transition-all duration-200 group relative overflow-hidden border-2"
              >
                <span className="mix-blend-difference relative z-10">Signup</span>
                <span className="absolute inset-0 bg-[linear-gradient(90deg,#fff_25%,transparent_0,transparent_50%,#fff_0,#fff_75%,transparent_0)] translate-y-full transition-transform duration-200 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_25%,#fff_0,#fff_50%,transparent_0,transparent_75%,#fff_0)] -translate-y-full transition-transform duration-200 group-hover:translate-y-0 -z-1"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mobile-menu-open">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-[#eff6ff] text-[#4FC3F7] font-semibold'
                      : 'text-[#333] hover:bg-[#f9fafb] hover:text-[#4FC3F7]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent my-2"></div>
              
              <a
                href="/login"
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/login')
                    ? 'bg-[#eff6ff] text-[#4FC3F7] font-semibold'
                    : 'text-[#333] hover:bg-[#f9fafb] hover:text-[#4FC3F7]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              
              <a
                href="/register"
                className="block mt-3 py-3.5 px-4 rounded-xl bg-black text-white font-bold text-center hover:bg-[#1a1a1a] transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Signup
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
