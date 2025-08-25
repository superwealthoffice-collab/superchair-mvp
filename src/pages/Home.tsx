import React from 'react';
import { ArrowRight, Truck, CreditCard, RotateCcw } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleShopChairsClick = () => {
    navigate('/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-8">
              
              {/* Video Placeholder */}
              <div className="flex items-center justify-center">
                <div className={`relative rounded-2xl overflow-hidden shadow-xl w-full max-w-md h-64 ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-600' : 'bg-gradient-to-br from-gray-900 to-gray-700'}`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-medium ${isDarkMode ? 'bg-gray-900 bg-opacity-70 text-gray-200' : 'bg-black bg-opacity-50 text-white'}`}>
                    HD
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 mb-3 hover:bg-opacity-100 transition-all cursor-pointer group">
                        <div className="w-6 h-6 text-black flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <p className="text-white text-sm font-medium">{t('home.watch_demo')}</p>
                      <p className="text-white text-xs opacity-75">{t('home.see_in_action')}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-xs font-medium">
                    2:34
                  </div>
                </div>
              </div>
              
              <h1 className={`text-6xl font-bold leading-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Trans i18nKey="home.hero_title">
                  Premium Ergonomic<br />Office Chairs
                </Trans>
              </h1>
              <p className={`text-base leading-relaxed max-w-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('home.hero_subtitle')}
              </p>
              <div className="flex gap-6 pt-6">
                <button onClick={handleShopChairsClick} className={`px-10 py-4 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                  {t('home.shop_chairs')}
                </button>
                <button onClick={handleAboutClick} className={`border px-10 py-4 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-gray-500' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}>
                  {t('home.about_us')}
                </button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Ergonomic Office Chair"
                  className="w-96 h-96 object-contain"
                />
                
                <div className={`absolute top-4 right-8 rounded-2xl p-3 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <img
                    src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Chair Detail"
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                </div>
                <div className={`absolute -bottom-20 right-4 w-80 h-48 rounded-2xl shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  {/* Header with stats */}
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-sm"></div>
                          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white shadow-sm"></div>
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white shadow-sm"></div>
                          <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                            <span className="text-white text-xs font-bold">+</span>
                          </div>
                        </div>
                        <div className="ml-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                              </svg>
                            ))}
                          </div>
                          <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>4.9/5</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                          30K+
                        </div>
                        <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('home.happy_users')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable testimonials */}
                  <div className="h-32 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {[
                      {
                        name: "Sarah M.",
                        role: "Product Designer",
                        feedback: "This chair completely transformed my work experience. No more back pain!",
                        avatar: "from-pink-400 to-pink-600",
                        rating: 5
                      },
                      {
                        name: "Mike Chen",
                        role: "Software Engineer",
                        feedback: "Best investment for my home office. The ergonomic support is incredible.",
                        avatar: "from-blue-400 to-blue-600",
                        rating: 5
                      },
                      {
                        name: "Emily R.",
                        role: "Marketing Manager",
                        feedback: "Amazing quality and comfort. My productivity has increased significantly!",
                        avatar: "from-green-400 to-green-600",
                        rating: 5
                      },
                      {
                        name: "David L.",
                        role: "Graphic Designer",
                        feedback: "Perfect for long design sessions. The lumbar support is fantastic.",
                        avatar: "from-purple-400 to-purple-600",
                        rating: 5
                      },
                      {
                        name: "Jessica T.",
                        role: "Data Analyst",
                        feedback: "Worth every penny! My back pain disappeared after switching to this chair.",
                        avatar: "from-yellow-400 to-yellow-600",
                        rating: 5
                      },
                      {
                        name: "Alex K.",
                        role: "Project Manager",
                        feedback: "Excellent build quality and comfort. Highly recommend for office workers.",
                        avatar: "from-red-400 to-red-600",
                        rating: 5
                      },
                      {
                        name: "Lisa W.",
                        role: "UX Designer",
                        feedback: "The adjustability options are perfect. Finally found my ideal sitting position.",
                        avatar: "from-indigo-400 to-indigo-600",
                        rating: 5
                      },
                      {
                        name: "Tom B.",
                        role: "Developer",
                        feedback: "Great for gaming and work. The chair adapts to my needs perfectly.",
                        avatar: "from-teal-400 to-teal-600",
                        rating: 5
                      },
                      {
                        name: "Rachel S.",
                        role: "Content Writer",
                        feedback: "Stylish and comfortable. My writing sessions are much more enjoyable now.",
                        avatar: "from-orange-400 to-orange-600",
                        rating: 4
                      },
                      {
                        name: "James H.",
                        role: "CEO",
                        feedback: "Premium quality chair that matches my executive office perfectly.",
                        avatar: "from-gray-400 to-gray-600",
                        rating: 5
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className={`p-3 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'}`}>
                        <div className="flex items-start space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-br ${testimonial.avatar} rounded-full flex-shrink-0`}></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <div>
                                <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                  {testimonial.name}
                                </p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {testimonial.role}
                                </p>
                              </div>
                              <div className="flex items-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              "{testimonial.feedback}"
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Categories */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className={`rounded-3xl p-8 mb-6 aspect-square flex items-center justify-center transition-all duration-300 relative overflow-hidden ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'} group-hover:shadow-xl`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Executive Chairs"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.executive_chairs')}</h3>
              <p className={`mb-4 text-sm leading-relaxed transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.executive_chairs_desc')}</p>
              <button className={`flex items-center text-sm font-medium group-hover:translate-x-2 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {t('home.explore_category')} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className={`rounded-3xl p-8 mb-6 aspect-square flex items-center justify-center transition-all duration-300 relative overflow-hidden ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'} group-hover:shadow-xl`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Ergonomic Chairs"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.ergonomic_chairs')}</h3>
              <p className={`mb-4 text-sm leading-relaxed transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.ergonomic_chairs_desc')}</p>
              <button className={`flex items-center text-sm font-medium group-hover:translate-x-2 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {t('home.explore_category')} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className={`rounded-3xl p-8 mb-6 aspect-square flex items-center justify-center transition-all duration-300 relative overflow-hidden ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'} group-hover:shadow-xl`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Gaming Chairs"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.gaming_chairs')}</h3>
              <p className={`mb-4 text-sm leading-relaxed transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.gaming_chairs_desc')}</p>
              <button className={`flex items-center text-sm font-medium group-hover:translate-x-2 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {t('home.explore_category')} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Featured Spatial Experience Section */}
          <div className={`rounded-3xl overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px]">
              <div className="p-12 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Ergonomic Chair"
                  className="w-64 h-64 object-cover rounded-2xl"
                />
              </div>
              <div className="p-12">
                <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t('home.ultimate_comfort_title')}
                </h2>
                <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('home.ultimate_comfort_desc')}
                </p>
                <button onClick={handleShopChairsClick} className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                  {t('home.shop_chairs')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Best Sellers */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.best_sellers')}</h2>
            <button className={`flex items-center text-sm font-medium hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {t('home.view_products')} <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group cursor-pointer">
              <div className={`rounded-3xl p-8 mb-4 aspect-square flex items-center justify-center transition-all duration-300 relative transform group-hover:scale-105 group-hover:shadow-xl ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Executive Office Chair"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>Executive</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$ 899.99 USD</p>
              <h3 className={`text-lg font-medium mb-2 transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.executive_office_chair')}</h3>
              <p className={`text-sm leading-relaxed transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.executive_office_chair_desc')}</p>
            </div>

            <div className="group cursor-pointer">
              <div className={`rounded-3xl p-8 mb-4 aspect-square flex items-center justify-center transition-all duration-300 relative transform group-hover:scale-105 group-hover:shadow-xl ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Ergonomic Task Chair"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>Ergonomic</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$ 649.99 USD</p>
              <h3 className={`text-lg font-medium mb-2 transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.ergonomic_task_chair')}</h3>
              <p className={`text-sm leading-relaxed transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.ergonomic_task_chair_desc')}</p>
            </div>

            <div className="group cursor-pointer">
              <div className={`rounded-3xl p-8 mb-4 aspect-square flex items-center justify-center transition-all duration-300 relative transform group-hover:scale-105 group-hover:shadow-xl ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Gaming Chair Pro"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>Gaming</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$ 549.99 USD</p>
              <h3 className={`text-lg font-medium mb-2 transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.gaming_chair_pro')}</h3>
              <p className={`text-sm leading-relaxed transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.gaming_chair_pro_desc')}</p>
            </div>
          </div>

          {/* Superior Craftsmanship Section */}
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.craftsmanship_title')}</h2>
            <p className={`leading-relaxed max-w-2xl mx-auto mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('home.craftsmanship_desc')}
            </p>
            <button onClick={handleAboutClick} className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
              {t('home.read_our_story')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`rounded-3xl p-8 aspect-video flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img
                src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Office Setup"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className={`rounded-3xl p-8 aspect-video flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img
                src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chair Detail"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Products */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.featured_products')}</h2>
            <button className={`flex items-center text-sm font-medium hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {t('home.view_chairs')} <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <div className="group cursor-pointer">
              <div className={`rounded-3xl p-6 mb-4 aspect-square flex items-center justify-center transition-all duration-300 relative transform group-hover:scale-105 group-hover:shadow-lg ${isDarkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Executive Chair"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>Executive</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <p className={`text-xs mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$ 899.99 USD</p>
              <h3 className={`text-sm font-medium transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.executive_chair')}</h3>
            </div>

            <div className="group cursor-pointer">
              <div className={`rounded-3xl p-6 mb-4 aspect-square flex items-center justify-center transition-all duration-300 relative transform group-hover:scale-105 group-hover:shadow-lg ${isDarkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Task Chair"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>Ergonomic</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <p className={`text-xs mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$ 649.99 USD</p>
              <h3 className={`text-sm font-medium transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.task_chair')}</h3>
            </div>

            <div className="group cursor-pointer lg:col-start-3 lg:row-start-1 lg:row-span-2">
              <div className={`rounded-3xl p-8 mb-4 aspect-square lg:aspect-[4/5] flex items-center justify-center transition-all duration-300 relative transform group-hover:scale-105 group-hover:shadow-xl ${isDarkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Premium Gaming Chair"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>Gaming</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <p className={`text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$ 1,249.99 USD</p>
              <h3 className={`text-base font-medium transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.premium_gaming_chair')}</h3>
            </div>

            <div className="group cursor-pointer">
              <div className={`rounded-3xl p-6 mb-4 aspect-square flex items-center justify-center transition-all duration-300 relative transform group-hover:scale-105 group-hover:shadow-lg ${isDarkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Mesh Chair"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>Mesh</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <p className={`text-xs mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$ 449.99 USD</p>
              <h3 className={`text-sm font-medium transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.mesh_chair')}</h3>
            </div>

            <div className="group cursor-pointer">
              <div className={`rounded-3xl p-6 mb-4 aspect-square flex items-center justify-center transition-all duration-300 relative transform group-hover:scale-105 group-hover:shadow-lg ${isDarkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Conference Chair"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>Conference</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
              </div>
              <p className={`text-xs mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$ 349.99 USD</p>
              <h3 className={`text-sm font-medium transition-all duration-300 group-hover:text-opacity-80 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.conference_chair')}</h3>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className={`rounded-2xl p-6 shadow-sm mb-4 w-16 h-16 mx-auto flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <Truck className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              </div>
              <h3 className={`font-medium mb-1 text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.free_shipping')}</h3>
              <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.free_shipping_desc')}</p>
            </div>
            <div className="text-center">
              <div className={`rounded-2xl p-6 shadow-sm mb-4 w-16 h-16 mx-auto flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <CreditCard className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              </div>
              <h3 className={`font-medium mb-1 text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.secure_payments')}</h3>
              <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.secure_payments_desc')}</p>
            </div>
            <div className="text-center">
              <div className={`rounded-2xl p-6 shadow-sm mb-4 w-16 h-16 mx-auto flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <RotateCcw className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              </div>
              <h3 className={`font-medium mb-1 text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.free_return')}</h3>
              <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('home.free_return_desc')}</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={`rounded-3xl p-12 text-center shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.join_community')}</h2>
            <p className={`mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('home.join_community_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder={t('home.email_placeholder')}
                className={`flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-1 text-sm transition-colors ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500' : 'bg-white border-gray-200 text-black placeholder-gray-500 focus:ring-gray-300 focus:border-gray-300'}`}
              />
              <button className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                {t('home.subscribe')}
              </button>
            </div>
            <div className={`flex items-center justify-between pt-8 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-100'}`}>
              <span className={`text-3xl font-light transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-300'}`}>{t('home.ten_percent_off')}</span>
              <span className={`text-3xl font-light transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-300'}`}>{t('home.offers')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Latest Articles */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('home.latest_articles')}</h2>
            <button className={`flex items-center text-sm font-medium hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {t('home.view_all_articles')} <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group cursor-pointer">
              <div className={`rounded-3xl overflow-hidden mb-4 transition-colors aspect-video ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Ergonomic Office Setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`text-xs mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>April 18, 2025</p>
              <h3 className={`text-lg font-medium transition-colors ${isDarkMode ? 'text-white group-hover:text-gray-200' : 'text-gray-900 group-hover:text-black'}`}>
                {t('home.article_1_title')}
              </h3>
            </article>

            <article className="group cursor-pointer">
              <div className={`rounded-3xl overflow-hidden mb-4 transition-colors aspect-video ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Chair Sale"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`text-xs mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>March 25, 2025</p>
              <h3 className={`text-lg font-medium transition-colors ${isDarkMode ? 'text-white group-hover:text-gray-200' : 'text-gray-900 group-hover:text-black'}`}>
                {t('home.article_2_title')}
              </h3>
            </article>

            <article className="group cursor-pointer">
              <div className={`rounded-3xl overflow-hidden mb-4 transition-colors aspect-video ${isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Perfect Chair"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`text-xs mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>March 12, 2025</p>
              <h3 className={`text-lg font-medium transition-colors ${isDarkMode ? 'text-white group-hover:text-gray-200' : 'text-gray-900 group-hover:text-black'}`}>
                {t('home.article_3_title')}
              </h3>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;