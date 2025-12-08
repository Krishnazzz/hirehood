'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Avatar,
  Paper,
  InputAdornment,
  Fade,
  Zoom,
  useTheme,
  useMediaQuery,
  IconButton,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BarChartIcon from '@mui/icons-material/BarChart';
import CodeIcon from '@mui/icons-material/Code';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';

export default function Home() {
  const companiesScrollerRef = useRef<HTMLDivElement>(null);
  const categoriesScrollerRef = useRef<HTMLDivElement>(null);
  const [currentRoleSlide, setCurrentRoleSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Auto-scroll for companies
  useEffect(() => {
    const scroller = companiesScrollerRef.current;
    if (!scroller) return;

    let baseX = 0;
    let lastTime = Date.now();
    const velocity = 50;
    let isPaused = false;
    let animationFrameId: number;

    function updateScroll() {
      if (!isPaused && scroller) {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;

        if (deltaTime > 0) {
          const moveBy = -velocity * (deltaTime / 1000);
          baseX += moveBy;

          const scrollerWidth = scroller.scrollWidth / 2;
          if (baseX > scrollerWidth) {
            baseX -= scrollerWidth;
          } else if (baseX < -scrollerWidth) {
            baseX += scrollerWidth;
          }

          scroller.style.transform = `translateX(${baseX}px)`;
        }

        lastTime = currentTime;
      } else {
        lastTime = Date.now();
      }

      animationFrameId = requestAnimationFrame(updateScroll);
    }

    const container = scroller.parentElement;
    if (container) {
      container.addEventListener('mouseenter', () => (isPaused = true));
      container.addEventListener('mouseleave', () => (isPaused = false));
    }

    updateScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Auto-scroll for categories
  useEffect(() => {
    const scroller = categoriesScrollerRef.current;
    if (!scroller) return;

    let baseX = 0;
    let lastTime = Date.now();
    const velocity = 50;
    let isPaused = false;
    let animationFrameId: number;

    function updateScroll() {
      if (!isPaused && scroller) {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;

        if (deltaTime > 0) {
          const moveBy = -velocity * (deltaTime / 1000);
          baseX += moveBy;

          const scrollerWidth = scroller.scrollWidth / 2;
          if (baseX > scrollerWidth) {
            baseX -= scrollerWidth;
          } else if (baseX < -scrollerWidth) {
            baseX += scrollerWidth;
          }

          scroller.style.transform = `translateX(${baseX}px)`;
        }

        lastTime = currentTime;
      } else {
        lastTime = Date.now();
      }

      animationFrameId = requestAnimationFrame(updateScroll);
    }

    const container = scroller.parentElement;
    if (container) {
      container.addEventListener('mouseenter', () => (isPaused = true));
      container.addEventListener('mouseleave', () => (isPaused = false));
    }

    updateScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const companies = [
    { name: 'Google', logo: 'https://cdn2.hubspot.net/hubfs/53/image8-2.jpg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
    { name: 'Amazon', logo: 'https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg' },
    { name: 'Apple', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s' },
    { name: 'Meta', logo: 'https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png' },
    { name: 'Netflix', logo: 'https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg' },
    { name: 'Tesla', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkt44jquyxoyxhubUReBibHZ_nUvhuZMjUCQ&s' },
    { name: 'Adobe', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5cXGntaRrKeBvSA1Z74XvRj9fWmuoD0IcQ&s' },
  ];

  const categories = [
    { icon: <CodeIcon />, name: 'Technology', color: '#4FC3F7' },
    { icon: <LocalHospitalIcon />, name: 'Healthcare', color: '#EF5350' },
    { icon: <AttachMoneyIcon />, name: 'Finance', color: '#66BB6A' },
    { icon: <PublicIcon />, name: 'Global Connect', color: '#AB47BC' },
    { icon: <HandshakeIcon />, name: 'Sales & Business', color: '#FFA726' },
    { icon: <ChatIcon />, name: 'Customer', color: '#42A5F5' },
    { icon: <PaletteIcon />, name: 'Design', color: '#EC407A' },
    { icon: <WorkIcon />, name: 'Creative Services', color: '#26C6DA' },
    { icon: <SchoolIcon />, name: 'Education', color: '#7E57C2' },
    { icon: <BarChartIcon />, name: 'Analytics', color: '#66BB6A' },
  ];

  const jobCards = [
    { icon: <BusinessIcon sx={{ fontSize: 40 }} />, title: 'Senior UI/UX Designer', location: 'California, US', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { icon: <LaptopMacIcon sx={{ fontSize: 40 }} />, title: 'Software Engineer L4', location: 'New York, US', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { icon: <BarChartIcon sx={{ fontSize: 40 }} />, title: 'Marketing Specialist', location: 'Texas, US', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  ];

  const roleSlides = [
    [
      { role: 'Full Stack Developer', jobs: '22.9K+' },
      { role: 'Mobile / App Developer', jobs: '2.7K+' },
      { role: 'Front End Developer', jobs: '5K+' },
      { role: 'DevOps Engineer', jobs: '2.9K+' },
      { role: 'Engineering Manager', jobs: '1.5K+' },
      { role: 'Technical Lead', jobs: '13.1K+' },
    ],
    [
      { role: 'Automation Test Engineer', jobs: '3K+' },
      { role: 'Cyber Security', jobs: '882' },
      { role: 'Technical Architect', jobs: '6.2K+' },
      { role: 'Business Analyst', jobs: '4.6K+' },
      { role: 'Data Scientist', jobs: '1.3K+' },
      { role: 'Program Manager', jobs: '538' },
    ],
    [
      { role: 'Product Manager', jobs: '1.1K+' },
      { role: 'UI / UX Designer', jobs: '1.8K+' },
      { role: 'Research Analyst', jobs: '101' },
      { role: 'Branch Manager', jobs: '360' },
      { role: 'Functional Consultant', jobs: '4.9K+' },
      { role: 'Chartered Accountant (CA)', jobs: '831' },
    ],
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ paddingTop: '48px', paddingBottom: '48px', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Hero Section */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', marginBottom: '80px' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                color: 'primary.main',
                marginBottom: '32px',
                lineHeight: 1.2,
              }}
            >
              Find Your Dream Job, Faster
            </Typography>

            <Paper
              elevation={3}
              sx={{
                maxWidth: 800,
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '8px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '2px solid transparent',
                transition: 'all 0.4s ease',
                '&:hover': {
                  border: '2px solid',
                  borderColor: 'primary.light',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField
                  fullWidth
                  placeholder="Job Title, Skills"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'primary.main' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '50px',
                      bgcolor: 'white',
                      '& fieldset': { border: 'none' },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Location"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: 'primary.main' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#f5f5f5',
                      '& fieldset': { borderColor: '#e0e0e0' },
                      '&:hover fieldset': { borderColor: 'primary.main' },
                      '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SearchIcon />}
                  sx={{
                    borderRadius: '8px',
                    paddingLeft: '32px',
                    paddingRight: '32px',
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    minWidth: 140,
                    fontWeight: 600,
                    textTransform: 'none',
                    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                    boxShadow: '0 4px 12px rgba(25,118,210,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                      boxShadow: '0 6px 20px rgba(25,118,210,0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Search
                </Button>
              </Stack>
            </Paper>
            <Typography variant="body1" color="text.secondary" sx={{ marginTop: '16px' }}>
              Discover hand-picked opportunities
            </Typography>
          </Box>
        </Fade>

        {/* Job Cards Section */}
        <Box sx={{ marginBottom: '80px' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
            {jobCards.map((job, index) => (
              <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' } }}>
                <Zoom in timeout={800 + index * 200}>
                  <Card
                    elevation={2}
                    sx={{
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      borderRadius: '16px',
                      height: '100%',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                      border: '1px solid',
                      borderColor: 'rgba(0,0,0,0.08)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #1976d2, #42a5f5)',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.4s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                        borderColor: 'primary.main',
                        '&::before': {
                          transform: 'scaleX(1)',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', padding: '32px 24px' }}>
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '20px',
                          backgroundColor: 'primary.main',
                        }}
                      >
                        {job.icon}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '8px' }}>
                        {job.title}
                      </Typography>
                      <Chip
                        icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                        label={job.location}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.light',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    </CardContent>
                  </Card>
                </Zoom>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Trending Categories */}
        <Box sx={{ marginBottom: '80px' }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 600,
              marginBottom: '48px',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              color: 'primary.main',
            }}
          >
            Trending Job Categories
          </Typography>
          <Box sx={{ overflow: 'hidden', position: 'relative' }}>
            <Box
              ref={categoriesScrollerRef}
              sx={{
                display: 'flex',
                gap: '16px',
                width: 'max-content',
                alignItems: 'center',
              }}
            >
              {[...categories, ...categories].map((category, index) => (
                <Chip
                  key={`${category.name}-${index}`}
                  icon={category.icon}
                  label={category.name}
                  onClick={() => {}}
                  sx={{
                    height: '48px',
                    padding: '8px 16px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(25,118,210,0.25)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.2)',
                    '& .MuiChip-label': {
                      padding: '0 12px',
                    },
                    '& .MuiChip-icon': {
                      color: 'white',
                      fontSize: 24,
                      marginLeft: '8px',
                      marginRight: '-4px',
                    },
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%)',
                      boxShadow: '0 6px 20px rgba(25,118,210,0.4)',
                      transform: 'translateY(-4px) scale(1.05)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Popular Roles Section */}
        <Box sx={{ marginBottom: '80px' }}>
          <Paper
            elevation={2}
            sx={{
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(100, 160, 220, 0.12) 0%, rgba(70, 130, 200, 0.25) 50%, rgba(50, 100, 180, 0.18) 100%)',
              border: '2px solid',
              borderColor: 'rgba(100, 160, 220, 0.4)',
              transition: 'all 0.4s ease',
              '&:hover': {
                borderColor: 'rgba(70, 130, 200, 0.6)',
                boxShadow: '0 12px 32px rgba(70, 130, 200, 0.2)',
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Box sx={{ 
                flex: { xs: '1', md: '0 0 42%' }, 
                padding: { xs: '24px', md: '40px' } 
              }}>
                <Box
                  component="img"
                  src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png"
                  alt="Discover roles"
                  sx={{ width: '100%', maxWidth: 350, marginBottom: '24px' }}
                />
                <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: '16px' }}>
                  Discover jobs across popular roles
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Select a role and we'll show you relevant jobs for it!
                </Typography>
              </Box>

              <Box sx={{ 
                flex: { xs: '1', md: '0 0 58%' }, 
                padding: { xs: '16px', md: '24px' }, 
                display: 'flex', 
                alignItems: 'center' 
              }}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: '24px',
                    borderRadius: '12px',
                    width: '100%',
                    backgroundColor: 'white',
                  }}
                >
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {roleSlides[currentRoleSlide].map((role, index) => (
                      <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                        <Card
                          component={Link}
                          href={`/jobs?search=${encodeURIComponent(role.role)}`}
                          sx={{
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                            border: '1px solid',
                            borderColor: 'rgba(0,0,0,0.08)',
                            '&:hover': {
                              boxShadow: '0 8px 24px rgba(25,118,210,0.15)',
                              transform: 'translateY(-4px)',
                              borderColor: 'primary.light',
                              background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                              '& .MuiSvgIcon-root': {
                                transform: 'translateX(4px)',
                              },
                            },
                          }}
                        >
                          <CardContent>
                            <Typography variant="h6" sx={{ 
                              fontWeight: 600, 
                              fontSize: '1rem', 
                              marginBottom: '4px' 
                            }}>
                              {role.role}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Typography variant="body2" color="text.secondary">
                                {role.jobs} Jobs
                              </Typography>
                              <ArrowForwardIcon sx={{ fontSize: 16, color: 'primary.main', transition: 'transform 0.3s ease' }} />
                            </Box>
                          </CardContent>
                        </Card>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
                    {roleSlides.map((_, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentRoleSlide(index)}
                        sx={{
                          width: currentRoleSlide === index ? 32 : 12,
                          height: 12,
                          borderRadius: '50px',
                          backgroundColor: currentRoleSlide === index ? 'primary.main' : '#ddd',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Connect with Top Companies */}
        <Box sx={{ marginBottom: '80px' }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 600,
              marginBottom: '48px',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              color: 'primary.main',
            }}
          >
            <TrendingUpIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />
            Connect with Top Companies
          </Typography>
          <Box sx={{ overflow: 'hidden', position: 'relative' }}>
            <Box
              ref={companiesScrollerRef}
              sx={{
                display: 'flex',
                gap: '32px',
                width: 'max-content',
                alignItems: 'center',
              }}
            >
              {[...companies, ...companies].map((company, index) => (
                <Paper
                  key={`${company.name}-${index}`}
                  elevation={1}
                  sx={{
                    padding: '32px 24px',
                    minWidth: 200,
                    height: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '16px',
                    border: '2px solid',
                    borderColor: 'rgba(0,0,0,0.06)',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      transition: 'left 0.6s ease',
                    },
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 12px 32px rgba(25,118,210,0.15)',
                      transform: 'translateY(-8px) scale(1.02)',
                      background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                      '&::before': {
                        left: '100%',
                      },
                      '& img': {
                        filter: 'grayscale(0%)',
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={company.logo}
                    alt={company.name}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      transition: 'all 0.4s ease',
                    }}
                  />
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
