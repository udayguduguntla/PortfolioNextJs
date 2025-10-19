import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/solid'

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
    promoted: true
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
    promoted: false
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
    promoted: true
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
    promoted: false
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
    promoted: true
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
    promoted: false
  }
]

export default function FeaturedRestaurants() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Top restaurants near you
            </h2>
            <p className="text-lg text-gray-600">
              Discover the best rated restaurants in your area
            </p>
          </div>
          <Link
            href="/restaurants"
            className="hidden md:inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            View All
          </Link>
        </div>

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

                <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>

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

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/restaurants"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            View All Restaurants
          </Link>
        </div>
      </div>
    </section>
  )
}