import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Briefcase, DollarSign, CheckCircle, Sparkles, Users, Clock, TrendingUp } from 'lucide-react';

export default function ProgramsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const programs = [
    {
      id: 1,
      icon: MessageCircle,
      title: 'WhatsApp Community',
      description: 'Join our vibrant community of 5,000+ learners. Get daily job opportunities, network with peers, access exclusive resources, and participate in expert Q&A sessions.',
      highlights: [
        { icon: Users, text: 'Network with 5,000+ members' },
        { icon: TrendingUp, text: 'Daily job opportunities' },
        { icon: Sparkles, text: 'Free resources & templates' }
      ],
      cta: 'Join Community',
      link: 'https://chat.whatsapp.com/your-group-link',
      color: '#2E8B57',
      gradient: 'from-[#2E8B57] to-[#2E8B57]/70',
      bgGlow: 'bg-[#2E8B57]'
    },
    {
      id: 2,
      icon: Briefcase,
      title: 'Remote Job Training',
      description: 'Master in-demand remote skills with our comprehensive 12-week program. Get live coaching, build your portfolio, and land your dream remote job with placement support.',
      highlights: [
        { icon: Clock, text: '12-week intensive program' },
        { icon: Users, text: 'Live coaching sessions' },
        { icon: Briefcase, text: 'Job placement support' }
      ],
      cta: 'Start Training',
      link: '/register/remote-job-training',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      bgGlow: 'bg-[#EE7B30]',
      popular: true
    },
    {
      id: 3,
      icon: DollarSign,
      title: 'Financial Freedom with Lilian',
      description: 'Learn proven strategies to achieve financial independence. Master personal finance, investment strategies, and build passive income streams with expert mentorship.',
      highlights: [
        { icon: DollarSign, text: 'Investment strategies' },
        { icon: Users, text: '1-on-1 mentorship' },
        { icon: TrendingUp, text: 'Passive income streams' }
      ],
      cta: 'Start Journey',
      link: '/register/financial-freedom',
      color: '#C9D1D9',
      gradient: 'from-[#C9D1D9] to-[#C9D1D9]/50',
      bgGlow: 'bg-[#C9D1D9]'
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
    <div className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0B1922] via-[#13262F] to-[#0B1922] overflow-hidden">
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
                    <div key={idx} className="flex items-center gap-3 text-[#F9F6F1]">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${program.gradient} flex items-center justify-center flex-shrink-0`}>
                        <highlight.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">{highlight.text}</span>
                    </div>
                  ))}
                </div>

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
          <button className="group inline-flex items-center gap-2 bg-transparent border-2 border-[#C9D1D9]/30 hover:border-[#EE7B30] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#EE7B30]/10">
            <span>Talk to Our Team</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
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