import { useState, FormEvent } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const Events = () => {
  const [formData, setFormData] = useState({ name: '', email: '', event: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventsList = [
    {
      title: "V.k.krishna menon collge",
      date: "july 4, 2026",
      time: "8:30 AM - 4:00 PM",
      location: "Main Auditorium, college",
    },
    {
      title: "Youth Peace ",
      date: "july 4, 2026",
      time: "8:00 PM - 5:00 PM",
      location: "Virtual (Zoom)",
    }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', event: '' });
  };

  return (
    <section id="events" className="py-20 bg-brand-900 text-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Events List */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Upcoming Events</h2>
            <p className="text-brand-200 mb-10 text-lg">
              Join us in our upcoming seminars, workshops, and community activities to actively engage with Gandhian philosophy.
            </p>
            
            <div className="space-y-6">
              {eventsList.map((evt, idx) => (
                <div key={idx} className="bg-brand-800 p-6 rounded-xl border border-brand-700 hover:border-brand-500 transition-colors">
                  <h3 className="text-xl font-bold font-serif text-white mb-4">{evt.title}</h3>
                  <div className="space-y-2 text-brand-200 text-sm">
                    <div className="flex items-center gap-2"><Calendar size={16} className="text-brand-400" /> {evt.date}</div>
                    <div className="flex items-center gap-2"><Clock size={16} className="text-brand-400" /> {evt.time}</div>
                    <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-400" /> {evt.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-brand-900">
            <h3 className="text-2xl font-serif font-bold mb-2">Event Registration</h3>
            <p className="text-brand-600 text-sm mb-8">Reserve your seat for our upcoming sessions.</p>

            {isSubmitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 text-center font-medium">
                Thank you! Your registration has been received successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-800 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-md bg-brand-50 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-800 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-md bg-brand-50 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-800 mb-1">Select Event</label>
                  < select 
                    required
                    value={formData.event}
                    onChange={e => setFormData({...formData, event: e.target.value})}
                    className="w-full px-4 py-3 rounded-md bg-brand-50 border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                  >
                    <option value="" disabled>Select an event...</option>
                    {eventsList.map((evt, idx) => (
                      <option key={idx} value={evt.title}>{evt.title}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="w-full bg-brand-700 text-white font-bold py-3 rounded-md hover:bg-brand-800 transition-colors shadow-md mt-4">
                  Register Now
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};