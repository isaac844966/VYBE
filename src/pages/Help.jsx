import React from 'react';
import { motion } from 'framer-motion';
import { FiHelpCircle, FiMail, FiMessageSquare } from 'react-icons/fi';

const Help = () => {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking "Forgot password" on the login page.',
    },
    {
      question: 'Can I download songs for offline listening?',
      answer: 'Yes, with a Premium subscription, you can download songs to listen offline.',
    },
    {
      question: 'How do I create a playlist?',
      answer: 'Go to the Playlists section and click "Create Playlist" to make a new one.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, debit cards, and digital payment methods.',
    },
  ];

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Help & Support</h1>
        <p className="text-muted">Find answers to common questions</p>
      </div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          { icon: FiMail, label: 'Email Support', value: 'support@vybe.com' },
          { icon: FiMessageSquare, label: 'Live Chat', value: 'Available 24/7' },
          { icon: FiHelpCircle, label: 'Documentation', value: 'View Docs' },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center cursor-pointer hover:shadow-soft-md transition-smooth"
            >
              <Icon className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-text mb-1">{item.label}</h3>
              <p className="text-sm text-muted">{item.value}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card"
            >
              <h3 className="font-semibold text-text mb-2">{faq.question}</h3>
              <p className="text-muted">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;