'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Paper,
  Avatar,
  IconButton,
  Divider,
  Chip,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, mb: 6 }}>
          {/* Company Info */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 20px)', md: '1 1 calc(25% - 20px)' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mr: 1.5, width: 36, height: 36 }}>
                <WorkIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                Hire Hood
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
              Your trusted destination for exceptional careers opportunities across diverse fields.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton 
                size="small" 
                sx={{ 
                  color: 'primary.main', 
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    bgcolor: 'primary.lighter',
                    transform: 'translateY(-2px)',
                  } 
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ 
                  color: 'primary.main', 
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    bgcolor: 'primary.lighter',
                    transform: 'translateY(-2px)',
                  } 
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ 
                  color: 'primary.main', 
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    bgcolor: 'primary.lighter',
                    transform: 'translateY(-2px)',
                  } 
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ 
                  color: 'primary.main', 
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    bgcolor: 'primary.lighter',
                    transform: 'translateY(-2px)',
                  } 
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Job Seekers */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 20px)', md: '1 1 calc(25% - 20px)' } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2.5, color: 'text.primary' }}>
              Job Seekers
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['Browse Jobs', 'Browse Categories', 'Saved Jobs', 'Career Advice'].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1.5 }}>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      '&:hover': { 
                        color: 'primary.main', 
                        paddingLeft: '4px',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Employers */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 20px)', md: '1 1 calc(25% - 20px)' } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2.5, color: 'text.primary' }}>
              Employers
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['Post a Job', 'Browse Candidates', 'Employer Dashboard', 'Applications'].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1.5 }}>
                  <Link
                    href={item === 'Profile' ? '/404' : '#'}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      '&:hover': { 
                        color: 'primary.main', 
                        paddingLeft: '4px',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Testimonials */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 20px)', md: '1 1 calc(25% - 20px)' } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2.5, color: 'text.primary' }}>
              Testimonials
            </Typography>
            <Paper
              elevation={0}
              sx={{
                bgcolor: '#f8f9fc',
                p: 2.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                "{testimonials[activeTestimonial].text}"
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  sx={{ width: 40, height: 40, mr: 1.5 }}
                />
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {testimonials[activeTestimonial].author}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.75, mb: 1.5 }}>
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    sx={{
                      width: activeTestimonial === index ? 24 : 8,
                      height: 8,
                      borderRadius: '50px',
                      bgcolor: activeTestimonial === index ? 'primary.main' : 'action.disabled',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      '&:hover': { 
                        bgcolor: activeTestimonial === index ? 'primary.dark' : 'action.hover',
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                ))}
              </Box>
              <Link
                href="#"
                underline="hover"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'primary.main',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'primary.dark' },
                }}
              >
                See all testimonials →
              </Link>
            </Paper>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            © 2024 Hire Hood. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Chip label="Privacy Policy" size="small" variant="outlined" clickable sx={{ fontSize: '0.75rem' }} />
            <Chip label="Terms of Service" size="small" variant="outlined" clickable sx={{ fontSize: '0.75rem' }} />
            <Chip label="Cookie Policy" size="small" variant="outlined" clickable sx={{ fontSize: '0.75rem' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
