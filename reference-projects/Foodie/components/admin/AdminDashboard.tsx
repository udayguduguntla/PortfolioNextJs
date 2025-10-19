'use client'

import {
  ShoppingBagIcon,
  CurrencyDollarIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Total Orders',
    value: '1,234',
    change: '+12%',
    changeType: 'increase',
    icon: ShoppingBagIcon,
    color: 'bg-blue-500'
  },
  {
    name: 'Revenue',
    value: '₹45,678',
    change: '+8%',
    changeType: 'increase',
    icon: CurrencyDollarIcon,
    color: 'bg-green-500'
  },
  {
    name: 'Active Users',
    value: '2,456',
    change: '+15%',
    changeType: 'increase',
    icon: UsersIcon,
    color: 'bg-purple-500'
  },
  {
    name: 'Restaurants',
    value: '89',
    change: '-2%',
    changeType: 'decrease',
    icon: BuildingStorefrontIcon,
    color: 'bg-orange-500'
  }
]

const recentOrders = [
  { id: '#1234', customer: 'John Doe', restaurant: 'Bella Italia', amount: '₹299', status: 'Delivered', time: '2 min ago' },
  { id: '#1235', customer: 'Jane Smith', restaurant: 'Spice Garden', amount: '₹450', status: 'Preparing', time: '5 min ago' },
  { id: '#1236', customer: 'Mike Johnson', restaurant: 'Dragon Palace', amount: '₹320', status: 'On the way', time: '8 min ago' },
  { id: '#1237', customer: 'Sarah Wilson', restaurant: 'Burger Junction', amount: '₹180', status: 'Delivered', time: '12 min ago' },
  { id: '#1238', customer: 'Tom Brown', restaurant: 'Sushi Master', amount: '₹680', status: 'Preparing', time: '15 min ago' }
]

const topRestaurants = [
  { name: 'Bella Italia', orders: 156, revenue: '₹12,450', rating: 4.8 },
  { name: 'Spice Garden', orders: 142, revenue: '₹11,200', rating: 4.6 },
  { name: 'Dragon Palace', orders: 128, revenue: '₹9,800', rating: 4.7 },
  { name: 'Sushi Master', orders: 98, revenue: '₹15,600', rating: 4.9 },
  { name: 'Burger Junction', orders: 87, revenue: '₹7,200', rating: 4.5 }
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8 mt-16">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === 'increase' ? (
                    <ArrowUpIcon className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ml-1 ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">{order.id}</span>
                      <span className="text-sm text-gray-500">{order.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{order.customer} • {order.restaurant}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold text-gray-900">{order.amount}</p>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Restaurants */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Restaurants</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topRestaurants.map((restaurant, index) => (
                <div key={restaurant.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{restaurant.name}</p>
                      <p className="text-sm text-gray-600">{restaurant.orders} orders • ⭐ {restaurant.rating}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{restaurant.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-primary-50 hover:bg-primary-100 rounded-lg text-center transition-colors">
            <ShoppingBagIcon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <p className="font-medium text-primary-700">Add Menu Item</p>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors">
            <BuildingStorefrontIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="font-medium text-green-700">Add Restaurant</p>
          </button>
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors">
            <UsersIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="font-medium text-blue-700">View Customers</p>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors">
            <CurrencyDollarIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="font-medium text-purple-700">Revenue Report</p>
          </button>
        </div>
      </div>
    </div>
  )
}