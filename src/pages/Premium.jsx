import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Premium = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-12 text-white text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Upgrade to Premium</h1>
        <p className="text-lg opacity-90">Enjoy ad-free listening, offline downloads, and more</p>
      </motion.div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: 'Free',
            price: '0',
            features: ['Ad-supported', 'Standard quality', 'Mobile app'],
          },
          {
            name: 'Premium',
            price: '9.99',
            popular: true,
            features: ['Ad-free', 'High quality', 'Offline listening', 'Unlimited skips'],
          },
          {
            name: 'Premium Family',
            price: '14.99',
            features: ['6 accounts', 'Ad-free', 'High quality', 'Family mix'],
          },
        ].map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`card relative ${
              plan.popular ? 'border-2 border-primary ring-2 ring-primary/10' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <FiStar size={14} />
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">${plan.price}</span>
              <span className="text-muted">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-text">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
            >
              {plan.price === '0' ? 'Current Plan' : 'Upgrade Now'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Premium;