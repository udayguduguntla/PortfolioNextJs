import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedRestaurants from '@/components/FeaturedRestaurants'
import PopularDishes from '@/components/PopularDishes'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <PopularDishes />
      <Footer />
    </main>
  )
}