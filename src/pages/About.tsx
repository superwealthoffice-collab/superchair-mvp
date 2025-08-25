import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const stats = [
    { number: '50K+', label: t('about.happy_customers') },
    { number: '15+', label: t('about.years_experience') },
    { number: '200+', label: t('about.chair_models') },
    { number: '99%', label: t('about.satisfaction_rate') }
  ];

  const values = [
    {
      icon: Target,
      title: t('about.our_mission'),
      description: t('about.our_mission_desc')
    },
    {
      icon: Users,
      title: t('about.our_team'),
      description: t('about.our_team_desc')
    },
    {
      icon: Award,
      title: t('about.our_quality'),
      description: t('about.our_quality_desc')
    }
  ];

  const features = [
    t('about.feature_1'),
    t('about.feature_2'),
    t('about.feature_3'),
    t('about.feature_4'),
    t('about.feature_5'),
    t('about.feature_6')
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Shield className={`h-12 w-12 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </div>
            <h1 className={`text-5xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('about.title')}
            </h1>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('about.subtitle')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.number}
                </div>
                <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('about.our_story_title')}
              </h2>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.our_story_p1')}
              </p>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.our_story_p2')}
              </p>
              <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.our_story_p3')}
              </p>
              <button className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                {t('about.view_our_products')}
              </button>
            </div>
            <div className={`rounded-3xl overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <img
                src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our workshop and team"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('about.what_drives_us')}
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('about.values_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className={`text-center p-8 rounded-3xl transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <value.icon className={`h-8 w-8 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`rounded-3xl overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <img
                src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Quality craftsmanship"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('about.why_choose_us')}
              </h2>
              <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.why_choose_us_desc')}
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className={`h-5 w-5 text-green-500 flex-shrink-0`} />
                    <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                {t('about.shop_now')} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('about.cta_title')}
          </h2>
          <p className={`text-lg mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('about.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
              {t('about.browse_chairs')}
            </button>
            <button className={`px-8 py-3 rounded-full text-sm font-medium border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-gray-500' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}>
              {t('about.contact_us')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;