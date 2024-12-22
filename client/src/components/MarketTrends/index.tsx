import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function MarketTrends() {
  return (
    <section id="market-trends" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
            Market Trends
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest real estate market trends and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Property Values',
              trend: 'up',
              percentage: '8.5%',
              description: 'Increase in average property values over the last quarter'
            },
            {
              title: 'Market Activity',
              trend: 'up',
              percentage: '12.3%',
              description: 'Growth in number of property transactions'
            },
            {
              title: 'Time on Market',
              trend: 'down',
              percentage: '15.7%',
              description: 'Decrease in average days on market'
            }
          ].map(({ title, trend, percentage, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#1a365d]">{title}</h3>
                {trend === 'up' ? (
                  <ArrowUpRight className="w-6 h-6 text-green-500" />
                ) : (
                  <ArrowDownRight className="w-6 h-6 text-red-500" />
                )}
              </div>
              <div className="text-3xl font-bold mb-2 text-[#2c7a7b]">
                {percentage}
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-[#2c7a7b] text-white rounded-lg hover:bg-[#2c7a7b]/90 transition-colors duration-300">
            <TrendingUp className="w-5 h-5 mr-2" />
            View Detailed Report
          </button>
        </div>
      </div>
    </section>
  );
}