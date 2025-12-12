'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useTheme,
  useMediaQuery,
  Chip,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WorkIcon from '@mui/icons-material/Work';

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
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

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
    <AppBar 
      position="sticky" 
      elevation={2}
      sx={{ 
        bgcolor: 'white', 
        color: 'text.primary',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        height: { xs: 64, md: 70 },
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 70 }, height: '100%' }}>
          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              sx={{ 
                mr: 2, 
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.lighter',
                  color: 'primary.dark',
                }
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}

          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Avatar sx={{ bgcolor: 'primary.main', mr: 1.5, width: 32, height: 32 }}>
              <WorkIcon sx={{ fontSize: 20 }} />
            </Avatar>
            <Button
              component={Link}
              href="/"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'primary.main',
                textTransform: 'none',
                '&:hover': { 
                  bgcolor: 'transparent', 
                  color: 'primary.dark',
                }
              }}
            >
              HireHood
            </Button>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              component="nav"
              ref={navRef}
              onMouseLeave={handleNavLeave}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                bgcolor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                padding: '6px',
                borderRadius: '50px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
                border: '1px solid rgba(255,255,255,0.3)',
                position: 'relative',
                height: '52px',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '6px',
                  left: 0,
                  height: '40px',
                  bgcolor: 'primary.lighter',
                  borderRadius: '50px',
                  transition: 'all 0.3s cubic-bezier(0.25,1,0.5,1)',
                  pointerEvents: 'none',
                  width: `${highlightStyle.width}px`,
                  transform: `translateX(${highlightStyle.left}px)`,
                  opacity: highlightStyle.opacity,
                }}
              />

              {navigation.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  disableRipple
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onMouseEnter={handleLinkHover as any}
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    height: '40px',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    minWidth: 'auto',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    whiteSpace: 'nowrap',
                    color: isActive(item.href) ? 'primary.main' : 'text.primary',
                    '&:hover': { 
                      color: 'primary.main',
                      bgcolor: 'transparent',
                    },
                    '&:active': {
                      transform: 'none',
                      boxShadow: 'none',
                    },
                    transition: 'color 0.3s',
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {/* Auth Buttons Desktop */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 3 }}>
              <Button
                component={Link}
                href="/login"
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: '50px',
                  color: 'text.primary',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': { 
                    color: 'primary.main', 
                    bgcolor: 'primary.lighter',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                href="/register"
                variant="contained"
                color="primary"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: 2,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={isMenuOpen && isMobile}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Avatar sx={{ bgcolor: 'primary.main', mr: 1.5 }}>
              <WorkIcon />
            </Avatar>
            <Box sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'primary.main' }}>
              Hire Hood
            </Box>
          </Box>
          
          <List>
            {navigation.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    bgcolor: isActive(item.href) ? 'primary.lighter' : 'transparent',
                    '&:hover': { 
                      bgcolor: isActive(item.href) ? 'primary.lighter' : 'action.hover',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: isActive(item.href) ? 600 : 500,
                        color: isActive(item.href) ? 'primary.main' : 'text.primary',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 2, pt: 2 }}>
            <Button
              component={Link}
              href="/login"
              fullWidth
              sx={{
                mb: 1.5,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                color: 'text.primary',
                '&:hover': { 
                  bgcolor: 'primary.lighter', 
                  color: 'primary.main',
                },
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Button>
            <Button
              component={Link}
              href="/register"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': { 
                  bgcolor: 'primary.dark',
                },
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
