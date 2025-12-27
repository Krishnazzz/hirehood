'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import CardSwap, { Card } from './CardSwap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Hero1() {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        minHeight: { xs: '600px', md: '700px' },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 }
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            maxWidth: '600px'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              color: 'white',
              mb: 3,
              lineHeight: 1.2
            }}
          >
            Find Your Dream Job Today
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              lineHeight: 1.6
            }}
          >
            Connect with top companies and discover opportunities that match your skills and aspirations.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Browse Jobs
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 2
                }
              }}
            >
              For Employers
            </Button>
          </Box>

          <Box sx={{ mt: 6, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            <Box>
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
                10K+
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Active Jobs
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
                5K+
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Companies
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
                50K+
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Happy Users
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Card Swap Animation - 20% Larger */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            pointerEvents: 'none'
          }}
        >
          <CardSwap
            width={576}
            height={552}
            cardDistance={72}
            verticalDistance={84}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card>
              <Box sx={{ 
                p: 5, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 70px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                }
              }}>
                <Box>
                  <Box sx={{ 
                    width: 64, 
                    height: 64, 
                    borderRadius: '16px', 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 4,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}>
                    <Typography sx={{ fontSize: '2rem' }}>💻</Typography>
                  </Box>
                  
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, mb: 2, fontSize: '1.75rem' }}>
                    Senior Developer
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <BusinessIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.8)' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', fontWeight: 500 }}>
                      Tech Corp Inc.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                    <PlaceIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.8)' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', fontWeight: 500 }}>
                      San Francisco, CA
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
                    <Box sx={{ 
                      px: 2.5, 
                      py: 1, 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
                      borderRadius: '24px', 
                      color: 'white', 
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      🏠 Remote
                    </Box>
                    <Box sx={{ 
                      px: 2.5, 
                      py: 1, 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
                      borderRadius: '24px', 
                      color: 'white', 
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      ⏰ Full-time
                    </Box>
                  </Box>

                  <Typography sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: '1rem', 
                    lineHeight: 1.7,
                    fontWeight: 400
                  }}>
                    Build scalable web applications using React, Node.js, and cloud technologies. Work with a talented team on cutting-edge projects.
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  pt: 4,
                  borderTop: '2px solid rgba(255,255,255,0.25)',
                  mt: 3
                }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', mb: 0.5, fontSize: '0.75rem' }}>
                      Salary Range
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#4ade80', fontWeight: 800, fontSize: '1.5rem' }}>
                      $120K - $180K
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2.5, 
                    py: 1, 
                    background: 'rgba(255,255,255,0.2)', 
                    borderRadius: '10px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.9)' }} />
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                      2 days ago
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
            
            <Card>
              <Box sx={{ 
                p: 5, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.95) 0%, rgba(245, 87, 108, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 70px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                }
              }}>
                <Box>
                  <Box sx={{ 
                    width: 64, 
                    height: 64, 
                    borderRadius: '16px', 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 4,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}>
                    <Typography sx={{ fontSize: '2rem' }}>🎨</Typography>
                  </Box>
                  
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, mb: 2, fontSize: '1.75rem' }}>
                    Product Designer
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <BusinessIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.8)' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', fontWeight: 500 }}>
                      Design Studio
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                    <PlaceIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.8)' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', fontWeight: 500 }}>
                      New York, NY
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
                    <Box sx={{ 
                      px: 2.5, 
                      py: 1, 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
                      borderRadius: '24px', 
                      color: 'white', 
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      🏢 Hybrid
                    </Box>
                    <Box sx={{ 
                      px: 2.5, 
                      py: 1, 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
                      borderRadius: '24px', 
                      color: 'white', 
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      ⏰ Full-time
                    </Box>
                  </Box>

                  <Typography sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: '1rem', 
                    lineHeight: 1.7,
                    fontWeight: 400
                  }}>
                    Design intuitive user experiences for mobile and web platforms. Collaborate with developers to bring designs to life.
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  pt: 4,
                  borderTop: '2px solid rgba(255,255,255,0.25)',
                  mt: 3
                }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', mb: 0.5, fontSize: '0.75rem' }}>
                      Salary Range
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#4ade80', fontWeight: 800, fontSize: '1.5rem' }}>
                      $90K - $130K
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2.5, 
                    py: 1, 
                    background: 'rgba(255,255,255,0.2)', 
                    borderRadius: '10px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.9)' }} />
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                      5 days ago
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
            
            <Card>
              <Box sx={{ 
                p: 5, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.95) 0%, rgba(0, 242, 254, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 70px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                }
              }}>
                <Box>
                  <Box sx={{ 
                    width: 64, 
                    height: 64, 
                    borderRadius: '16px', 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 4,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}>
                    <Typography sx={{ fontSize: '2rem' }}>📊</Typography>
                  </Box>
                  
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, mb: 2, fontSize: '1.75rem' }}>
                    Marketing Manager
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <BusinessIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.8)' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', fontWeight: 500 }}>
                      Growth Co.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                    <PlaceIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.8)' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', fontWeight: 500 }}>
                      Austin, TX
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
                    <Box sx={{ 
                      px: 2.5, 
                      py: 1, 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
                      borderRadius: '24px', 
                      color: 'white', 
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      🏢 On-site
                    </Box>
                    <Box sx={{ 
                      px: 2.5, 
                      py: 1, 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
                      borderRadius: '24px', 
                      color: 'white', 
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      ⏰ Full-time
                    </Box>
                  </Box>

                  <Typography sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: '1rem', 
                    lineHeight: 1.7,
                    fontWeight: 400
                  }}>
                    Lead digital marketing campaigns and drive customer acquisition strategies. Shape brand presence across channels.
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  pt: 4,
                  borderTop: '2px solid rgba(255,255,255,0.25)',
                  mt: 3
                }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', mb: 0.5, fontSize: '0.75rem' }}>
                      Salary Range
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#4ade80', fontWeight: 800, fontSize: '1.5rem' }}>
                      $80K - $110K
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2.5, 
                    py: 1, 
                    background: 'rgba(255,255,255,0.2)', 
                    borderRadius: '10px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.9)' }} />
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                      1 week ago
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </CardSwap>
        </Box>
      </Container>
    </Box>
  );
}