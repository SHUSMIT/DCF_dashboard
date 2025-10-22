import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Activity, Target } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Revenue & Profit Historical Data
  const revenueData = [
    { year: 'FY20', revenue: 1996, netProfit: 0, ebitda: 54 },
    { year: 'FY21', revenue: 1953, netProfit: -98, ebitda: -61 },
    { year: 'FY22', revenue: 2854, netProfit: 207, ebitda: 233 },
    { year: 'FY23', revenue: 6751, netProfit: -1514, ebitda: -1178 },
    { year: 'FY24', revenue: 11398, netProfit: 150, ebitda: 450 },
    { year: 'FY25', revenue: 14445, netProfit: 3234, ebitda: 4027 }
  ];

  // Quarterly Performance
  const quarterlyData = [
    { quarter: 'Q3-24', revenue: 5245, profit: 535, margin: 10.2 },
    { quarter: 'Q4-24', revenue: 7658, profit: 1516, margin: 19.8 },
    { quarter: 'Q1-25', revenue: 6032, profit: 864, margin: 14.3 },
    { quarter: 'Q2-25', revenue: 7748, profit: 1163, margin: 15.0 }
  ];

  // Segment Revenue
  const segmentData = [
    { name: 'EPC Contracts', value: 13636, percentage: 99.0 },
    { name: 'Power Sale', value: 144, percentage: 1.0 }
  ];

  // Financial Projections
  const projectionData = [
    { year: '2025A', revenue: 14445, fcf: 3439, ebitda: 4027 },
    { year: '2026E', revenue: 16200, fcf: 3628, ebitda: 4500 },
    { year: '2027E', revenue: 18100, fcf: 3828, ebitda: 5000 },
    { year: '2028E', revenue: 20200, fcf: 4039, ebitda: 5500 },
    { year: '2029E', revenue: 22500, fcf: 4261, ebitda: 6000 },
    { year: '2030E', revenue: 25000, fcf: 4495, ebitda: 6500 }
  ];

  // Margin Analysis
  const marginData = [
    { year: 'FY20', grossMargin: 6.3, ebitdaMargin: 2.7, netMargin: 0.0 },
    { year: 'FY21', grossMargin: -0.1, ebitdaMargin: -3.1, netMargin: -5.0 },
    { year: 'FY22', grossMargin: 11.0, ebitdaMargin: 8.2, netMargin: 7.3 },
    { year: 'FY23', grossMargin: -14.8, ebitdaMargin: -17.5, netMargin: -22.4 },
    { year: 'FY24', grossMargin: 9.5, ebitdaMargin: 3.9, netMargin: 1.3 },
    { year: 'FY25', grossMargin: 34.0, ebitdaMargin: 27.9, netMargin: 22.4 }
  ];

  // Balance Sheet Metrics
  const balanceSheetData = [
    { year: 'FY20', assets: 2148, equity: 152, debt: 100 },
    { year: 'FY21', assets: 2240, equity: 285, debt: 115 },
    { year: 'FY22', assets: 3480, equity: 625, debt: 364 },
    { year: 'FY23', assets: 6856, equity: 1105, debt: 1215 },
    { year: 'FY24', assets: 10036, equity: 1450, debt: 1770 },
    { year: 'FY25', assets: 14515, equity: 4051, debt: 2578 }
  ];

  // Valuation Metrics
  const valuationData = [
    { metric: 'P/E Ratio', current: 47.8, industry: 35.0 },
    { metric: 'P/B Ratio', current: 24.4, industry: 8.5 },
    { metric: 'EV/EBITDA', current: 24.9, industry: 18.0 },
    { metric: 'ROE %', current: 65.2, industry: 22.0 }
  ];

  const COLORS = ['#f97316', '#dc2626', '#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b'];

  const MetricCard = ({ title, value, change, icon: Icon, trend }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              {trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
            </div>
          )}
      </div>
      <div className="bg-orange-100 p-3 rounded-full">
        <Icon className="w-6 h-6 text-orange-600" />
      </div>
    </div>
    </div >
  );

return (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white p-6 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Waaree Renewable Technologies Ltd</h1>
            <p className="text-orange-100 mt-1">One with the Sun - Financial Dashboard FY25</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">₹3,408</div>
            <div className="text-sm text-orange-100">Current Price</div>
            <div className="text-lg mt-1">Market Cap: ₹98,917 Cr</div>
          </div>
        </div>
      </div>
    </div>

    {/* Tabs */}
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-8">
          {['overview', 'projections', 'segments', 'valuation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 font-medium capitalize transition-colors ${activeTab === tab
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto p-6">
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              title="Net Sales (H1 FY25)"
              value="₹13,780 Cr"
              change="+81.0%"
              icon={DollarSign}
              trend="up"
            />
            <MetricCard
              title="Net Profit (H1 FY25)"
              value="₹2,035 Cr"
              change="+148.3%"
              icon={TrendingUp}
              trend="up"
            />
            <MetricCard
              title="EBITDA Margin"
              value="27.88%"
              change="+24.0%"
              icon={Activity}
              trend="up"
            />
            <MetricCard
              title="EPS (FY25)"
              value="₹111.41"
              change="P/E: 47.8x"
              icon={Target}
              trend="up"
            />
          </div>

          {/* Revenue & Profit Trend */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Revenue & Profitability Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="#f97316" fill="#fed7aa" name="Revenue (₹Cr)" />
                <Area yAxisId="right" type="monotone" dataKey="netProfit" stroke="#dc2626" fill="#fecaca" name="Net Profit (₹Cr)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Quarterly Performance & Margins */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Quarterly Performance</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={quarterlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#f97316" name="Revenue (₹Cr)" />
                  <Bar dataKey="profit" fill="#dc2626" name="Profit (₹Cr)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Margin Evolution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={marginData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="grossMargin" stroke="#10b981" strokeWidth={2} name="Gross Margin %" />
                  <Line type="monotone" dataKey="ebitdaMargin" stroke="#f97316" strokeWidth={2} name="EBITDA Margin %" />
                  <Line type="monotone" dataKey="netMargin" stroke="#0ea5e9" strokeWidth={2} name="Net Margin %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Balance Sheet Growth */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Balance Sheet Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={balanceSheetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="assets" fill="#0ea5e9" name="Total Assets (₹Cr)" />
                <Bar dataKey="equity" fill="#10b981" name="Equity (₹Cr)" />
                <Bar dataKey="debt" fill="#dc2626" name="Debt (₹Cr)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Projections Tab */}
      {activeTab === 'projections' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">5-Year Financial Projections</h3>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#f97316" fill="#fed7aa" name="Revenue (₹Cr)" />
                <Area type="monotone" dataKey="ebitda" stackId="2" stroke="#10b981" fill="#d1fae5" name="EBITDA (₹Cr)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Free Cash Flow Projection</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="fcf" stroke="#f97316" strokeWidth={3} name="FCF (₹Cr)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">DCF Valuation Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Enterprise Value</span>
                  <span className="text-lg font-bold text-orange-600">₹1,00,264 Cr</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Equity Value</span>
                  <span className="text-lg font-bold text-green-600">₹91,317 Cr</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Fair Value per Share</span>
                  <span className="text-lg font-bold text-blue-600">₹3,146</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-orange-50 rounded border-2 border-orange-300">
                  <span className="font-medium">Current Price</span>
                  <span className="text-lg font-bold">₹3,408</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Terminal Value</span>
                  <span className="text-lg font-bold">₹33,907 Cr</span>
                </div>
                <div className="text-center mt-3 p-2 bg-orange-100 rounded">
                  <p className="text-xs text-gray-600">Valuation Multiple</p>
                  <p className="text-xl font-bold text-orange-600">1.08x</p>
                  <p className="text-xs text-gray-500 mt-1">Trading above fair value</p>
                </div>
              </div>
            </div>
          </div>

          {/* WACC Sensitivity Analysis */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Sensitivity Analysis - Equity Value (₹Cr)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left font-semibold">Growth / WACC</th>
                    <th className="p-2 text-center font-semibold">14%</th>
                    <th className="p-2 text-center font-semibold">15%</th>
                    <th className="p-2 text-center font-semibold bg-orange-200">16.20%</th>
                    <th className="p-2 text-center font-semibold">17%</th>
                    <th className="p-2 text-center font-semibold">18%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">4.00%</td>
                    <td className="p-2 text-center">₹3,593</td>
                    <td className="p-2 text-center">₹3,153</td>
                    <td className="p-2 text-center bg-orange-50">₹2,726</td>
                    <td className="p-2 text-center">₹2,487</td>
                    <td className="p-2 text-center">₹2,229</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">5.00%</td>
                    <td className="p-2 text-center">₹4,022</td>
                    <td className="p-2 text-center">₹3,497</td>
                    <td className="p-2 text-center bg-orange-50">₹2,994</td>
                    <td className="p-2 text-center">₹2,718</td>
                    <td className="p-2 text-center">₹2,424</td>
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="p-2 font-medium">5.50%</td>
                    <td className="p-2 text-center">₹4,274</td>
                    <td className="p-2 text-center">₹3,694</td>
                    <td className="p-2 text-center bg-blue-200 font-bold">₹3,147</td>
                    <td className="p-2 text-center">₹2,848</td>
                    <td className="p-2 text-center">₹2,532</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">7.00%</td>
                    <td className="p-2 text-center">₹5,239</td>
                    <td className="p-2 text-center">₹4,431</td>
                    <td className="p-2 text-center bg-orange-50">₹3,700</td>
                    <td className="p-2 text-center">₹3,314</td>
                    <td className="p-2 text-center">₹2,913</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">8.00%</td>
                    <td className="p-2 text-center">₹6,145</td>
                    <td className="p-2 text-center">₹5,094</td>
                    <td className="p-2 text-center bg-orange-50">₹4,178</td>
                    <td className="p-2 text-center">₹3,707</td>
                    <td className="p-2 text-center">₹3,227</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Blue cell represents base case (5.5% growth, 16.20% WACC) = ₹3,146 per share
            </p>
          </div>

          {/* WACC Components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">WACC Calculation</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Cost of Debt (After-tax)</span>
                  <span className="font-bold">6.28%</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Cost of Equity</span>
                  <span className="font-bold">17.29%</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>% Debt</span>
                  <span className="font-bold">9.91%</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>% Equity</span>
                  <span className="font-bold">90.09%</span>
                </div>
                <div className="flex justify-between p-3 bg-orange-100 rounded border-2 border-orange-300 mt-3">
                  <span className="font-bold">WACC</span>
                  <span className="font-bold text-lg text-orange-600">16.20%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">FCF Components (H1 FY25)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-green-50 rounded">
                  <span>EBIT</span>
                  <span className="font-bold text-green-600">₹3,870 Cr</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Less: Taxes</span>
                  <span className="font-bold text-red-600">₹637 Cr</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Plus: Depreciation</span>
                  <span className="font-bold text-green-600">₹402 Cr</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Less: Capex</span>
                  <span className="font-bold text-red-600">₹2,400 Cr</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Less: Change in NWC</span>
                  <span className="font-bold text-green-600">₹2,597 Cr</span>
                </div>
                <div className="flex justify-between p-3 bg-orange-100 rounded border-2 border-orange-300 mt-3">
                  <span className="font-bold">Unlevered FCF</span>
                  <span className="font-bold text-lg text-orange-600">₹3,439 Cr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Assumptions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Key Valuation Assumptions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="p-3 bg-blue-50 rounded">
                <p className="text-gray-600 text-xs">Risk-Free Rate</p>
                <p className="text-xl font-bold text-blue-600">6.35%</p>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <p className="text-gray-600 text-xs">Market Risk Premium</p>
                <p className="text-xl font-bold text-purple-600">8.00%</p>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <p className="text-gray-600 text-xs">Levered Beta</p>
                <p className="text-xl font-bold text-green-600">1.12</p>
              </div>
              <div className="p-3 bg-orange-50 rounded">
                <p className="text-gray-600 text-xs">Perpetual Growth</p>
                <p className="text-xl font-bold text-orange-600">5.50%</p>
              </div>
              <div className="p-3 bg-red-50 rounded">
                <p className="text-gray-600 text-xs">Tax Rate</p>
                <p className="text-xl font-bold text-red-600">24.82%</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded">
                <p className="text-gray-600 text-xs">Credit Spread</p>
                <p className="text-xl font-bold text-indigo-600">2.00%</p>
              </div>
              <div className="p-3 bg-pink-50 rounded">
                <p className="text-gray-600 text-xs">Size Premium</p>
                <p className="text-xl font-bold text-pink-600">2.00%</p>
              </div>
              <div className="p-3 bg-teal-50 rounded">
                <p className="text-gray-600 text-xs">Discount Factor</p>
                <p className="text-xl font-bold text-teal-600">0.93</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Segments Tab */}
      {activeTab === 'segments' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Revenue by Segment (H1 FY25)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={segmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                    >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell - ${index}} fill={COLORS[index % COLORS.length]`} />
                      ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Segment Performance (H1 FY25)</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4 py-3">
                <h4 className="font-semibold text-lg">EPC Contracts</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-xl font-bold text-orange-600">₹13,636 Cr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">EBIT</p>
                    <p className="text-xl font-bold text-green-600">₹2,609 Cr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Margin</p>
                    <p className="text-lg font-bold">19.1%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Growth YoY</p>
                    <p className="text-lg font-bold text-green-600">+82.1%</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-3">
                <h4 className="font-semibold text-lg">Power Sale</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-xl font-bold text-orange-600">₹144 Cr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">EBIT</p>
                    <p className="text-xl font-bold text-green-600">₹102 Cr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Margin</p>
                    <p className="text-lg font-bold">70.8%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Growth YoY</p>
                    <p className="text-lg font-bold text-green-600">+13.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* Asset & Liability Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Segment Assets (Sep 2025)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[
              { segment: 'EPC', assets: 88739, percentage: 69.2 },
              { segment: 'Power', assets: 39496, percentage: 30.8 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="segment" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="assets" fill="#0ea5e9" name="Assets (₹Cr)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Segment Liabilities (Sep 2025)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[
              { segment: 'EPC', liabilities: 64584, percentage: 87.6 },
              { segment: 'Power', liabilities: 9175, percentage: 12.4 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="segment" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="liabilities" fill="#dc2626" name="Liabilities (₹Cr)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
        )}

    {/* Valuation Tab */}
    {activeTab === 'valuation' && (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Valuation Metrics vs Industry</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={valuationData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="metric" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" fill="#f97316" name="Waaree RTL" />
              <Bar dataKey="industry" fill="#94a3b8" name="Industry Avg" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Peer Comparison</h3>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                <p className="text-sm font-medium text-gray-600">Waaree Energies</p>
                <p className="text-lg font-bold">P/E: 47.8x</p>
                <p className="text-sm text-gray-500">MCap: ₹98,917 Cr</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm font-medium text-gray-600">Premier Energies</p>
                <p className="text-lg font-bold">P/E: 44.9x</p>
                <p className="text-sm text-gray-500">MCap: ₹47,034 Cr</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm font-medium text-gray-600">Apar Industries</p>
                <p className="text-lg font-bold">P/E: 38.3x</p>
                <p className="text-sm text-gray-500">MCap: ₹33,788 Cr</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm font-medium text-gray-600">Vikram Solar</p>
                <p className="text-lg font-bold">P/E: 85.7x</p>
                <p className="text-sm text-gray-500">MCap: ₹11,982 Cr</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Key Ratios (FY25)</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">ROE</span>
                <span className="font-bold text-green-600">65.2%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">ROCE</span>
                <span className="font-bold text-green-600">58.7%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">Debt/Equity</span>
                <span className="font-bold">0.11</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">Current Ratio</span>
                <span className="font-bold">1.45</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">Asset Turnover</span>
                <span className="font-bold">1.08x</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">Dividend Yield</span>
                <span className="font-bold">0.10%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Investment Highlights</h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="font-medium text-green-800">Strong Revenue Growth</p>
                <p className="text-gray-600 mt-1">+81% YoY in H1 FY25</p>
              </div>
              <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="font-medium text-green-800">Margin Expansion</p>
                <p className="text-gray-600 mt-1">EBITDA margin at 27.9%</p>
              </div>
              <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="font-medium text-green-800">Low Leverage</p>
                <p className="text-gray-600 mt-1">D/E ratio of 0.11</p>
              </div>
              <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="font-medium text-green-800">Robust FCF</p>
                <p className="text-gray-600 mt-1">₹3,439 Cr in H1 FY25</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                <p className="font-medium text-yellow-800">Premium Valuation</p>
                <p className="text-gray-600 mt-1">Trading at 1.08x fair value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>

      {/* Footer */ }
<div className="bg-gray-800 text-white py-6 mt-8">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-sm">Data as of September 30, 2025 | Waaree Renewable Technologies Limited</p>
    <p className="text-xs text-gray-400 mt-2">CIN: L93000MH1999PLC120470</p>
  </div>
</div>
    </div >
  );
};

export default Dashboard;