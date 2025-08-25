import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatWidgetProps {
  isDarkMode: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "We offer a 30-day free return policy on all our chairs. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund."
    },
    {
      id: 2,
      question: "Do you offer free shipping?",
      answer: "Yes! We provide free shipping on all orders. Your chair will be delivered directly to your doorstep at no additional cost."
    },
    {
      id: 3,
      question: "What are the wholesale requirements?",
      answer: "For wholesale pricing, we require a minimum order quantity (MOQ) that varies by product, typically ranging from 5-25 units. Wholesale prices offer 25-35% savings off retail prices."
    },
    {
      id: 4,
      question: "How long is the warranty?",
      answer: "All our chairs come with a comprehensive 5-year warranty covering manufacturing defects and normal wear. We also provide lifetime customer support."
    },
    {
      id: 5,
      question: "Can I customize my chair?",
      answer: "Yes! We offer customization options including different colors, materials, and ergonomic adjustments. Contact our team to discuss your specific requirements."
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and for wholesale orders, we also offer net payment terms for qualified businesses."
    }
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setSelectedFAQ(null);
  };

  const handleFAQClick = (faqId: number) => {
    setSelectedFAQ(selectedFAQ === faqId ? null : faqId);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group ${
          isDarkMode 
            ? 'bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white' 
            : 'bg-white hover:bg-green-600 text-gray-600 hover:text-white'
        }`}
        aria-label="Open chat support"
      >
        <MessageCircle className="h-4 w-4" />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className={`fixed bottom-6 right-20 w-80 h-96 rounded-2xl shadow-2xl transition-all duration-300 z-50 flex flex-col ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Chat Header */}
          <div className={`flex items-center justify-between p-4 border-b rounded-t-2xl ${
            isDarkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Super Chair Support
                </h3>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Online now
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className={`p-1 rounded-full hover:bg-gray-200 transition-colors ${
                isDarkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-200 text-gray-500'
              }`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className={`mb-4 p-3 rounded-lg max-w-xs ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Hi! 👋 How can I help you today? Here are some frequently asked questions:
              </p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <button
                    onClick={() => handleFAQClick(faq.id)}
                    className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {faq.question}
                  </button>
                  
                  {selectedFAQ === faq.id && (
                    <div className={`mt-2 p-3 rounded-lg border-l-4 border-green-500 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-green-50'
                    }`}>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className={`flex-1 px-3 py-2 text-sm border rounded-full focus:outline-none focus:ring-1 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-gray-400'
                }`}
              />
              <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;