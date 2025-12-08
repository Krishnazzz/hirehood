'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const companiesScrollerRef = useRef<HTMLDivElement>(null);
  const categoriesScrollerRef = useRef<HTMLDivElement>(null);
  const [currentRoleSlide, setCurrentRoleSlide] = useState(0);

  // Auto-scroll for companies
  useEffect(() => {
    const scroller = companiesScrollerRef.current;
    if (!scroller) return;

    let baseX = 0;
    let lastTime = Date.now();
    const velocity = 100;
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
    const velocity = 100;
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
    { icon: '💻', name: 'Technology' },
    { icon: '⚕️', name: 'Healthcare' },
    { icon: '💰', name: 'Finance' },
    { icon: '🌐', name: 'Global Connect' },
    { icon: '🤝', name: 'Sales & Business' },
    { icon: '💬', name: 'Customer' },
    { icon: '🎨', name: 'Design' },
    { icon: '💼', name: 'Creative Services' },
    { icon: '🎓', name: 'Education' },
    { icon: '📊', name: 'Analytics' },
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
    <main className="min-h-screen bg-[#f8f9fc]">
      <div className="max-w-[1200px] mx-auto px-5 py-[60px]">
        {/* Hero Section */}
        <section className="text-center mb-[60px]">
          <h1 className="text-5xl font-bold text-[#333] mb-10 leading-tight">
            Find Your Dream Job, Faster
          </h1>
          <div className="max-w-[800px] mx-auto">
            <div className="flex bg-white rounded-[50px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] mb-4">
              <input
                type="text"
                placeholder="Job Title, Skills"
                className="flex-1 px-6 py-5 border-none outline-none text-base text-[#333] placeholder:text-[#999]"
              />
              <input
                type="text"
                placeholder="Location"
                className="flex-1 px-6 py-5 border-none border-l border-l-[#eee] outline-none text-base text-[#333] placeholder:text-[#999]"
              />
              <button className="bg-[#4FC3F7] text-white border-none px-9 text-base font-semibold cursor-pointer transition-colors hover:bg-[#29B6F6]">
                Search
              </button>
            </div>
            <p className="text-[#666] text-base">Discover hand-picked opportunities</p>
          </div>
        </section>

        {/* Job Cards Section */}
        <section className="mb-20 text-center">
          <div className="flex justify-center gap-[30px] flex-wrap">
            {[
              { icon: '🏢', title: 'Senior UI/UX Designer', location: 'California, US' },
              { icon: '💻', title: 'Software Engineer L4', location: 'New York, US' },
              { icon: '📊', title: 'Marketing Specialist', location: 'Texas, US' },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white p-[30px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all hover:translate-y-[-5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] min-w-[280px] relative overflow-hidden cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#4FC3F7] after:transition-all hover:after:w-full"
              >
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#4FC3F7] to-[#29B6F6] rounded-[15px] flex items-center justify-center mx-auto mb-5 text-white text-2xl">
                  {job.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333] mb-2">{job.title}</h3>
                  <p className="text-[#666] text-sm">{job.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Categories */}
        <section className="mb-20">
          <h2 className="text-[32px] font-semibold text-[#333] mb-10 text-center">
            Trending Job Categories
          </h2>
          <div className="overflow-hidden w-full relative">
            <div
              ref={categoriesScrollerRef}
              className="flex gap-5 w-max items-center"
            >
              {/* First set */}
              {categories.map((category, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white py-6 px-4 rounded-[15px] text-center shadow-[0_3px_15px_rgba(0,0,0,0.08)] transition-all hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] cursor-pointer min-w-[120px]"
                >
                  <div className="text-2xl text-[#4FC3F7] mb-2.5 block">{category.icon}</div>
                  <span className="text-sm text-[#666] font-medium">{category.name}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {categories.map((category, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white py-6 px-4 rounded-[15px] text-center shadow-[0_3px_15px_rgba(0,0,0,0.08)] transition-all hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] cursor-pointer min-w-[120px]"
                >
                  <div className="text-2xl text-[#4FC3F7] mb-2.5 block">{category.icon}</div>
                  <span className="text-sm text-[#666] font-medium">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Roles Section */}
        <section className="mb-[50px] my-[35px] inline-block rounded shadow-none min-w-[50px] min-h-[50px] w-full overflow-auto">
          <div className="my-10 mx-0 relative h-[335px] rounded-[20px] border border-[#ADD8E6] bg-gradient-to-b from-[rgba(173,216,230,0.1)] to-[#87CEEB] max-w-[1120px]">
            {/* Left side content */}
            <div className="absolute w-[420px] pt-6 pl-[60px]">
              <img
                src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png"
                alt="Discover roles"
                className="h-[175px] w-[389px]"
              />
              <p className="text-2xl leading-[31px] mt-1.5 w-[275px] font-black text-[rgb(18,18,36)]">
                Discover jobs across popular roles
              </p>
              <p className="mt-3 w-[360px] font-medium text-sm leading-[18px] text-[rgb(71,77,106)]">
                Select a role and we'll show you relevant jobs for it!
              </p>
            </div>

            {/* Right side roles carousel */}
            <div className="absolute -top-[38px] left-[584px] h-[411px] w-[476px] bg-white border border-[#E7E7F1] rounded-[20px] shadow-[0_6px_12px_rgba(30,10,58,0.04)]">
              <div className="mx-auto overflow-hidden relative z-[1]">
                <div
                  className="flex relative w-full h-[349px] z-[1] transition-transform duration-500"
                  style={{ transform: `translateX(-${currentRoleSlide * 475}px)` }}
                >
                  {roleSlides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="flex-shrink-0 w-[475px] h-[349px] relative"
                    >
                      <div className="pt-[61px] pl-6">
                        {slide.map((role, roleIndex) => (
                          <div
                            key={roleIndex}
                            className="relative inline-flex justify-center items-center h-[74px] w-[207px] mr-3 mb-[22px]"
                          >
                            <div className="cursor-pointer w-[202px] h-[74px] bg-white border border-[#E7E7F1] rounded-[16px] hover:shadow-lg transition-shadow">
                              <div className="relative table-cell h-[74px] left-5 align-middle">
                                <Link
                                  href={`/jobs?search=${encodeURIComponent(role.role)}`}
                                  className="block max-w-[160px] overflow-hidden whitespace-nowrap text-ellipsis font-bold text-base leading-5 text-[rgb(18,18,36)] mb-1.5 no-underline hover:text-[#4FC3F7]"
                                >
                                  {role.role}
                                </Link>
                                <p className="font-medium text-sm leading-[18px] text-[rgb(71,77,106)]">
                                  {role.jobs} Jobs
                                  <span className="ml-2.5 relative top-[2px] text-xs">→</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {roleSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRoleSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentRoleSlide === index ? 'bg-[#4FC3F7] w-6' : 'bg-[#ddd]'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Connect with Top Companies Section */}
        <section className="mb-20 text-center">
          <h2 className="text-[32px] font-semibold text-[#333] mb-10">
            Connect with Top Companies
          </h2>

          <div className="overflow-hidden w-full relative">
            <div
              ref={companiesScrollerRef}
              className="flex gap-10 w-max items-center"
            >
              {/* First set of companies */}
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-[15px] shadow-[0_3px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] p-5 min-w-[150px] h-20 cursor-pointer"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-[120px] max-h-[60px] w-auto h-auto object-contain transition-all duration-300 hover:grayscale"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-[15px] shadow-[0_3px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] p-5 min-w-[150px] h-20 cursor-pointer"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-[120px] max-h-[60px] w-auto h-auto object-contain transition-all duration-300 hover:grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
