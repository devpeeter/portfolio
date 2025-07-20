import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, ChevronRight, ChevronLeft, Award, TrendingUp, Users, Code2, Zap, Shield, Globe, Star, Building, Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'Mariblock',
      position: 'Blockchain Engineer',
      duration: 'November 2024 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Led the foundational development of Mariblock Labs, the R&D arm of Mariblock, and helped establish Mariblock Collectives, its official developer community. Collaborated as part of the core engineering team driving the development of Mariblock’s upcoming DeFi protocol, focused on delivering secure, scalable, and inclusive financial infrastructure',
      responsibilities: [
        {
          icon: <TrendingUp size={16} />,
          text: 'Build Mariblock Lab and Mariblock collectives',
          impact: 'R&D and Community Growth'
        },
        {
          icon: <Zap size={16} />,
          text: 'Designed and optimized smart contracts and blockchain functionalities on Starknet blockchain',
          impact: '-60% Gas'
        },
        {
          icon: <Shield size={16} />,
          text: 'Implemented backend services integrated with the Argent Wallet SDK for the Telegram platform',
          impact: 'Easy Adoption'
        },
        {
          icon: <Users size={16} />,
          text: 'Developed secure and efficient transaction flows for onboarding, remittance, and off-ramping',
          impact: 'Seemless UX'
        },
        {
          icon: <Users size={16} />,
          text: 'Collaborated with frontend and product teams to ensure a seamless and intuitive user experience',
          impact: 'Seemless UI'
        },
        {
          icon: <Users size={16} />,
          text: 'Addressed technical challenges and resolved issues during the development lifecycle',
          impact: '95% Security'
        },
        {
          icon: <Users size={16} />,
          text: 'Contributed to technical documentation and promoted best practices across the team',
          impact: 'Documentation'
        }
      ],
      technologies: ['Cairo', 'Solidity', 'Java', 'Node',  'Rust', 'Starknet Foundry',  'OpenZeppelin'],
      website: 'https://www.mariblock.com/',
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      company: 'Syncskills',
      position: 'Backend Engineer',
      duration: 'July 2023 – March 2024',
      location: 'Flagstone, QLD, Australia (Remote)',
      type: 'Full-time',
      description: 'Developed the company’s core platform that connects customers with artisans for seamless service delivery. Also built the internal Learning Management System (LMS) to support onboarding, training, and continuous skill development.',
      responsibilities: [
        {
          icon: <Zap size={16} />,
          text: 'Integrated RabbitMQ to optimize communication, achieving 20% lower message latency, 25% better responsiveness, and 60% reduction in processing bottlenecks',
          impact: 'Reduced latency and bottlenecks'
        },
        {
          icon: <Code2 size={16} />,
          text: 'Engineered secure authentication systems with Spring Security and OAuth2, enhancing security by 80%, reducing vulnerabilities by 30%, and increasing user engagement by 25%',
          impact: 'Enhanced security and adoption'
        },
        {
          icon: <Globe size={16} />,
          text: 'Improved database performance with Flyway and an optimized framework, cutting query times by 50% and reducing deployment complexity by 50%',
          impact: 'Reduced query time and complexity'
        },
        {
          icon: <Globe size={16} />,
          text: 'Developed comprehensive validation and error-handling mechanisms, reducing critical bugs by 95%, system downtime by 40%, and resolution time by 50%',
          impact: 'Minimized bugs and downtime'
        },
        {
          icon: <Globe size={16} />,
          text: 'Enabled seamless and secure payments through Stripe, PayPal, and PayID, boosting customer conversion rates by 10%',
          impact: 'Improved payment success'
        },
        {
          icon: <Globe size={16} />,
          text: 'Conducted detailed requirement analysis and testing, improving overall system performance and ensuring real-time updates with RabbitMQ',
          impact: 'Enhanced system reliability'
        },
         {
          icon: <Users size={16} />,
          text: 'Mentored junior developers and established security best practices across teams',
          impact: 'Team Leadership'
        }
      ],
      technologies: ['Java', 'Node', 'React', 'Docker', 'PostgreSQL', 'RabbitMQ', 'Flyway'],
      website: 'https://www.syncskills.com.au/',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      company: 'Boy Boy, Nigeria',
      position: 'Fullstack Engineer',
      duration: 'December 2022 – June 2023',
      location: 'Lagos, Nigeria',
      type: 'Hybrid',
      description: 'Worked with a cross-functional team to develop a task delegation platform that connects requesters with service providers. Implemented core backend features including user matching, real-time notifications, and secure transaction flows. Focused on scalable architecture and smooth user experience across web and mobile clients.',
      responsibilities: [
        {
          icon: <Shield size={16} />,
          text: 'Produced scalable, multimodule code, paving the way for microservices migration and achieving an estimated 30% performance improvement',
          impact: 'Improved scalability and performance'
        },
        {
          icon: <Zap size={16} />,
          text: 'Designed resilient database architecture with Flyway integration, reducing deployment complexity by 50%, query response times by 40%, and ensuring 99% uptime',
          impact: 'Improved DB reliability and speed'
        },
        {
          icon: <Globe size={16} />,
          text: 'Engineered intuitive user interfaces and implemented features that reduced resource consumption by 30% and boosted user engagement by 15%',
          impact: 'Improved UX and performance'
        },
        {
          icon: <Award size={16} />,
          text: 'Integrated the Squard payment gateway, enabling secure transactions and increasing customer conversion rates by 10%',
          impact: 'Improved payment flow'
        },
        {
          icon: <Award size={16} />,
          text: 'Conducted thorough testing and validation, leading to a 95% reduction in critical issues and a 25% enhancement in system functionality and reliability',
          impact: 'Enhanced system stability'
        }
      ],
      technologies: ['Java', 'Node', 'React', 'Docker', 'MongoDB', 'Flyway'],
      website: '#',
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
  ];

  const totalYears = new Date().getFullYear() - 2022;

  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 bg-gray-50 from-gray-50 via-purple-50 to-gray-50">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + Math.sin(Date.now() / 3000) * 10}%`,
            top: `${20 + Math.cos(Date.now() / 4000) * 10}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + Math.sin(Date.now() / 3500) * 8}%`,
            top: `${30 + Math.cos(Date.now() / 3200) * 12}%`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-green-500/25 to-teal-500/25 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${60 + Math.sin(Date.now() / 2800) * 15}%`,
            bottom: `${20 + Math.cos(Date.now() / 3800) * 8}%`,
            animationDelay: '2s'
          }}
        ></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 lg:mb-6">
                <Briefcase size={16} className="text-orange-400" />
                <span className="text-orange-600 dark:text-orange-300 font-medium text-sm sm:text-base">Professional Journey</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
                Work <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {totalYears}+ years of building revolutionary blockchain solutions, from smart contracts, ZK proof research, to protocol engineering, with a proven track record of delivering secure, scalable, and innovative systems.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-6 lg:mt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {totalYears}+
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {experiences.length}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Companies</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Successful Projects</div>
                </div>
              </div>
            </div>

            {/* Active Experience Display */}
            <div className={`mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border-2 border-gray-200 dark:border-white/20 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl mx-4 sm:mx-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Company Info Sidebar */}
                  <div className={`bg-gradient-to-br ${experiences[activeExperience].gradient} p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="mb-6 lg:mb-8">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 lg:mb-4">
                          <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg lg:rounded-xl">
                            <Building size={20} className="sm:w-6 sm:h-6" />
                          </div>
                          {experiences[activeExperience].website && (
                            <a 
                              href={experiences[activeExperience].website} 
                              className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-md lg:rounded-lg hover:bg-white/30 transition-all duration-300"
                              title="Visit Company Website"
                            >
                              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                            </a>
                          )}
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                          {experiences[activeExperience].company}
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-white/90">
                          {experiences[activeExperience].position}
                        </p>
                        
                        <div className="space-y-2 lg:space-y-3 text-white/80 text-sm lg:text-base">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="lg:w-4 lg:h-4" />
                            <span>{experiences[activeExperience].duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="lg:w-4 lg:h-4" />
                            <span>{experiences[activeExperience].location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase size={14} className="lg:w-4 lg:h-4" />
                            <span>{experiences[activeExperience].type}</span>
                          </div>
                        </div>
                      </div>

                     
                    </div>
                  </div>
                  
                  {/* Experience Details */}
                  <div className="lg:col-span-2 p-6 sm:p-8 lg:p-12">
                    <div className="mb-6 lg:mb-8">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">Role Summary</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {experiences[activeExperience].description}
                      </p>
                    </div>

                   
                    {/* Key Achievements */}
                    <div className="mb-6 lg:mb-8">

                        {/* Technologies*/}
                    <div className="mb-6 lg:mb-8">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 flex items-center gap-2">
                        <Code2 size={18} className="text-blue-400 sm:w-5 sm:h-5" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {experiences[activeExperience].technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`bg-gradient-to-r ${experiences[activeExperience].gradient} bg-opacity-20 text-gray-800 dark:text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-md lg:rounded-lg text-xs sm:text-sm border border-gray-300 dark:border-white/20 font-medium hover:scale-105 transition-transform duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 flex items-center gap-2">
                        <Users size={18} className="text-green-400 sm:w-5 sm:h-5" />
                        Core Contributions
                      </h4>
                        
                       
                      <div className="space-y-3 lg:space-y-4">
                        {experiences[activeExperience].responsibilities.map((achievement, achIndex) => (
                          <div key={achIndex} className="group flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300">
                            <div className={`bg-gradient-to-r ${experiences[activeExperience].gradient} p-1.5 lg:p-2 rounded-md lg:rounded-lg text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2 text-sm lg:text-base">
                                {achievement.text}
                              </p>
                              <div className={`inline-flex items-center gap-1 px-2 lg:px-3 py-1 bg-gradient-to-r ${experiences[activeExperience].gradient} bg-opacity-20 rounded-full`}>
                                <Star size={10} className="text-yellow-400 lg:w-3 lg:h-3" />
                                <span className="text-xs font-semibold text-gray-800 dark:text-white">
                                  {achievement.impact}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              <button
                onClick={() => setActiveExperience((prev) => (prev - 1 + experiences.length) % experiences.length)}
                className="group bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
                title="Previous Experience"
              >
                <ChevronLeft size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300 sm:w-6 sm:h-6" />
              </button>
              
              <div className="text-center">
                <div className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1">
                  {experiences[activeExperience].company}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  {activeExperience + 1} of {experiences.length}
                </div>
              </div>
              
              <button
                onClick={() => setActiveExperience((prev) => (prev + 1) % experiences.length)}
                className="group bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
                title="Next Experience"
              >
                <ChevronRight size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;