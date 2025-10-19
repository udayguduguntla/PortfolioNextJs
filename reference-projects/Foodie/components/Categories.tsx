import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    count: '120+ restaurants'
  },
  {
    id: 2,
    name: 'Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    count: '85+ restaurants'
  },
  {
    id: 3,
    name: 'Sushi',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    count: '45+ restaurants'
  },
  {
    id: 4,
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    count: '200+ restaurants'
  },
  {
    id: 5,
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    count: '150+ restaurants'
  },
  {
    id: 6,
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    count: '90+ restaurants'
  },
  {
    id: 7,
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c4a6706?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    count: '70+ restaurants'
  },
  {
    id: 8,
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    count: '110+ restaurants'
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What's on your mind?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore cuisines and dishes from your favorite restaurants
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.name.toLowerCase()}`}
              className="group text-center"
            >
              <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors duration-200">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{category.count}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}