import React, { useState } from 'react';
import { CreditCard, Download, TrendingUp, Users, HardDrive, Video, CheckCircle, AlertCircle, X } from 'lucide-react';

export default function CreatorBilling() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const currentPlan = {
    name: 'Professional',
    price: 99,
    billing: 'monthly',
    features: [
      'Up to 1,000 students',
      '100GB storage',
      'Unlimited courses',
      'Advanced analytics',
      'Custom branding',
      'Priority support'
    ]
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      yearlyPrice: 290,
      features: [
        'Up to 100 students',
        '10GB storage',
        '5 courses',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 99,
      yearlyPrice: 990,
      features: [
        'Up to 1,000 students',
        '100GB storage',
        'Unlimited courses',
        'Advanced analytics',
        'Custom branding',
        'Priority support'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 299,
      yearlyPrice: 2990,
      features: [
        'Unlimited students',
        '1TB storage',
        'Unlimited courses',
        'White-label solution',
        'API access',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const usageStats = [
    { label: 'Active Students', current: 847, limit: 1000, icon: Users, color: 'blue' },
    { label: 'Storage Used', current: 67, limit: 100, icon: HardDrive, color: 'green', unit: 'GB' },
    { label: 'Video Hours', current: 234, limit: 500, icon: Video, color: 'purple', unit: 'hours' },
    { label: 'Courses Created', current: 12, limit: null, icon: TrendingUp, color: 'orange' }
  ];

  const invoices = [
    { id: 'INV-2024-001', date: '2024-01-01', amount: 99, status: 'paid', plan: 'Professional' },
    { id: 'INV-2023-012', date: '2023-12-01', amount: 99, status: 'paid', plan: 'Professional' },
    { id: 'INV-2023-011', date: '2023-11-01', amount: 99, status: 'paid', plan: 'Professional' },
    { id: 'INV-2023-010', date: '2023-10-01', amount: 99, status: 'paid', plan: 'Professional' },
    { id: 'INV-2023-009', date: '2023-09-01', amount: 99, status: 'paid', plan: 'Professional' }
  ];

  const getUsagePercentage = (current: number, limit: number | null) => {
    if (!limit) return 0;
    return Math.min((current / limit) * 100, 100);
  };

  const getUsageColor = (percentage: number) => {
    if (percentage >= 90) return 'red';
    if (percentage >= 75) return 'yellow';
    return 'green';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Subscription</h1>
          <p className="text-gray-600">Manage your subscription, usage, and billing information</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Plan */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{currentPlan.name}</h4>
                  <p className="text-gray-600">Billed {currentPlan.billing}</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-purple-600">
                      ${currentPlan.price}
                      <span className="text-lg text-gray-600">/month</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors mb-2">
                    Manage Plan
                  </button>
                  <p className="text-sm text-gray-600">Next billing: Feb 1, 2024</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Usage Statistics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {usageStats.map((stat, index) => {
                  const percentage = getUsagePercentage(stat.current, stat.limit);
                  const color = getUsageColor(percentage);
                  
                  return (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className={`w-8 h-8 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                            <stat.icon className={`text-${stat.color}-600`} size={16} />
                          </div>
                          <span className="font-medium text-gray-900">{stat.label}</span>
                        </div>
                        {percentage >= 75 && (
                          <AlertCircle size={16} className={`text-${color}-500`} />
                        )}
                      </div>
                      
                      <div className="mb-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            {stat.current}{stat.unit ? ` ${stat.unit}` : ''}
                            {stat.limit && ` of ${stat.limit}${stat.unit ? ` ${stat.unit}` : ''}`}
                          </span>
                          {stat.limit && (
                            <span className={`font-semibold text-${color}-600`}>
                              {percentage.toFixed(0)}%
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {stat.limit && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-${color}-500 h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Available Plans */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Available Plans</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative p-6 border-2 rounded-xl transition-all duration-200 ${
                      plan.popular
                        ? 'border-purple-500 bg-purple-50'
                        : selectedPlan === plan.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="text-3xl font-bold text-gray-900">
                        ${plan.price}
                        <span className="text-lg text-gray-600">/month</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        or ${plan.yearlyPrice}/year (save 17%)
                      </p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 font-semibold rounded-lg transition-colors ${
                        plan.id === 'pro'
                          ? 'bg-gray-100 text-gray-500 cursor-default'
                          : plan.popular
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      disabled={plan.id === 'pro'}
                    >
                      {plan.id === 'pro' ? 'Current Plan' : 'Upgrade'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Invoice History */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Invoice History</h3>
                <button className="flex items-center px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                  <Download size={16} className="mr-2" />
                  Download All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 font-semibold text-gray-900">Invoice</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Date</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Plan</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Amount</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-gray-50">
                        <td className="py-3 font-medium text-gray-900">{invoice.id}</td>
                        <td className="py-3 text-gray-600">
                          {new Date(invoice.date).toLocaleDateString()}
                        </td>
                        <td className="py-3 text-gray-600">{invoice.plan}</td>
                        <td className="py-3 font-semibold text-gray-900">${invoice.amount}</td>
                        <td className="py-3">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                            {invoice.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="text-purple-600 hover:text-purple-700 transition-colors">
                            <Download size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                <CreditCard size={24} className="text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">•••• •••• •••• 4242</div>
                  <div className="text-sm text-gray-600">Expires 12/25</div>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                Update Payment Method
              </button>
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Sarah Johnson</div>
                <div>123 Main Street</div>
                <div>San Francisco, CA 94105</div>
                <div>United States</div>
              </div>
              <button className="w-full mt-4 px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                Update Address
              </button>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Have questions about billing or need to make changes to your plan?
              </p>
              <button className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}