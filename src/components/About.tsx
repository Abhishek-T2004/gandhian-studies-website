import { Users, Target, BookOpen, Globe2 } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: <BookOpen className="text-brand-600" size={32} />, count: "500+", label: "Articles Published" },
    { icon: <Users className="text-brand-600" size={32} />, count: "10k+", label: "Active Students" },
    { icon: <Globe2 className="text-brand-600" size={32} />, count: "25+", label: "Global Events" },
    { icon: <Target className="text-brand-600" size={32} />, count: "100%", label: "Free Resources" },
  ];

  const team = [
    {
      name: "Gandhi ji",
      role: "",
      image: "https://res.cloudinary.com/op8ehuff/image/upload/f_auto,q_auto/Mahatma-Gandhi__studio__1931_1_rthudp",
    },
    {
      name: "Chakra",
      role: " ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhCYq3H0_cXsz83sUJ4VgO8ah-KPEFiMh-qygwJ3ZKj-yP8DBUrOFNrWJ&s=10",   

      
    },
    {
      name: "Gandhi ji",
      role: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66TcePf_fCy7QZlyk_x-Fj1en7URw0x_98yaKxM0o9k-utii74lnAagxE&s=10",
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Mission & Vision */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-6">About The Centre</h2>
          <p className="text-lg text-brand-800 leading-relaxed">
            The Centre of Gandhian Studies and Action is a modern digital platform designed to preserve, 
            spread, and implement the philosophy of Mahatma Gandhi. We identified a gap—authentic 
            Gandhian resources were scattered, making it hard for modern youth to connect with his timeless ideas. 
            Our mission is to bring his teachings into the digital age.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-brand-50 p-6 rounded-lg text-center shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold font-serif text-brand-900 mb-2">{stat.count}</div>
              <div className="text-sm font-medium text-brand-700 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-950 mb-4">Our Core Team</h3>
            <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-100 group-hover:border-brand-400 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-brand-900 mb-1">{member.name}</h4>
                <p className="text-brand-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};