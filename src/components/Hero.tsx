import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-50">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://www.pngmagic.com/webp_images/gandhi-ji-sketch-transparent-background-png_83KI.webp"
          alt="Spinning Wheel Texture" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600"></span>
              Welcome to the Centre of Gandhian Studies
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-950 leading-tight mb-6">
              A man in a simple loincloth moved an empire <span className="text-brand-600 italic">without a single shot.</span>
            </h1>
            
            <div className="prose prose-lg text-brand-800 mb-8 border-l-4 border-brand-500 pl-6 py-2">
              <p className="mb-4 text-lg">
                <strong>Imagine a world consumed by noise and conflict.</strong> 
                Over 70 years ago, one man showed us a different path. Armed only with 
                <span className="font-semibold"> Truth (Satyagraha)</span> and 
                <span className="font-semibold"> Non-Violence (Ahimsa)</span>, he proved that the softest voice can deafen the roar of cannons.
              </p>
              <p className="text-base">
                Today, our digital platform bridges this timeless philosophy with modern action. 
                Whether you're a student, researcher, or peace seeker, discover the principles that shaped modern history.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="inline-flex items-center justify-center gap-2 bg-brand-700 text-white px-6 py-3 rounded-md font-medium hover:bg-brand-800 transition-colors shadow-md">
                Begin Your Journey
                <ArrowRight size={18} />
              </a>
              <a href="#resources" className="inline-flex items-center justify-center gap-2 bg-white text-brand-800 border border-brand-200 px-6 py-3 rounded-md font-medium hover:bg-brand-50 transition-colors shadow-sm">
                <Play size={18} className="text-brand-600" />
                Explore Resources
              </a>
            </div>
          </div>
          
          <div className="relative lg:ml-10">
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-t-full overflow-hidden border-8 border-white shadow-2xl relative">
              <img 
                src="https://thumbs.dreamstime.com/b/drawing-sketch-father-india-nation-mahatma-gandhiji-outline-editable-illustration-224487954.jpg" 
                alt="Statue of Mahatma Gandhi" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-white p-5 rounded-lg shadow-xl border border-brand-100 max-w-xs">
              <div className="text-brand-600 font-serif font-bold text-3xl mb-1">100+</div>
              <p className="text-sm text-brand-800 font-medium">Free Learning Resources, Articles, & Historic Archives</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};