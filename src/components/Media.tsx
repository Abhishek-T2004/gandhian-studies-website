import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';

export const Media = () => {
  const articles = [
    {
      title: "Relevance of Non-Violence in the Digital Age",
      category: "Philosophy",
      image: "https://static.wixstatic.com/media/e28a6b_c0ad534b191043a7ad8bd77561994967~mv2.png/v1/fill/w_568,h_406,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e28a6b_c0ad534b191043a7ad8bd77561994967~mv2.png",
      date: "Oct 2, 2024"
    },
    {
      title: "Sustainable Living: A Gandhian Perspective",
      category: "Environment",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjuEnN4TGRxNjrBZVy9nlnCx7X3HE_M7CdUYIxWZwkZyk94NkmRRUAf44&s=1024",
      date: "Sep 15, 2024"
    },
    {
      title: "The Charkha: Symbol of Self-Reliance",
      category: "History",
      image: "https://www.luvmyindia.com/cdn/shop/files/LMIEmblemproduct-09_89300847-92bb-45c3-8140-6e8e6f803662.jpg?v=1742969243&width=1946",
      date: "Aug 30, 2024"
    },
    {
    title: "Gandhian Economics in the Modern World",
      category: "Economics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjknT4WEXGA4kD7PSeFUW2cFxWSjmeTB8PFXEbOPBKg&s=10",
      date: "Jul 20, 2024"
    }
  ];

  const gallery = [
    "https://images.saatchiart.com/saatchi/695576/art/11434817/10497071-XBPDGJMV-7.jpg",
    "https://images.jansatta.com/2024/10/MixCollage-01-Oct-2024-03-34-PM-6145.jpg",
    "https://icraftasia.com/cdn/shop/files/1_70cc684d-e72b-4c5c-858a-6a22d5e89d65_800x.png?v=1737358142",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvnFgeWiT6cWc059Q5orskQ-c58RLPS5hsoEnrz4XJQ&s=1024",
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Articles Section */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-2">Latest Articles</h2>
              <p className="text-brand-600 font-medium">Insights and research on Gandhian thought</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-900 transition-colors">
              View All Articles <ArrowUpRight size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-800 uppercase">
                    {article.category}
                  </div>
                </div>
                <div className="text-sm text-brand-500 mb-2">{article.date}</div>
                <h3 className="text-xl font-bold font-serif text-brand-900 group-hover:text-brand-600 transition-colors">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-4">Historical Gallery</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className="relative aspect-square group overflow-hidden rounded-lg bg-brand-100">
                <img 
                  src={img} 
                  alt={`Gallery Image ${idx + 1}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};