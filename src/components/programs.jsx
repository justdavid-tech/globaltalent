import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Briefcase, DollarSign, CheckCircle, Sparkles, Users, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProgramsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const programs = [
    {
      id: 1,
      icon: MessageCircle,
      title: 'Telegram Community',
      description: 'Join our vibrant community of 2,100+ learners. Get daily job opportunities, network with peers, access exclusive resources, and participate in expert Q&A sessions.',
      highlights: [
        { icon: Users, text: 'Network with 2,100+ members' },
        { icon: TrendingUp, text: 'Daily job opportunities' },
        { icon: Sparkles, text: 'Free resources & templates' }
      ],
      cta: 'Join Community',
      link: 'https://t.me/your-group-link',
      price: 'FREE',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      bgGlow: 'bg-[#EE7B30]',
    },
    {
      id: 2,
      icon: Briefcase,
      title: 'General Training',
      description: 'Master in-demand remote skills with our comprehensive 2days program. Get live coaching, build your portfolio, and land your dream remote job with placement support.',
      highlights: [
        { icon: Clock, text: 'Telemarketing, cold calling, sales', price: '₦10,000' },
        { icon: Users, text: 'Free resources & templates' },
        { icon: Briefcase, text: 'Job support group', price: '₦20,000' }
      ],
      cta: 'Start Training',
      link: '/register/remote-job-training',
      price: '₦30,000',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      bgGlow: 'bg-[#EE7B30]',
      popular: true
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Personal Mentorship',
      description: 'Get personalized guidance and support to achieve your goals. Our expert mentors provide tailored advice, feedback, and resources to help you succeed.',
      highlights: [
        { icon: Users, text: 'Direct Access to coach' },
        { icon: Briefcase, text: 'Exclusive job placement support' }
      ],
      cta: 'Start Training',
      link: '/register/remote-job-training',
      price: '₦250,000',
      priceBreakdown: 'Objective: ₦50,000',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      bgGlow: 'bg-[#EE7B30]',
      popular: false
    },
    {
      id: 4,
      icon: DollarSign,
      title: 'Financial Freedom with Lilian',
      description: 'Master the art of Forex trading and financial independence. Get expert signals, technical analysis training, and proven strategies to build consistent profits.',
      highlights: [
        { icon: CheckCircle, text: 'Copy and paste trading' },
        { icon: TrendingUp, text: 'Daily signal from expert' },
        { icon: Briefcase, text: 'Access to detailed course' },
        { icon: DollarSign, text: 'Passive income stream' }
      ],
      cta: 'Start Journey',
      price: '₦160,000',
      link: '/register/financial-freedom',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      bgGlow: 'bg-[#EE7B30]',
      popular: false
    }
  ];

  const handleCardClick = (link) => {
    // For WhatsApp, open in new tab
    if (link.startsWith('https://')) {
      window.open(link, '_blank');
    } else {
      // For internal links, you can use your router
      console.log('Navigate to:', link);
      // window.location.href = link; // Or use your router
    }
  };

  return (
    <div className="relative py-10 lg:py-12 bg-gradient-to-b from-[#0B1922] via-[#13262F] to-[#0B1922] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDEsIDIwOSwgMjE3LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-[#EE7B30]" />
            <span className="text-[#C9D1D9] text-sm font-medium">Our Programs & Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Choose Your Path to{' '}
            <span className="bg-gradient-to-r from-[#EE7B30] via-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          
          <p className="text-[#C9D1D9] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to join a supportive community, start your remote career, or achieve financial freedom, we have the perfect program for you
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(program.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
                    <Sparkles className="w-3 h-3" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div 
                className={`relative h-full bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 cursor-pointer ${
                  hoveredCard === program.id 
                    ? 'border-[#EE7B30] shadow-[0_0_50px_rgba(238,123,48,0.4)] scale-105 -translate-y-2' 
                    : 'border-[#C9D1D9]/20 shadow-xl'
                }`}
                onClick={() => handleCardClick(program.link)}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-3xl ${program.bgGlow} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`}></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center transition-all duration-500 ${
                    hoveredCard === program.id ? 'scale-110 rotate-6 shadow-lg' : ''
                  }`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Decorative ring */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl border-2 ${hoveredCard === program.id ? 'border-[#EE7B30] scale-125' : 'border-transparent'} transition-all duration-500`}></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#EE7B30] transition-colors duration-300">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-[#C9D1D9] mb-6 leading-relaxed text-sm">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {program.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3 text-[#F9F6F1]">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${program.gradient} flex items-center justify-center flex-shrink-0`}>
                          <highlight.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm">{highlight.text}</span>
                      </div>
                      {highlight.price && (
                        <span className="text-sm font-semibold text-[#EE7B30] bg-[#EE7B30]/10 px-2 py-1 rounded-md">
                          {highlight.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pricing Section */}
                {program.price && (
                  <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-[#C9D1D9]/10">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-2xl font-bold text-white">{program.price}</span>
                    </div>
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-[#C9D1D9]/10 mb-6"></div>

                {/* CTA Button */}
                <button 
                  className={`w-full group/btn relative overflow-hidden bg-gradient-to-r ${program.gradient} text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,123,48,0.5)] flex items-center justify-center gap-2`}
                >
                  <span className="relative z-10">{program.cta}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </button>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient} rounded-b-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#C9D1D9] text-lg mb-6">
            Not sure which program is right for you?
          </p>
          <Link to ="/contact" className="group inline-flex items-center gap-2 bg-transparent border-2 border-[#C9D1D9]/30 hover:border-[#EE7B30] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#EE7B30]/10">
            <span>Talk to Our Team</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}