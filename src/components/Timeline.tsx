export const Timeline = () => {
  const timelineEvents = [
    {
      year: "1869",
      title: "Birth",
      description: "Mohandas Karamchand Gandhi is born in Porbandar, Gujarat, India."
    },
    {
      year: "1893",
      title: "Arrival in South Africa",
      description: "Travels to South Africa for legal work, where he faces discrimination and begins organizing protests."
    },
    {
      year: "1915",
      title: "Return to India",
      description: "Returns to India permanently and joins the Indian National Congress, taking charge of the freedom struggle."
    },
    {
      year: "1930",
      title: "Salt March (Dandi March)",
      description: "Leads a 240-mile march to the sea to protest the British monopoly on salt, sparking nationwide civil disobedience."
    },
    {
      year: "1942",
      title: "Quit India Movement",
      description: "Launches the 'Quit India' movement demanding an end to British rule in India."
    },
    {
      year: "1948",
      title: "Assassination",
      description: "Assassinated in New Delhi. The world mourns the loss of the apostle of peace."
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-4">Timeline of Mahatma Gandhi</h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-600 border-4 border-brand-50 transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10"></div>
                
                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 bg-brand-100 text-brand-800 font-bold rounded-full text-sm mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-brand-900 mb-2">{event.title}</h3>
                    <p className="text-brand-700">{event.description}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};