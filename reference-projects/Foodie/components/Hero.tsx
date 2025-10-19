'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [location, setLocation] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-orange-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Hungry?
                <br />
                <span className="text-yellow-300">Order Now!</span>
              </h1>
              <p className="text-xl lg:text-2xl text-orange-100">
                Discover the best food & drinks from restaurants near you
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Location Input */}
                <div className="relative">
                  <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Search Input */}
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or dish"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 rounded-xl transition-colors duration-200 text-lg">
                Find Food
              </button>
            </div>

            {/* Popular Searches */}
            <div className="space-y-3">
              <p className="text-orange-200 font-medium">Popular searches:</p>
              <div className="flex flex-wrap gap-3">
                {['Pizza', 'Burger', 'Sushi', 'Indian', 'Chinese', 'Italian'].map((item) => (
                  <button
                    key={item}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Delicious food"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-bounce-gentle">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">30</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Minutes</p>
                  <p className="text-gray-600 text-sm">Delivery</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">4.8</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Rating</p>
                  <p className="text-gray-600 text-sm">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}