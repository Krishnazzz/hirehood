'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Avatar,
  Stack,
  Divider,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Breadcrumbs,
  Link as MuiLink,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Link from 'next/link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

// Job interface
interface Job {
  id: number;
  title: string;
  company_name: string;
  company_logo: string;
  location: string;
  job_type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  experience_level: 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Lead' | 'Executive';
  salary_min: number;
  salary_max: number;
  currency: string;
  description: string;
  requirements: string[];
  benefits: string[];
  tags: string[];
  application_deadline: string;
  contact_email: string;
  user_id: number;
  is_active: boolean;
  posted_date: string;
  applicants?: number;
  about_company?: string;
  responsibilities?: string[];
  nice_to_have?: string[];
  company_size?: string;
  company_industry?: string;
}

// Dummy job data - In real app, fetch from API based on ID
const dummyJob: Job = {
  id: 1,
  title: 'Senior Full Stack Developer',
  company_name: 'TechCorp Solutions',
  company_logo: 'https://via.placeholder.com/120?text=TC',
  location: 'Bangalore, India',
  job_type: 'Full-time',
  experience_level: 'Senior Level',
  salary_min: 1500000,
  salary_max: 2500000,
  currency: 'INR',
  description: 'We are looking for an experienced Full Stack Developer to join our dynamic team. You will work on cutting-edge projects using modern technologies and contribute to building scalable web applications that serve millions of users. This is an excellent opportunity to work with a talented team and grow your career in a fast-paced environment.',
  requirements: [
    '5+ years of professional experience with React and Node.js',
    'Strong knowledge of TypeScript and modern JavaScript (ES6+)',
    'Experience with cloud platforms (AWS/Azure) and serverless architecture',
    'Proficiency in database design (PostgreSQL, MongoDB)',
    'Excellent problem-solving skills and attention to detail',
    'Experience with CI/CD pipelines and DevOps practices',
    'Strong communication and collaboration skills',
  ],
  responsibilities: [
    'Design and develop scalable web applications using React and Node.js',
    'Collaborate with product managers and designers to implement new features',
    'Write clean, maintainable, and well-documented code',
    'Participate in code reviews and mentor junior developers',
    'Optimize application performance and ensure security best practices',
    'Work with DevOps team to deploy and maintain production systems',
    'Contribute to technical decisions and architecture planning',
  ],
  nice_to_have: [
    'Experience with Next.js and React Server Components',
    'Knowledge of GraphQL and Apollo',
    'Familiarity with Docker and Kubernetes',
    'Open source contributions',
    'Experience with microservices architecture',
  ],
  benefits: [
    'Competitive salary with performance bonuses',
    'Comprehensive health insurance for you and family',
    'Work from home flexibility (3 days/week)',
    'Annual learning budget of ₹50,000',
    'Stock options (ESOP)',
    'Unlimited paid time off',
    'Latest MacBook Pro and accessories',
    'Team outings and yearly offsite trips',
    'Gym membership reimbursement',
  ],
  tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'CI/CD'],
  application_deadline: '2025-01-15',
  contact_email: 'careers@techcorp.com',
  user_id: 1,
  is_active: true,
  posted_date: '2024-12-10',
  applicants: 45,
  about_company: 'TechCorp Solutions is a leading technology company specializing in building innovative software solutions for enterprises. Founded in 2015, we have grown to a team of 500+ talented individuals working on cutting-edge projects. Our mission is to leverage technology to solve real-world problems and make a positive impact on society.',
  company_size: '200-500 employees',
  company_industry: 'Information Technology & Services',
};

// Similar jobs for recommendations
const similarJobs = [
  {
    id: 2,
    title: 'Frontend Developer',
    company_name: 'WebWizards',
    company_logo: 'https://via.placeholder.com/60?text=WW',
    location: 'Remote',
    salary_min: 800000,
    salary_max: 1200000,
    job_type: 'Remote',
    posted_date: '2024-12-12',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company_name: 'CloudTech',
    company_logo: 'https://via.placeholder.com/60?text=CT',
    location: 'Mumbai, India',
    salary_min: 1200000,
    salary_max: 1800000,
    job_type: 'Full-time',
    posted_date: '2024-12-11',
  },
  {
    id: 4,
    title: 'Tech Lead',
    company_name: 'InnovateLabs',
    company_logo: 'https://via.placeholder.com/60?text=IL',
    location: 'Bangalore, India',
    salary_min: 2000000,
    salary_max: 3000000,
    job_type: 'Full-time',
    posted_date: '2024-12-09',
  },
];

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [isSaved, setIsSaved] = useState(false);
  const [applyDialogOpen, setApplyDialogOpen] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null,
  });

  // In real app, fetch job based on params.id
  const job = dummyJob;

  const formatSalary = (min: number, max: number, currency: string) => {
    const formatNumber = (num: number) => {
      if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
      if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
      return num.toString();
    };
    return `₹${formatNumber(min)} - ${formatNumber(max)}`;
  };

  const getTimeAgo = (date: string) => {
    const days = Math.floor((new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  const getDaysRemaining = (deadline: string) => {
    const days = Math.floor((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return days;
  };

  const handleApplySubmit = () => {
    // In real app, submit application to API
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplyDialogOpen(false);
      setApplicationSubmitted(false);
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink component={Link} href="/" underline="hover" color="text.secondary">
            Home
          </MuiLink>
          <MuiLink component={Link} href="/jobs" underline="hover" color="text.secondary">
            Jobs
          </MuiLink>
          <Typography color="primary.main">{job.title}</Typography>
        </Breadcrumbs>

        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 3, textTransform: 'none' }}
        >
          Back to Jobs
        </Button>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Main Content */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.666%' } }}>
            {/* Job Header Card */}
            <Card
              sx={{
                borderRadius: '20px',
                mb: 3,
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
                border: '1px solid',
                borderColor: 'rgba(37, 99, 235, 0.1)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Avatar
                      src={job.company_logo}
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        bgcolor: 'primary.light',
                        border: '3px solid white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    >
                      <BusinessIcon sx={{ fontSize: 40 }} />
                    </Avatar>
                    <Box>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 800, 
                          mb: 1,
                          background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {job.title}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h6" color="text.primary">
                          {job.company_name}
                        </Typography>
                        <VerifiedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                      </Stack>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {job.company_industry} • {job.company_size}
                      </Typography>
                    </Box>
                  </Box>
                  
                  {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton 
                        onClick={() => setIsSaved(!isSaved)}
                        sx={{ 
                          bgcolor: 'white',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                        }}
                      >
                        {isSaved ? (
                          <BookmarkIcon sx={{ color: 'primary.main' }} />
                        ) : (
                          <BookmarkBorderIcon />
                        )}
                      </IconButton>
                      <IconButton 
                        sx={{ 
                          bgcolor: 'white',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                        }}
                      >
                        <ShareIcon />
                      </IconButton>
                    </Box>
                  )}
                </Box>

                {/* Quick Info Chips */}
                <Stack direction="row" spacing={1.5} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                  <Chip
                    icon={<LocationOnIcon sx={{ fontSize: 18 }} />}
                    label={job.location}
                    sx={{ 
                      bgcolor: 'white',
                      fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                  />
                  <Chip
                    icon={<WorkIcon sx={{ fontSize: 18 }} />}
                    label={job.job_type}
                    sx={{ 
                      bgcolor: 'white',
                      color: 'secondary.main',
                      fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                  />
                  <Chip
                    icon={<SchoolIcon sx={{ fontSize: 18 }} />}
                    label={job.experience_level}
                    sx={{ 
                      bgcolor: 'white',
                      fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                  />
                  <Chip
                    icon={<AccessTimeIcon sx={{ fontSize: 18 }} />}
                    label={getTimeAgo(job.posted_date)}
                    sx={{ 
                      bgcolor: 'white',
                      fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                  />
                </Stack>

                {/* Salary and Stats */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    borderRadius: '12px',
                    bgcolor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    flexWrap: 'wrap',
                    gap: 2
                  }}
                >
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Salary Range
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {formatSalary(job.salary_min, job.salary_max, job.currency)}
                      <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        per year
                      </Typography>
                    </Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                      {job.applicants}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Applicants
                    </Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'error.main' }}>
                      {getDaysRemaining(job.application_deadline)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Days Left
                    </Typography>
                  </Box>
                </Box>

                {/* Apply Button (Mobile) */}
                {isMobile && (
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    startIcon={<SendIcon />}
                    onClick={() => setApplyDialogOpen(true)}
                    sx={{
                      mt: 3,
                      borderRadius: '12px',
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
                      textTransform: 'none',
                      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)',
                    }}
                  >
                    Apply for this Job
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Job Description */}
            <Paper sx={{ p: 4, borderRadius: '16px', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                About the Role
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ lineHeight: 1.8, mb: 3 }}
              >
                {job.description}
              </Typography>

              <Divider sx={{ my: 4 }} />

              {/* Responsibilities */}
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Key Responsibilities
              </Typography>
              <List>
                {job.responsibilities?.map((responsibility, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={responsibility}
                      primaryTypographyProps={{
                        variant: 'body1',
                        color: 'text.secondary'
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 4 }} />

              {/* Requirements */}
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Required Qualifications
              </Typography>
              <List>
                {job.requirements.map((requirement, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <StarIcon sx={{ color: 'secondary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={requirement}
                      primaryTypographyProps={{
                        variant: 'body1',
                        color: 'text.secondary',
                        fontWeight: 500
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              {job.nice_to_have && job.nice_to_have.length > 0 && (
                <>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 3 }}>
                    Nice to Have
                  </Typography>
                  <List>
                    {job.nice_to_have.map((item, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <TrendingUpIcon sx={{ color: 'info.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item}
                          primaryTypographyProps={{
                            variant: 'body1',
                            color: 'text.secondary'
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Paper>

            {/* Benefits */}
            <Paper sx={{ p: 4, borderRadius: '16px', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Benefits & Perks
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {job.benefits.map((benefit, index) => (
                  <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' } }}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: 2,
                        p: 2,
                        borderRadius: '12px',
                        bgcolor: 'rgba(37, 99, 235, 0.03)',
                        border: '1px solid',
                        borderColor: 'rgba(37, 99, 235, 0.1)',
                      }}
                    >
                      <CheckCircleIcon sx={{ color: 'success.main', mt: 0.5 }} />
                      <Typography variant="body1" color="text.secondary">
                        {benefit}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>

            {/* Skills/Tags */}
            <Paper sx={{ p: 4, borderRadius: '16px', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Skills & Technologies
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                {job.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                ))}
              </Stack>
            </Paper>

            {/* About Company */}
            <Paper sx={{ p: 4, borderRadius: '16px', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                About {job.company_name}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ lineHeight: 1.8 }}
              >
                {job.about_company}
              </Typography>
            </Paper>

            {/* Similar Jobs */}
            <Paper sx={{ p: 4, borderRadius: '16px' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Similar Jobs
              </Typography>
              <Stack spacing={2}>
                {similarJobs.map((similarJob) => (
                  <Card 
                    key={similarJob.id}
                    sx={{ 
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Avatar src={similarJob.company_logo} sx={{ width: 50, height: 50 }}>
                          <BusinessIcon />
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {similarJob.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {similarJob.company_name} • {similarJob.location}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {formatSalary(similarJob.salary_min, similarJob.salary_max, 'INR')}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {getTimeAgo(similarJob.posted_date)}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Paper>
          </Box>

          {/* Sticky Sidebar */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.333%' } }}>
            <Box 
              sx={{ 
                position: { md: 'sticky' },
                top: 20,
              }}
            >
              {/* Apply Card */}
              <Card 
                sx={{ 
                  mb: 3, 
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 8px 24px rgba(37, 99, 235, 0.15)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Ready to Apply?
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    startIcon={<SendIcon />}
                    onClick={() => setApplyDialogOpen(true)}
                    sx={{
                      mb: 2,
                      borderRadius: '12px',
                      py: 1.5,
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
                      textTransform: 'none',
                    }}
                  >
                    Apply Now
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    onClick={() => setIsSaved(!isSaved)}
                    sx={{
                      borderRadius: '12px',
                      py: 1,
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    {isSaved ? 'Saved' : 'Save for Later'}
                  </Button>
                </CardContent>
              </Card>

              {/* Job Overview Card */}
              <Card sx={{ mb: 3, borderRadius: '16px' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                    Job Overview
                  </Typography>
                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <CalendarTodayIcon sx={{ color: 'primary.main' }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Posted Date
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {new Date(job.posted_date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <AccessTimeIcon sx={{ color: 'error.main' }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Application Deadline
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {new Date(job.application_deadline).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <PeopleIcon sx={{ color: 'secondary.main' }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Applicants
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {job.applicants} people
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <AttachMoneyIcon sx={{ color: 'success.main' }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Salary Range
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {formatSalary(job.salary_min, job.salary_max, job.currency)}/year
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card sx={{ borderRadius: '16px' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Contact Information
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <EmailIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 600,
                          wordBreak: 'break-word'
                        }}
                      >
                        {job.contact_email}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

        {/* Application Dialog */}
        <Dialog 
          open={applyDialogOpen} 
          onClose={() => setApplyDialogOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle sx={{ pb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Apply for {job.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              at {job.company_name}
            </Typography>
          </DialogTitle>
          <DialogContent>
            {applicationSubmitted ? (
              <Alert severity="success" sx={{ mt: 2 }}>
                Application submitted successfully! We'll be in touch soon.
              </Alert>
            ) : (
              <Stack spacing={2} sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="LinkedIn Profile"
                  value={formData.linkedIn}
                  onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Portfolio URL"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Cover Letter"
                  multiline
                  rows={4}
                  placeholder="Tell us why you're a great fit for this role..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                />
                <Box>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<AttachFileIcon />}
                    fullWidth
                    sx={{ py: 1.5, textTransform: 'none' }}
                  >
                    {formData.resume ? formData.resume.name : 'Upload Resume (PDF)'}
                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </Button>
                </Box>
              </Stack>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 2 }}>
            <Button 
              onClick={() => setApplyDialogOpen(false)}
              sx={{ textTransform: 'none' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleApplySubmit}
              disabled={applicationSubmitted}
              sx={{
                textTransform: 'none',
                background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
              }}
            >
              Submit Application
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}
