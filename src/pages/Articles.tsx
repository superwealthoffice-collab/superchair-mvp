import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';

interface ArticlesProps {
  isDarkMode: boolean;
}

const Articles: React.FC<ArticlesProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: t('articles.all_articles'), count: 12 },
    { id: 'ergonomics', name: t('articles.ergonomics'), count: 4 },
    { id: 'health', name: t('articles.health_wellness'), count: 3 },
    { id: 'productivity', name: t('articles.productivity'), count: 3 },
    { id: 'design', name: t('articles.design'), count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Ultimate Guide to Ergonomic Office Setup in 2025',
      excerpt: 'Learn how to create the perfect ergonomic workspace that reduces strain, improves posture, and boosts productivity.',
      category: 'ergonomics',
      author: 'Dr. Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 2,
      title: 'How the Right Chair Can Reduce Back Pain by 80%',
      excerpt: 'Discover the science behind ergonomic seating and how proper support can dramatically reduce workplace injuries.',
      category: 'health',
      author: 'Mark Thompson',
      date: '2025-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 3,
      title: 'Top 10 Productivity Hacks for Remote Workers',
      excerpt: 'Maximize your work-from-home efficiency with these proven strategies and workspace optimization tips.',
      category: 'productivity',
      author: 'Lisa Chen',
      date: '2025-01-10',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 4,
      title: 'The Psychology of Color in Office Design',
      excerpt: 'Explore how different colors in your workspace can affect mood, creativity, and overall work performance.',
      category: 'design',
      author: 'Alex Rivera',
      date: '2025-01-08',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 5,
      title: 'Standing vs. Sitting: Finding the Perfect Balance',
      excerpt: 'Learn about the benefits of alternating between sitting and standing throughout your workday.',
      category: 'health',
      author: 'Dr. Michael Brown',
      date: '2025-01-05',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 6,
      title: 'Ergonomic Accessories That Make a Difference',
      excerpt: 'Discover the essential ergonomic accessories that can complement your chair and improve your workspace.',
      category: 'ergonomics',
      author: 'Jennifer Davis',
      date: '2025-01-03',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 7,
      title: 'Creating a Productive Home Office on Any Budget',
      excerpt: 'Transform your home workspace without breaking the bank with these budget-friendly tips and tricks.',
      category: 'productivity',
      author: 'Tom Wilson',
      date: '2024-12-28',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 8,
      title: 'The Future of Office Furniture: Trends for 2025',
      excerpt: 'Explore the latest trends in office furniture design and what to expect in the coming year.',
      category: 'design',
      author: 'Emma Taylor',
      date: '2024-12-25',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className={`text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('articles.title')}
            </h1>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('articles.subtitle')}
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className={`absolute left-3 top-3 h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder={t('articles.search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-full focus:outline-none focus:ring-1 transition-colors ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-gray-600' : 'bg-white border-gray-200 text-black placeholder-gray-500 focus:ring-gray-300'}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`px-4 py-3 border rounded-full focus:outline-none focus:ring-1 transition-colors ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white focus:ring-gray-600' : 'bg-white border-gray-200 text-black focus:ring-gray-300'}`}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && !searchTerm && (
        <section className={`py-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('articles.featured_article')}
              </h2>
            </div>
            <div className={`rounded-3xl overflow-hidden shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                      {categories.find(cat => cat.id === featuredArticle.category)?.name}
                    </span>
                    <span className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {t('articles.featured')}
                    </span>
                  </div>
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {featuredArticle.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {featuredArticle.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {formatDate(featuredArticle.date)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {featuredArticle.readTime}
                      </span>
                    </div>
                  </div>
                  <button className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                    {t('articles.read_article')} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className={`py-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {selectedCategory === 'all' ? t('articles.latest_articles') : `${categories.find(cat => cat.id === selectedCategory)?.name} Articles`}
            </h2>
            <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('articles.articles_found', { count: filteredArticles.length })}
            </span>
          </div>

          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article key={article.id} className={`group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-lg`}>
                  <div className="aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <span className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold mb-3 line-clamp-2 group-hover:text-opacity-80 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {article.title}
                    </h3>
                    <p className={`text-sm mb-4 line-clamp-3 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className={`h-3 w-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {article.author}
                        </span>
                      </div>
                      <span className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {formatDate(article.date)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('articles.no_articles_found')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={`py-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('articles.stay_updated')}
          </h2>
          <p className={`text-lg mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('articles.stay_updated_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('home.email_placeholder')}
              className={`flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-1 transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-gray-500' : 'bg-white border-gray-200 text-black placeholder-gray-500 focus:ring-gray-300'}`}
            />
            <button className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
              {t('articles.subscribe')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;