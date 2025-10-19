import RestaurantList from '@/components/RestaurantList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <RestaurantList />
      <Footer />
    </main>
  )
}