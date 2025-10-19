import Image from 'next/image'
import Link from 'next/link'
import { PlusIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

const dishes = [
  {
    id: 1,
    name: 'Margherita Pizza',
    restaurant: 'Bella Italia',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVeg: true,
    isFavorite: false,
    description: 'Fresh tomatoes, mozzarella, basil'
  },
  {
    id: 2,
    name: 'Chicken Biryani',
    restaurant: 'Spice Garden',
    price: 249,
    originalPrice: 299,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVeg: false,
    isFavorite: true,
    description: 'Aromatic basmati rice with tender chicken'
  },
  {
    id: 3,
    name: 'Chicken Hakka Noodles',
    restaurant: 'Dragon Palace',
    price: 199,
    originalPrice: 249,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVeg: false,
    isFavorite: false,
    description: 'Stir-fried noodles with vegetables and chicken'
  },
  {
    id: 4,
    name: 'Classic Burger',
    restaurant: 'Burger Junction',
    price: 179,
    originalPrice: 229,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVeg: false,
    isFavorite: false,
    description: 'Juicy beef patty with fresh vegetables'
  },
  {
    id: 5,
    name: 'California Roll',
    restaurant: 'Sushi Master',
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVeg: false,
    isFavorite: true,
    description: 'Fresh crab, avocado, cucumber'
  },
  {
    id: 6,
    name: 'Chicken Tacos',
    restaurant: 'Taco Fiesta',
    price: 159,
    originalPrice: 199,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1565299585323-38174c4a6706?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVeg: false,
    isFavorite: false,
    description: 'Grilled chicken with fresh salsa'
  }
]

export default function PopularDishes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular dishes
            </h2>
            <p className="text-lg text-gray-600">
              Most ordered dishes in your area
            </p>
          </div>
          <Link
            href="/dishes"
            className="hidden md:inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
          >
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  {dish.isFavorite ? (
                    <HeartSolidIcon className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <div className="absolute top-4 left-4">
                  <div className={`w-4 h-4 rounded-full border-2 ${dish.isVeg ? 'border-green-500 bg-green-500' : 'border-red-500 bg-red-500'}`}>
                    <div className={`w-2 h-2 rounded-full m-0.5 ${dish.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {dish.name}
                  </h3>
                  <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-lg">
                    <span className="text-sm font-semibold text-green-600">
                      ★ {dish.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-2">{dish.restaurant}</p>
                <p className="text-gray-500 text-sm mb-4">{dish.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{dish.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{dish.originalPrice}
                    </span>
                  </div>
                  <button className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    <PlusIcon className="w-4 h-4" />
                    <span className="font-semibold">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/dishes"
            className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
          >
            View All Dishes
          </Link>
        </div>
      </div>
    </section>
  )
}