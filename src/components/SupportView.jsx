import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail, Search, ChevronRight } from 'lucide-react';
import SectionCard from './SectionCard';

const SupportView = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      id: 1,
      category: 'Orders',
      question: 'How do I track my order?',
      answer: 'You can track your order in real-time from the Order History section. You\'ll receive notifications at each stage of delivery.'
    },
    {
      id: 2,
      category: 'Orders',
      question: 'Can I cancel my order?',
      answer: 'Yes, you can cancel your order within 5 minutes of placing it. After that, please contact support for assistance.'
    },
    {
      id: 3,
      category: 'Payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, PayPal, Apple Pay, and Google Pay.'
    },
    {
      id: 4,
      category: 'Payment',
      question: 'Is my payment information secure?',
      answer: 'Yes, all payment information is encrypted and securely processed. We never store your full card details.'
    },
    {
      id: 5,
      category: 'Delivery',
      question: 'What are the delivery charges?',
      answer: 'Delivery charges vary based on distance and restaurant. You can see the exact fee before placing your order.'
    },
    {
      id: 6,
      category: 'Delivery',
      question: 'How long does delivery take?',
      answer: 'Typical delivery times range from 30-45 minutes, but this can vary based on restaurant preparation time and distance.'
    },
    {
      id: 7,
      category: 'Account',
      question: 'How do I update my profile?',
      answer: 'Click on your profile picture or the Edit Profile button to update your information, including name, email, and phone number.'
    },
    {
      id: 8,
      category: 'Account',
      question: 'How do I delete my account?',
      answer: 'To delete your account, please contact our support team. We\'ll guide you through the process.'
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      available: 'Available 24/7',
      action: () => alert('Starting live chat...')
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us at +1 (800) 123-4567',
      available: 'Mon-Fri: 9AM - 9PM',
      action: () => window.open('tel:+18001234567')
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'support@foodapp.com',
      available: 'Response within 24 hours',
      action: () => window.open('mailto:support@foodapp.com')
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={onBack} className="p-2 hover:bg-white rounded-full transition">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Help & Support</h2>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <div
              key={index}
              onClick={method.action}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-red-100 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-red-50 rounded-full mb-4 group-hover:bg-red-100 transition">
                  <Icon size={24} className="text-red-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                <p className="text-xs text-gray-500">{method.available}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <SectionCard title="Frequently Asked Questions">
        {/* Search Bar */}
        <div className="mb-6 px-2">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                </div>
                <ChevronRight 
                  size={20} 
                  className={`text-gray-400 transition-transform ${expandedFaq === faq.id ? 'rotate-90' : ''}`}
                />
              </button>
              {expandedFaq === faq.id && (
                <div className="px-4 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No FAQs found matching "{searchQuery}"</p>
          </div>
        )}
      </SectionCard>

      {/* Still Need Help */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
        <p className="mb-6 opacity-90">Our support team is here to assist you</p>
        <button 
          onClick={() => alert('Opening contact form...')}
          className="bg-white text-red-500 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Contact Support Team
        </button>
      </div>
    </div>
  );
};

export default SupportView;