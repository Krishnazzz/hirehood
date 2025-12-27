'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Box, Typography, Chip } from '@mui/material';

interface Tag {
  text: string;
  href: string;
  left: string;
  top: string;
  depth: number;
}

const tags: Tag[] = [
  { text: 'Full Stack Developer', href: '/jobs?search=Full Stack Developer', left: '10.8%', top: '20.6%', depth: 1.6 },
  { text: 'Front End Developer', href: '/jobs?search=Front End Developer', left: '60.1%', top: '11.6%', depth: 1.22 },
  { text: 'iOS Developer', href: '/jobs?search=iOS Developer', left: '21.6%', top: '72.8%', depth: 1.77 },
  { text: 'Android Developer', href: '/jobs?search=Android Developer', left: '29.8%', top: '27%', depth: 1.31 },
  { text: 'React Developer', href: '/jobs?search=React Developer', left: '31.9%', top: '81%', depth: 1.09 },
  { text: 'Node JS Developer', href: '/jobs?search=Node JS Developer', left: '43.7%', top: '28.6%', depth: 0.79 },
  { text: 'Vue JS Developer', href: '/jobs?search=Vue JS Developer', left: '89.8%', top: '80.3%', depth: 0.56 },
  { text: 'Flutter Developer', href: '/jobs?search=Flutter Developer', left: '33%', top: '85.8%', depth: 1.3 },
  { text: 'Blockchain Developer', href: '/jobs?search=Blockchain Developer', left: '42.7%', top: '77.2%', depth: 1.75 },
  { text: 'New York', href: '/jobs?location=New York', left: '74.6%', top: '85.6%', depth: 1.45 },
  { text: 'San Francisco', href: '/jobs?location=San Francisco', left: '14.9%', top: '25.5%', depth: 1.04 },
  { text: 'Los Angeles', href: '/jobs?location=Los Angeles', left: '71.6%', top: '83.5%', depth: 1.35 },
  { text: 'Austin', href: '/jobs?location=Austin', left: '49.2%', top: '14%', depth: 1.99 },
  { text: 'Seattle', href: '/jobs?location=Seattle', left: '87.9%', top: '72.4%', depth: 1.83 },
  { text: 'Boston', href: '/jobs?location=Boston', left: '17%', top: '48.5%', depth: 1.17 },
  { text: 'Denver', href: '/jobs?location=Denver', left: '32.4%', top: '12.6%', depth: 1.08 },
  { text: 'AI / Machine Learning', href: '/jobs?search=AI', left: '80.5%', top: '24.2%', depth: 1.82 },
  { text: 'Web3', href: '/jobs?search=Web3', left: '61.7%', top: '48.2%', depth: 1.44 },
  { text: 'Data Science', href: '/jobs?search=Data Science', left: '63.7%', top: '22.9%', depth: 1.99 },
  { text: 'DevOps', href: '/jobs?search=DevOps', left: '85.5%', top: '89.6%', depth: 1.04 },
  { text: 'Cloud Computing', href: '/jobs?search=Cloud', left: '31%', top: '66%', depth: 1.35 },
  { text: 'Cybersecurity', href: '/jobs?search=Cybersecurity', left: '32.9%', top: '10%', depth: 1.95 },
  { text: 'UI/UX Design', href: '/jobs?search=UI UX Design', left: '71.3%', top: '20.6%', depth: 1.38 },
  { text: 'Product Manager', href: '/jobs?search=Product Manager', left: '46.9%', top: '79.1%', depth: 1.49 },
  { text: 'E-commerce', href: '/jobs?search=E-commerce', left: '84.9%', top: '62%', depth: 0.72 },
];

export default function HeroWithTags() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate mouse position relative to center
      const x = (e.clientX - rect.left - centerX) / centerX;
      const y = (e.clientY - rect.top - centerY) / centerY;
      
      setMousePos({ x: x * 100, y: y * 100 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headingText = "Find what's next";
  const chars = headingText.split('');

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '500px', md: '600px' },
        backgroundColor: '#0a0a0a',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Fade overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.5) 100%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      />

      {/* Main scene */}
      <Box
        ref={sceneRef}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      >
        {/* Center content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            transform: `translate3d(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px, 0px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              marginBottom: '32px',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            HireHood
          </Box>

          {/* Animated heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {chars.map((char, index) => (
              <Box
                key={index}
                component="span"
                sx={{
                  display: 'inline-block',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${index * 0.03}s`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </Box>
            ))}
          </Typography>
        </Box>

        {/* Floating tags */}
        {tags.map((tag, index) => (
          <Chip
            key={index}
            component={Link}
            href={tag.href}
            label={tag.text}
            clickable
            sx={{
              position: 'absolute',
              left: tag.left,
              top: tag.top,
              fontSize: { xs: '0.75rem', md: '0.875rem' },
              fontWeight: 500,
              height: { xs: 28, md: 36 },
              padding: { xs: '4px 8px', md: '6px 12px' },
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              transform: `translate3d(${-mousePos.x * tag.depth}px, ${-mousePos.y * tag.depth}px, 0px)`,
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${index * 0.02}s`,
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: '#2563eb',
                transform: `translate3d(${-mousePos.x * tag.depth}px, ${-mousePos.y * tag.depth}px, 0px) scale(1.05)`,
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
              },
              '& .MuiChip-label': {
                padding: 0,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
