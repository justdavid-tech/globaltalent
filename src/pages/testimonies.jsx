import React, { useState, useRef, useEffect } from 'react';
import { Star, Quote, TrendingUp, Briefcase, DollarSign, Users, Play, Volume2, VolumeX, MessageCircle, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function TestimonialsPage() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const videoSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRefs.current[0]) {
            videoRefs.current[0].play();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transformationStories = [
    {
      name: 'Sarah Johnson',
      role: 'Remote Marketing Manager',
      location: 'Lagos, Nigeria',
      image: '/assets/testimonies-1.jpeg',
      rating: 5,
      before: {
        job: 'Unemployed Graduate',
        salary: '₦0',
        situation: 'Struggling to find work after graduation'
      },
      after: {
        job: 'Marketing Manager at Tech Startup',
        salary: '$3,500/month',
        situation: 'Working remotely from home'
      },
      timeline: '8 weeks',
      story: 'After graduating with a degree in Mass Communication, I spent 18 months searching for a job with no success. I felt hopeless and started questioning my career choice. Then I discovered Lian work from home training. Within 8 weeks of joining the Remote Job Training program, I learned digital marketing skills, built a portfolio with real projects, and landed my dream remote job. I went from earning nothing to making $3,500 monthly, all while working from the comfort of my home. Lilian\'s coaching and support changed everything for me. Today, I manage marketing campaigns for a US-based tech startup and I couldn\'t be happier!',
      achievements: [
        'Completed 5 portfolio projects',
        'Mastered Google Ads & SEO',
        'Landed job within 2 months',
        '10x income increase'
      ]
    },
    {
      name: 'Michael Olamide',
      role: 'Full-Stack Developer',
      location: 'Abuja, Nigeria',
      image: '/assets/testimonies-3.jpeg',
      rating: 5,
      before: {
        job: 'Local IT Support',
        salary: '₦80,000/month',
        situation: 'Underpaid and overworked'
      },
      after: {
        job: 'Senior Developer at Remote Company',
        salary: '$4,200/month',
        situation: 'Financial freedom & flexibility'
      },
      timeline: '12 weeks',
      story: 'I was working as an IT support technician earning ₦80,000 monthly, barely making ends meet. I knew I had potential but didn\'t know how to break into the remote tech world. Lian work from home training gave me the structure and guidance I needed. I learned modern development frameworks, built real applications, and most importantly, learned how to market myself to international clients. Within 3 months of completing the program, I secured a senior developer role paying $4,200 monthly. My life has completely transformed—I now support my family comfortably and even started investing. The best part? I work from anywhere!',
      achievements: [
        'Built 7 full-stack applications',
        'Learned React, Node.js, and AWS',
        'Tripled salary in 4 months',
        'Now mentoring other developers'
      ]
    },
    {
      name: 'Amara Okafor',
      role: 'Virtual Executive Assistant',
      location: 'Port Harcourt, Nigeria',
      image: '/assets/testimonies-2.jpeg',
      rating: 5,
      before: {
        job: 'Stay-at-home Mom',
        salary: '₦0',
        situation: 'Financially dependent'
      },
      after: {
        job: 'Executive Assistant to 3 CEOs',
        salary: '$2,800/month',
        situation: 'Independent & empowered'
      },
      timeline: '6 weeks',
      story: 'As a stay-at-home mom, I felt lost and financially dependent. I wanted to contribute to my family\'s income without sacrificing time with my children. Lian work from home training showed me that was possible. I joined the Remote Job Training program with zero professional experience. Lilian taught me virtual assistance skills, time management, and how to work with international clients. Just 6 weeks after starting, I landed my first client. Today, I manage schedules and operations for 3 CEOs, earning $2,800 monthly while still being present for my kids. This program gave me back my confidence and financial independence.',
      achievements: [
        'Gained professional skills from scratch',
        'Built client base of 3 CEOs',
        'Achieved work-life balance',
        'Inspired other moms to start'
      ]
    }
  ];

  const whatsappScreenshots = [
    {
      sender: 'Grace A.',
      message: 'I just got my first remote job offer! $1,500/month! Thank you so much Lilian! I can\'t believe this is real! 😭🎉',
      time: '10:23 AM',
      verified: true
    },
    {
      sender: 'Daniel O.',
      message: 'Update: Just completed my 3rd month as a remote developer. Earned $12,000 so far. Lian work from home training literally changed my life. Forever grateful! 🙏💯',
      time: '2:15 PM',
      verified: true
    },
    {
      sender: 'Blessing M.',
      message: 'Guys!!! I just received my first payment of $2,000! This is more than I made in 3 months at my old job! Remote work is REAL! Thank you Lian work from home training family! ❤️🚀',
      time: '4:45 PM',
      verified: true
    },
    {
      sender: 'Emeka C.',
      message: 'Started with Lian work from home training 4 months ago with ZERO experience. Today I have 5 clients paying me a total of $3,200/month. Lilian, you\'re a blessing! 🙌',
      time: '11:30 AM',
      verified: true
    },
    {
      sender: 'Fatima H.',
      message: 'I was skeptical at first but wow! Just landed a virtual assistant role with an Australian company. $2,500/month! This community is amazing! 🌟💪',
      time: '9:12 AM',
      verified: true
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'Jennifer Adeyemi',
      role: 'Content Writer',
      thumbnail: 'https://via.placeholder.com/640x360/2E8B57/FFFFFF?text=Jennifer+Success+Story',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual video
      duration: '3:24'
    },
    {
      id: 2,
      name: 'Peter Nwosu',
      role: 'Graphic Designer',
      thumbnail: 'https://via.placeholder.com/640x360/EE7B30/FFFFFF?text=Peter+Journey',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4', // Replace with actual video
      duration: '2:45'
    },
    {
      id: 3,
      name: 'Chioma Eze',
      role: 'Social Media Manager',
      thumbnail: 'https://via.placeholder.com/640x360/C9D1D9/000000?text=Chioma+Transformation',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual video
      duration: '4:12'
    }
  ];

  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
    setActiveVideo(index);
  };

  const toggleMute = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = !isMuted;
      }
    });
    setIsMuted(!isMuted);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-[#13262F] via-[#0B1922] to-[#13262F]">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#EE7B30]" />
              <span className="text-[#C9D1D9] text-sm font-medium">Real Stories, Real Results</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Success{' '}
              <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            
            <p className="text-[#C9D1D9] text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Discover how our students transformed their lives and achieved financial freedom through remote work
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {[
              { value: '5,000+', label: 'Success Stories', icon: Users },
              { value: '92%', label: 'Success Rate', icon: TrendingUp },
              { value: '$2.5k', label: 'Avg. Starting Salary', icon: DollarSign },
              { value: '3 months', label: 'Avg. Time to Job', icon: Briefcase }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-2xl p-6 border border-[#C9D1D9]/20 text-center">
                <stat.icon className="w-8 h-8 text-[#EE7B30] mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#C9D1D9] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transformation Stories */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Transformation{' '}
              <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-[#C9D1D9] text-lg">From struggle to success: Their inspiring journeys</p>
          </div>

          <div className="space-y-12">
            {transformationStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-500">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Profile & Rating */}
                  <div className="text-center lg:text-left">
                    {story.image.startsWith('/') || story.image.startsWith('http') ? (
                      <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-[#EE7B30]/30 shadow-lg shadow-[#EE7B30]/20">
                        <img 
                          src={story.image} 
                          alt={story.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div className="text-8xl mb-4 transform hover:scale-110 transition-transform duration-300 inline-block">{story.image}</div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                    <p className="text-[#EE7B30] font-semibold mb-1">{story.role}</p>
                    <p className="text-[#C9D1D9] text-sm mb-4">{story.location}</p>
                    
                    <div className="flex gap-1 justify-center lg:justify-start mb-6">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#EE7B30] text-[#EE7B30]" />
                      ))}
                    </div>

                    {/* Before/After */}
                    <div className="space-y-4">
                      <div className="bg-[#13262F]/50 rounded-xl p-4 border border-[#C9D1D9]/10">
                        <p className="text-[#C9D1D9] text-xs uppercase mb-2">Before Lian work from home training</p>
                        <p className="text-white font-bold mb-1">{story.before.job}</p>
                        <p className="text-[#EE7B30] text-sm">{story.before.salary}</p>
                      </div>
                      
                      <div className="flex justify-center">
                        <ArrowRight className="w-6 h-6 text-[#2E8B57] rotate-90 lg:rotate-0" />
                      </div>
                      
                      <div className="bg-gradient-to-br from-[#2E8B57]/20 to-[#2E8B57]/10 rounded-xl p-4 border border-[#2E8B57]/30">
                        <p className="text-[#C9D1D9] text-xs uppercase mb-2">After Lian work from home training</p>
                        <p className="text-white font-bold mb-1">{story.after.job}</p>
                        <p className="text-[#2E8B57] font-bold text-sm">{story.after.salary}</p>
                      </div>
                      
                      <div className="bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2">
                        <p className="text-[#EE7B30] font-semibold text-sm">Timeline: {story.timeline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Story & Achievements */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-12 h-12 text-[#EE7B30] opacity-20" />
                      <p className="text-[#F9F6F1] text-lg leading-relaxed pl-8">
                        {story.story}
                      </p>
                    </div>

                    <div className="bg-[#13262F]/50 rounded-2xl p-6">
                      <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2E8B57]" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {story.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-[#EE7B30] flex-shrink-0 mt-1" />
                            <span className="text-[#C9D1D9] text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Screenshots */}
      <div className="relative py-20 bg-gradient-to-b from-[#0B1922] to-[#13262F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#2E8B57]/10 border border-[#2E8B57]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
              <MessageCircle className="w-4 h-4 text-[#2E8B57]" />
              <span className="text-[#C9D1D9] text-sm font-medium">From Our Community</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Real Messages,{' '}
              <span className="bg-gradient-to-r from-[#2E8B57] to-[#C9D1D9] bg-clip-text text-transparent">
                Real Wins
              </span>
            </h2>
            <p className="text-[#C9D1D9] text-lg">Unfiltered success messages from our WhatsApp community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsappScreenshots.slice(0, 3).map((screenshot, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border border-[#C9D1D9]/20 hover:scale-105 transition-all duration-300">
                {/* WhatsApp Message Style */}
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-none p-4 mb-3">
                  <p className="text-[#000000] text-sm leading-relaxed mb-2">{screenshot.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#667781] text-xs">{screenshot.time}</span>
                    {screenshot.verified && (
                      <CheckCircle className="w-4 h-4 text-[#2E8B57]" />
                    )}
                  </div>
                </div>
                <p className="text-[#EE7B30] font-semibold">— {screenshot.sender}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {whatsappScreenshots.slice(3).map((screenshot, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border border-[#C9D1D9]/20 hover:scale-105 transition-all duration-300">
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-none p-4 mb-3">
                  <p className="text-[#000000] text-sm leading-relaxed mb-2">{screenshot.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#667781] text-xs">{screenshot.time}</span>
                    {screenshot.verified && (
                      <CheckCircle className="w-4 h-4 text-[#2E8B57]" />
                    )}
                  </div>
                </div>
                <p className="text-[#EE7B30] font-semibold">— {screenshot.sender}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Testimonials */}
      <div ref={videoSectionRef} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
              <Play className="w-4 h-4 text-[#EE7B30]" />
              <span className="text-[#C9D1D9] text-sm font-medium">Video Testimonials</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Hear Their{' '}
              <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-[#C9D1D9] text-lg">Watch our students share their transformation journeys</p>
          </div>

          {/* Mute/Unmute Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 bg-[#F9F6F1]/10 border border-[#C9D1D9]/20 hover:border-[#EE7B30] px-4 py-2 rounded-full transition-all duration-300"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-5 h-5 text-[#C9D1D9]" />
                  <span className="text-[#C9D1D9] text-sm">Unmute All</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5 text-[#EE7B30]" />
                  <span className="text-[#EE7B30] text-sm">Mute All</span>
                </>
              )}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={video.id} className="group bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-4 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-500">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full aspect-video object-cover"
                    controls
                    muted={isMuted}
                    playsInline
                    onPlay={() => handleVideoPlay(index)}
                    poster={video.thumbnail}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {activeVideo !== index && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                      <div className="w-16 h-16 bg-[#EE7B30] rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                
                <h4 className="text-white font-bold text-lg mb-1">{video.name}</h4>
                <p className="text-[#C9D1D9] text-sm">{video.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-12 border border-[#C9D1D9]/20 text-center">
            <Sparkles className="w-16 h-16 text-[#EE7B30] mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-[#C9D1D9] text-lg mb-8">
              Join 5,000+ students who've transformed their lives. Your journey starts today.
            </p>
            <button className="group bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,123,48,0.6)] hover:scale-105 flex items-center justify-center gap-2 mx-auto">
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
