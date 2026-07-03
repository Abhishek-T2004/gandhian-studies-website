import { Heart, Scale, Feather } from 'lucide-react';

export const Values = () => {
  const values = [
    {
      title: "Satya (Truth)",
      description: "Truth is not merely speaking the truth, but seeking it in every aspect of life. Gandhi believed that Truth is God, and the pursuit of truth is the ultimate goal of human existence.",
      icon: <Scale size={40} className="text-brand-600" />
    },
    {
      title: "Ahimsa (Non-Violence)",
      description: "More than just the absence of physical violence, Ahimsa is a state of active love and compassion towards all living beings. It is the weapon of the strong, not the weak.",
      icon: <Heart size={40} className="text-brand-600" />
    },
    {
      title: "Sarvodaya (Upliftment of All)",
      description: "True progress is measured by the welfare of the poorest and the most marginalized. It advocates for an egalitarian society where wealth and resources are shared.",
      icon: <Feather size={40} className="text-brand-600" />
    }
  ];

  return (
    <section id="values" className="py-20 bg-brand-900 text-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Core Gandhian Values</h2>
          <p className="max-w-2xl mx-auto text-brand-200 text-lg">
            "These principles are not meant to be read, they are meant to be lived."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((val, idx) => (
            <div key={idx} className="bg-brand-800 p-8 rounded-xl border border-brand-700 hover:bg-brand-700 transition-colors duration-300">
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{val.title}</h3>
              <p className="text-brand-200 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Inspirational Quote Banner */}
        <div className="relative bg-white text-brand-900 p-10 md:p-16 rounded-2xl shadow-xl overflow-hidden text-center">
          <div className="absolute top-0 left-0 text-[150px] text-brand-100 font-serif leading-none opacity-50 -mt-10 -ml-4">"</div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-serif font-bold italic mb-8 max-w-4xl mx-auto leading-snug">
              "You must be the change you wish to see in the world."
            </h3>
            <div className="text-brand-600 font-bold uppercase tracking-widest text-sm">— Mahatma Gandhi</div>
          </div>
        </div>

      </div>
    </section>
  );
};