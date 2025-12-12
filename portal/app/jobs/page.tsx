'use client';

import { useState, useMemo } from 'react';
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
  InputAdornment,
  Stack,
  MenuItem,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  FormControl,
  InputLabel,
  Select,
  Slider,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloseIcon from '@mui/icons-material/Close';

// Job interface matching your model
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
}

// Dummy data
const dummyJobs: Job[] = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company_name: 'TechCorp Solutions',
    company_logo: 'https://via.placeholder.com/80?text=TC',
    location: 'Bangalore, India',
    job_type: 'Full-time',
    experience_level: 'Senior Level',
    salary_min: 1500000,
    salary_max: 2500000,
    currency: 'INR',
    description: 'We are looking for an experienced Full Stack Developer to join our dynamic team. You will work on cutting-edge projects using modern technologies.',
    requirements: ['5+ years experience with React and Node.js', 'Strong knowledge of TypeScript', 'Experience with AWS/Azure', 'Excellent problem-solving skills'],
    benefits: ['Health Insurance', 'Work from Home', 'Learning Budget', 'Stock Options'],
    tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    application_deadline: '2025-01-15',
    contact_email: 'careers@techcorp.com',
    user_id: 1,
    is_active: true,
    posted_date: '2024-12-10',
    applicants: 45,
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company_name: 'DesignHub Studio',
    company_logo: 'https://via.placeholder.com/80?text=DH',
    location: 'Mumbai, India',
    job_type: 'Full-time',
    experience_level: 'Mid Level',
    salary_min: 800000,
    salary_max: 1200000,
    currency: 'INR',
    description: 'Join our creative team to design beautiful and intuitive user experiences for web and mobile applications.',
    requirements: ['3+ years of UI/UX design experience', 'Proficiency in Figma and Adobe XD', 'Strong portfolio demonstrating UX process', 'Understanding of responsive design'],
    benefits: ['Flexible Hours', 'Health Insurance', 'Creative Environment', 'MacBook Pro'],
    tags: ['Figma', 'Adobe XD', 'UI Design', 'UX Research', 'Prototyping'],
    application_deadline: '2025-01-20',
    contact_email: 'jobs@designhub.com',
    user_id: 2,
    is_active: true,
    posted_date: '2024-12-08',
    applicants: 32,
  },
  {
    id: 3,
    title: 'Data Scientist',
    company_name: 'Analytics Pro',
    company_logo: 'https://via.placeholder.com/80?text=AP',
    location: 'Hyderabad, India',
    job_type: 'Full-time',
    experience_level: 'Senior Level',
    salary_min: 2000000,
    salary_max: 3000000,
    currency: 'INR',
    description: 'Looking for a Data Scientist to build predictive models and derive insights from large datasets.',
    requirements: ['PhD or Masters in Computer Science/Statistics', 'Strong Python and R skills', 'Experience with ML frameworks (TensorFlow, PyTorch)', 'Knowledge of big data tools'],
    benefits: ['Research Budget', 'Conference Attendance', 'Health Insurance', 'Performance Bonus'],
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'Big Data', 'Statistics'],
    application_deadline: '2025-01-25',
    contact_email: 'talent@analyticspro.com',
    user_id: 3,
    is_active: true,
    posted_date: '2024-12-05',
    applicants: 28,
  },
  {
    id: 4,
    title: 'Marketing Manager',
    company_name: 'BrandWorks',
    company_logo: 'https://via.placeholder.com/80?text=BW',
    location: 'Delhi, India',
    job_type: 'Full-time',
    experience_level: 'Lead',
    salary_min: 1200000,
    salary_max: 1800000,
    currency: 'INR',
    description: 'Lead our marketing team to develop and execute innovative marketing strategies across digital channels.',
    requirements: ['7+ years in digital marketing', 'Proven track record in B2B/B2C marketing', 'Strong analytical skills', 'Leadership experience'],
    benefits: ['Health Insurance', 'Performance Bonus', 'Team Outings', 'Professional Development'],
    tags: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics', 'Leadership'],
    application_deadline: '2025-02-01',
    contact_email: 'hr@brandworks.com',
    user_id: 4,
    is_active: true,
    posted_date: '2024-12-09',
    applicants: 52,
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company_name: 'CloudTech Systems',
    company_logo: 'https://via.placeholder.com/80?text=CT',
    location: 'Pune, India',
    job_type: 'Full-time',
    experience_level: 'Mid Level',
    salary_min: 1000000,
    salary_max: 1600000,
    currency: 'INR',
    description: 'Join our DevOps team to build and maintain scalable cloud infrastructure and CI/CD pipelines.',
    requirements: ['3+ years DevOps experience', 'Expertise in AWS/Azure/GCP', 'Strong scripting skills (Python, Bash)', 'Experience with Docker and Kubernetes'],
    benefits: ['Remote Work', 'Learning Budget', 'Health Insurance', 'Certifications'],
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    application_deadline: '2025-01-30',
    contact_email: 'devops@cloudtech.com',
    user_id: 5,
    is_active: true,
    posted_date: '2024-12-11',
    applicants: 38,
  },
  {
    id: 6,
    title: 'Frontend Developer',
    company_name: 'WebWizards',
    company_logo: 'https://via.placeholder.com/80?text=WW',
    location: 'Remote',
    job_type: 'Remote',
    experience_level: 'Entry Level',
    salary_min: 500000,
    salary_max: 800000,
    currency: 'INR',
    description: 'Seeking a passionate Frontend Developer to create responsive and user-friendly web applications.',
    requirements: ['1-2 years React experience', 'Strong HTML, CSS, JavaScript skills', 'Understanding of REST APIs', 'Portfolio of projects'],
    benefits: ['Fully Remote', 'Flexible Hours', 'Mentorship Program', 'Health Insurance'],
    tags: ['React', 'JavaScript', 'CSS', 'HTML', 'Git'],
    application_deadline: '2025-01-18',
    contact_email: 'careers@webwizards.com',
    user_id: 6,
    is_active: true,
    posted_date: '2024-12-12',
    applicants: 67,
  },
  {
    id: 7,
    title: 'Product Manager',
    company_name: 'InnovateLabs',
    company_logo: 'https://via.placeholder.com/80?text=IL',
    location: 'Bangalore, India',
    job_type: 'Full-time',
    experience_level: 'Senior Level',
    salary_min: 2500000,
    salary_max: 3500000,
    currency: 'INR',
    description: 'Lead product strategy and roadmap for our flagship SaaS products serving enterprise clients.',
    requirements: ['5+ years product management experience', 'Strong analytical and problem-solving skills', 'Experience with Agile methodologies', 'Excellent communication skills'],
    benefits: ['Equity', 'Health Insurance', 'Unlimited PTO', 'Learning Budget'],
    tags: ['Product Strategy', 'Agile', 'SaaS', 'Analytics', 'Stakeholder Management'],
    application_deadline: '2025-02-05',
    contact_email: 'pm@innovatelabs.com',
    user_id: 7,
    is_active: true,
    posted_date: '2024-12-07',
    applicants: 41,
  },
  {
    id: 8,
    title: 'Mobile App Developer (React Native)',
    company_name: 'AppGenius',
    company_logo: 'https://via.placeholder.com/80?text=AG',
    location: 'Chennai, India',
    job_type: 'Full-time',
    experience_level: 'Mid Level',
    salary_min: 900000,
    salary_max: 1400000,
    currency: 'INR',
    description: 'Develop cross-platform mobile applications using React Native for iOS and Android.',
    requirements: ['3+ years mobile development', 'Strong React Native expertise', 'Published apps on App Store/Play Store', 'Knowledge of native modules'],
    benefits: ['Health Insurance', 'Performance Bonus', 'Flexible Work', 'Latest Devices'],
    tags: ['React Native', 'iOS', 'Android', 'JavaScript', 'Mobile'],
    application_deadline: '2025-01-22',
    contact_email: 'mobile@appgenius.com',
    user_id: 8,
    is_active: true,
    posted_date: '2024-12-06',
    applicants: 29,
  },
  {
    id: 9,
    title: 'Cybersecurity Analyst',
    company_name: 'SecureNet',
    company_logo: 'https://via.placeholder.com/80?text=SN',
    location: 'Noida, India',
    job_type: 'Full-time',
    experience_level: 'Mid Level',
    salary_min: 1100000,
    salary_max: 1700000,
    currency: 'INR',
    description: 'Protect our infrastructure and data by identifying vulnerabilities and implementing security measures.',
    requirements: ['3+ years cybersecurity experience', 'CISSP or CEH certification preferred', 'Knowledge of security tools and frameworks', 'Incident response experience'],
    benefits: ['Certification Support', 'Health Insurance', 'Training Programs', 'Security Conferences'],
    tags: ['Cybersecurity', 'Network Security', 'CISSP', 'Incident Response', 'Penetration Testing'],
    application_deadline: '2025-02-10',
    contact_email: 'security@securenet.com',
    user_id: 9,
    is_active: true,
    posted_date: '2024-12-04',
    applicants: 23,
  },
  {
    id: 10,
    title: 'Content Writer',
    company_name: 'ContentCrafters',
    company_logo: 'https://via.placeholder.com/80?text=CC',
    location: 'Remote',
    job_type: 'Part-time',
    experience_level: 'Entry Level',
    salary_min: 300000,
    salary_max: 500000,
    currency: 'INR',
    description: 'Create engaging content for blogs, websites, and social media across various industries.',
    requirements: ['1-2 years writing experience', 'Excellent English writing skills', 'SEO knowledge', 'Portfolio of published work'],
    benefits: ['Flexible Hours', 'Remote Work', 'Growth Opportunities', 'Creative Freedom'],
    tags: ['Content Writing', 'SEO', 'Copywriting', 'Blogging', 'Social Media'],
    application_deadline: '2025-01-28',
    contact_email: 'write@contentcrafters.com',
    user_id: 10,
    is_active: true,
    posted_date: '2024-12-11',
    applicants: 89,
  },
  {
    id: 11,
    title: 'Business Analyst',
    company_name: 'ConsultPro',
    company_logo: 'https://via.placeholder.com/80?text=CP',
    location: 'Mumbai, India',
    job_type: 'Contract',
    experience_level: 'Mid Level',
    salary_min: 1000000,
    salary_max: 1500000,
    currency: 'INR',
    description: 'Analyze business processes and requirements to drive strategic initiatives and improvements.',
    requirements: ['4+ years as Business Analyst', 'Strong SQL and Excel skills', 'Experience with BI tools (Tableau, Power BI)', 'Stakeholder management'],
    benefits: ['Competitive Pay', 'Flexible Contract', 'Health Insurance', 'Skill Development'],
    tags: ['Business Analysis', 'SQL', 'Tableau', 'Requirements Gathering', 'Process Improvement'],
    application_deadline: '2025-01-31',
    contact_email: 'ba@consultpro.com',
    user_id: 11,
    is_active: true,
    posted_date: '2024-12-09',
    applicants: 35,
  },
  {
    id: 12,
    title: 'Machine Learning Engineer',
    company_name: 'AI Innovations',
    company_logo: 'https://via.placeholder.com/80?text=AI',
    location: 'Bangalore, India',
    job_type: 'Full-time',
    experience_level: 'Senior Level',
    salary_min: 2200000,
    salary_max: 3200000,
    currency: 'INR',
    description: 'Build and deploy ML models to solve complex business problems at scale.',
    requirements: ['5+ years ML experience', 'Deep learning expertise', 'Production ML deployment experience', 'Strong programming skills in Python'],
    benefits: ['Stock Options', 'Research Time', 'Conference Budget', 'Health Insurance'],
    tags: ['Machine Learning', 'Deep Learning', 'Python', 'PyTorch', 'MLOps'],
    application_deadline: '2025-02-15',
    contact_email: 'ml@aiinnovations.com',
    user_id: 12,
    is_active: true,
    posted_date: '2024-12-03',
    applicants: 19,
  },
];

export default function JobsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  
  // Filters
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<number[]>([0, 4000000]);
  const [sortBy, setSortBy] = useState('recent');

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];
  const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Lead', 'Executive'];

  // Filter and search logic
  const filteredJobs = useMemo(() => {
    let filtered = dummyJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesLocation = !locationQuery || job.location.toLowerCase().includes(locationQuery.toLowerCase());
      
      const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.job_type);
      
      const matchesExperience = selectedExperienceLevels.length === 0 || 
                               selectedExperienceLevels.includes(job.experience_level);
      
      const matchesSalary = job.salary_max >= salaryRange[0] && job.salary_min <= salaryRange[1];
      
      return matchesSearch && matchesLocation && matchesJobType && matchesExperience && matchesSalary;
    });

    // Sorting
    if (sortBy === 'recent') {
      filtered.sort((a, b) => new Date(b.posted_date).getTime() - new Date(a.posted_date).getTime());
    } else if (sortBy === 'salary_high') {
      filtered.sort((a, b) => b.salary_max - a.salary_max);
    } else if (sortBy === 'salary_low') {
      filtered.sort((a, b) => a.salary_max - b.salary_max);
    } else if (sortBy === 'applicants') {
      filtered.sort((a, b) => (a.applicants || 0) - (b.applicants || 0));
    }

    return filtered;
  }, [searchQuery, locationQuery, selectedJobTypes, selectedExperienceLevels, salaryRange, sortBy]);

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  const handleJobTypeChange = (type: string) => {
    setSelectedJobTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleExperienceChange = (level: string) => {
    setSelectedExperienceLevels(prev =>
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  const clearFilters = () => {
    setSelectedJobTypes([]);
    setSelectedExperienceLevels([]);
    setSalaryRange([0, 4000000]);
    setSortBy('recent');
  };

  const formatSalary = (min: number, max: number, currency: string) => {
    const formatNumber = (num: number) => {
      if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
      if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
      return num.toString();
    };
    return `${formatNumber(min)} - ${formatNumber(max)} ${currency}`;
  };

  const getTimeAgo = (date: string) => {
    const days = Math.floor((new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  const FilterContent = () => (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Filters
        </Typography>
        <Button size="small" onClick={clearFilters} sx={{ textTransform: 'none' }}>
          Clear All
        </Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Job Type */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Job Type
        </Typography>
        <FormGroup>
          {jobTypes.map(type => (
            <FormControlLabel
              key={type}
              control={
                <Checkbox
                  checked={selectedJobTypes.includes(type)}
                  onChange={() => handleJobTypeChange(type)}
                  sx={{
                    color: 'primary.main',
                    '&.Mui-checked': { color: 'primary.main' },
                  }}
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Experience Level */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Experience Level
        </Typography>
        <FormGroup>
          {experienceLevels.map(level => (
            <FormControlLabel
              key={level}
              control={
                <Checkbox
                  checked={selectedExperienceLevels.includes(level)}
                  onChange={() => handleExperienceChange(level)}
                  sx={{
                    color: 'primary.main',
                    '&.Mui-checked': { color: 'primary.main' },
                  }}
                />
              }
              label={level}
            />
          ))}
        </FormGroup>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Salary Range */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Salary Range (INR/year)
        </Typography>
        <Slider
          value={salaryRange}
          onChange={(_, newValue) => setSalaryRange(newValue as number[])}
          valueLabelDisplay="auto"
          min={0}
          max={4000000}
          step={100000}
          valueLabelFormat={(value) => `₹${(value / 100000).toFixed(1)}L`}
          sx={{
            color: 'primary.main',
            '& .MuiSlider-thumb': {
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 8px rgba(37, 99, 235, 0.16)',
              },
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            ₹{(salaryRange[0] / 100000).toFixed(1)}L
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ₹{(salaryRange[1] / 100000).toFixed(1)}L
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const JobCard = ({ job }: { job: Job }) => (
    <Card
      sx={{
        height: '100%',
        transition: 'all 0.3s ease',
        borderRadius: '16px',
        border: '1px solid',
        borderColor: 'rgba(0,0,0,0.08)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
          borderColor: 'primary.main',
        },
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar
              src={job.company_logo}
              sx={{ width: 60, height: 60, bgcolor: 'primary.light' }}
            >
              <BusinessIcon />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                {job.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {job.company_name}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={() => toggleSaveJob(job.id)} size="small">
            {savedJobs.includes(job.id) ? (
              <BookmarkIcon sx={{ color: 'primary.main' }} />
            ) : (
              <BookmarkBorderIcon />
            )}
          </IconButton>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
          <Chip
            icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
            label={job.location}
            size="small"
            sx={{ bgcolor: 'rgba(37, 99, 235, 0.1)', color: 'primary.main' }}
          />
          <Chip
            icon={<WorkIcon sx={{ fontSize: 16 }} />}
            label={job.job_type}
            size="small"
            sx={{ bgcolor: 'rgba(16, 185, 129, 0.1)', color: 'secondary.main' }}
          />
          <Chip
            label={job.experience_level}
            size="small"
            variant="outlined"
          />
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {job.description}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 0.5 }}>
          {job.tags.slice(0, 4).map((tag, idx) => (
            <Chip
              key={idx}
              label={tag}
              size="small"
              sx={{
                fontSize: '0.75rem',
                height: '24px',
                bgcolor: 'background.default',
              }}
            />
          ))}
          {job.tags.length > 4 && (
            <Chip
              label={`+${job.tags.length - 4}`}
              size="small"
              sx={{ fontSize: '0.75rem', height: '24px' }}
            />
          )}
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              {formatSalary(job.salary_min, job.salary_max, job.currency)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              per year
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 14 }} />
              {getTimeAgo(job.posted_date)}
            </Typography>
            {job.applicants && (
              <Typography variant="caption" color="text.secondary">
                {job.applicants} applicants
              </Typography>
            )}
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #1d4ed8 0%, #059669 100%)',
            },
          }}
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
              background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Find Your Dream Job
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {filteredJobs.length} jobs found
          </Typography>
        </Box>

        {/* Search Bar */}
        <Paper
          elevation={2}
          sx={{
            padding: 2,
            borderRadius: '16px',
            mb: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              fullWidth
              placeholder="Job title, keywords, or company"
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
                  borderRadius: '12px',
                  bgcolor: 'white',
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
                  borderRadius: '12px',
                  bgcolor: 'white',
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                minWidth: { xs: '100%', md: 150 },
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
              }}
            >
              Search Jobs
            </Button>
          </Stack>
        </Paper>

        {/* Filters & Results */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* Desktop Filters Sidebar */}
          {!isMobile && (
            <Paper
              elevation={1}
              sx={{
                width: 300,
                maxHeight: 'calc(100vh - 100px)',
                borderRadius: '16px',
                position: 'sticky',
                top: 20,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  overflowY: 'auto',
                  '&::-webkit-scrollbar': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
                    borderRadius: '10px',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #059669 100%)',
                  },
                }}
              >
                <FilterContent />
              </Box>
            </Paper>
          )}

          {/* Mobile Filter Drawer */}
          <Drawer
            anchor="left"
            open={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
            PaperProps={{
              sx: { width: 300 },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
              <Typography variant="h6">Filters</Typography>
              <IconButton onClick={() => setFilterDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <FilterContent />
          </Drawer>

          {/* Job Listings */}
          <Box sx={{ flex: 1 }}>
            {/* Toolbar */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {isMobile && (
                  <Button
                    variant="outlined"
                    startIcon={<FilterListIcon />}
                    onClick={() => setFilterDrawerOpen(true)}
                    sx={{
                      borderRadius: '8px',
                      textTransform: 'none',
                    }}
                  >
                    Filters
                  </Button>
                )}
                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    label="Sort By"
                    sx={{ borderRadius: '8px' }}
                  >
                    <MenuItem value="recent">Most Recent</MenuItem>
                    <MenuItem value="salary_high">Salary: High to Low</MenuItem>
                    <MenuItem value="salary_low">Salary: Low to High</MenuItem>
                    <MenuItem value="applicants">Fewest Applicants</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Tooltip title="List View">
                  <IconButton
                    onClick={() => setViewMode('list')}
                    sx={{
                      bgcolor: viewMode === 'list' ? 'primary.main' : 'transparent',
                      color: viewMode === 'list' ? 'white' : 'text.secondary',
                      '&:hover': {
                        bgcolor: viewMode === 'list' ? 'primary.dark' : 'action.hover',
                      },
                    }}
                  >
                    <ViewListIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Grid View">
                  <IconButton
                    onClick={() => setViewMode('grid')}
                    sx={{
                      bgcolor: viewMode === 'grid' ? 'primary.main' : 'transparent',
                      color: viewMode === 'grid' ? 'white' : 'text.secondary',
                      '&:hover': {
                        bgcolor: viewMode === 'grid' ? 'primary.dark' : 'action.hover',
                      },
                    }}
                  >
                    <ViewModuleIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            {/* Jobs Grid/List */}
            {filteredJobs.length > 0 ? (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: viewMode === 'grid' ? 'repeat(2, 1fr)' : '1fr',
                    lg: viewMode === 'grid' ? 'repeat(3, 1fr)' : '1fr',
                  },
                  gap: 3,
                }}
              >
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </Box>
            ) : (
              <Paper
                sx={{
                  padding: 8,
                  textAlign: 'center',
                  borderRadius: '16px',
                }}
              >
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                  No jobs found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Try adjusting your filters or search terms
                </Typography>
              </Paper>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
