import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-brand-50 border-t border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-6">Get In Touch</h2>
            <p className="text-brand-700 mb-10 text-lg">
              Have questions about our resources or want to collaborate? We'd love to hear from you.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Our Location</h4>
                  <p className="text-brand-600">123 Peace Avenue, Wisdom City<br />Global State, 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Email Us</h4>
                  <p className="text-brand-600">info@gandhianstudies.org<br />support@gandhianstudies.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Call Us</h4>
                  <p className="text-brand-600">+1 234 567 8900<br />Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-brand-900 text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4">Subscribe to our Newsletter</h3>
              <p className="text-brand-200 mb-8">
                Stay updated with the latest articles, upcoming events, and new learning resources delivered directly to your inbox.
              </p>
              
              {subscribed ? (
                <div className="bg-green-500/20 text-green-100 p-4 rounded-md border border-green-500/30 font-medium">
                  Thanks for subscribing! Check your email to confirm.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-md bg-brand-800/50 border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:border-brand-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-md bg-brand-800/50 border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:border-brand-500"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <button type="submit" className="w-full bg-white text-brand-900 font-bold py-3 rounded-md hover:bg-brand-50 transition-colors flex items-center justify-center gap-2">
                    Subscribe <Send size={18} />
                  </button>
                  <p className="text-xs text-brand-400 text-center mt-4">We respect your privacy. No spam, ever.</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};