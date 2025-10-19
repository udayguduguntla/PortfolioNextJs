'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, ClockIcon, TruckIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const restaurants = [
  {
    id: 1,
    name: 'Bella Italia',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25-30 min',
    deliveryFee: 'Free',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    offer: '50% OFF up to ₹100',
    promoted: true,
    priceRange: '₹₹₹',
    distance: '2.1 km'
  },
  {
    id: 2,
    name: 'Spice Garden',
    cuisine: 'Indian',
    rating: 4.6,
    deliveryTime: '30-35 min',
    deliveryFee: '₹29',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    offer: '20% OFF',
    promoted: false,
    priceRange: '₹₹',
    distance: '1.8 km'
  },
  {
    id: 3,
    name: 'Dragon Palace',
    cuisine: 'Chinese',
    rating: 4.7,
    deliveryTime: '20-25 min',
    deliveryFee: 'Free',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    offer: '30% OFF up to ₹150',
    promoted: true,
    priceRange: '₹₹',
    distance: '3.2 km'
  },
  {
    id: 4,
    name: 'Burger Junction',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: '15-20 min',
    deliveryFee: '₹25',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    offer: 'Buy 1 Get 1 Free',
    promoted: false,
    priceRange: '₹₹',
    distance: '1.5 km'
  },
  {
    id: 5,
    name: 'Sushi Master',
    cuisine: 'Japanese',
    rating: 4.9,
    deliveryTime: '35-40 min',
    deliveryFee: 'Free',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    offer: '25% OFF',
    promoted: true,
    priceRange: '₹₹₹₹',
    distance: '4.1 km'
  },
  {
    id: 6,
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.4,
    deliveryTime: '25-30 min',
    deliveryFee: '₹35',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c4a6706?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    offer: '40% OFF up to ₹80',
    promoted: false,
    priceRange: '₹₹',
    distance: '2.8 km'
  }
]

const filters = [
  { id: 'rating', name: 'Rating 4.0+', active: false },
  { id: 'delivery', name: 'Free Delivery', active: false },
  { id: 'offers', name: 'Offers', active: false },
  { id: 'fast', name: 'Fast Delivery', active: false },
  { id: 'pure-veg', name: 'Pure Veg', active: false },
]

const sortOptions = [
  { id: 'relevance', name: 'Relevance' },
  { id: 'rating', name: 'Rating' },
  { id: 'delivery-time', name: 'Delivery Time' },
  { id: 'cost-low', name: 'Cost: Low to High' },
  { id: 'cost-high', name: 'Cost: High to Low' },
]

export default function RestaurantList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('relevance')
  const [showFilters, setShowFilters] = useState(false)

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Restaurants near you</h1>
          <p className="text-gray-600">Discover amazing food from local restaurants</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search restaurants, cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FunnelIcon className="w-5 h-5" />
              <span>Filters</span>
              {activeFilters.length > 0 && (
                <span className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFilters.length}
                </span>
              )}
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      activeFilters.includes(filter.id)
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">{restaurants.length} restaurants found</p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              href={`/restaurant/${restaurant.id}`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {restaurant.promoted && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Promoted
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  {restaurant.offer}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-lg text-sm font-semibold">
                  {restaurant.distance}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-lg">
                    <StarIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">{restaurant.cuisine}</p>
                  <p className="text-gray-600 font-medium">{restaurant.priceRange}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TruckIcon className="w-4 h-4" />
                    <span>{restaurant.deliveryFee}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
            Load More Restaurants
          </button>
        </div>
      </div>
    </div>
  )
}