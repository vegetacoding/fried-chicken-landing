import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Phone, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CartIcon } from "@/components/cart"
import { AddToCartButton } from "@/components/add-to-cart-button"

// Menu items data
const menuItems = [
  {
    id: 1,
    name: "Classic Crispy Bucket",
    description: "Our signature crispy fried chicken pieces in a family-sized bucket. Perfect for sharing.",
    price: "$19.99",
    image: "/images/crispy-bucket.jpg",
  },
  {
    id: 2,
    name: "Spicy Chicken Sandwich",
    description: "Crispy chicken fillet with our special spicy sauce, fresh lettuce, and pickles on a toasted bun.",
    price: "$8.99",
    image: "/images/chicken-sandwich.jpg",
  },
  {
    id: 3,
    name: "Chicken Tenders Combo",
    description: "Golden crispy chicken tenders served with fries, coleslaw, and your choice of dipping sauce.",
    price: "$12.99",
    image: "/images/chicken-tenders.jpg",
  },
  {
    id: 4,
    name: "Nashville Hot Chicken",
    description: "Extra spicy fried chicken with our Nashville-inspired hot sauce and cooling pickles.",
    price: "$14.99",
    image: "/images/chicken-tenders.jpg",
  },
  {
    id: 5,
    name: "Family Feast",
    description: "16 pieces of chicken, 4 sides, and 4 drinks. The perfect meal for the whole family.",
    price: "$39.99",
    image: "/images/crispy-bucket.jpg",
  },
  {
    id: 6,
    name: "Crispy Chicken Salad",
    description: "Fresh mixed greens topped with crispy chicken strips, cherry tomatoes, and ranch dressing.",
    price: "$10.99",
    image: "/images/chicken-salad.jpg",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-amber-600">Crispy Delights</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#menu" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Menu
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-amber-600 transition-colors">
              About Us
            </Link>
            <Link href="#locations" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Locations
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <CartIcon />
            <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <div className="relative h-[70vh] overflow-hidden">
            <Image src="/images/hero-chicken.jpg" alt="Crispy fried chicken" fill className="object-cover" priority />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col justify-center">
            <div className="max-w-xl space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Crispy, Juicy, <span className="text-amber-500">Irresistible</span>
              </h1>
              <p className="text-xl text-white/90">
                Experience the perfect crunch with every bite of our signature fried chicken, made with a secret blend
                of herbs and spices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Order Online <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                  View Menu
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-amber-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Fast Service</h3>
                <p className="text-muted-foreground">
                  From order to table in under 10 minutes. We value your time as much as our chicken.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Only the freshest ingredients and highest quality chicken make it to your plate.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Free Delivery</h3>
                <p className="text-muted-foreground">
                  Enjoy our delicious meals from the comfort of your home with free delivery on orders over $20.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section id="menu" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Signature Menu</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our mouth-watering selection of crispy fried chicken and delicious sides, crafted with love and
                our secret recipes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="text-amber-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <AddToCartButton item={item} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                View Full Menu
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-amber-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our crispy
                delights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  comment:
                    "The crispiest chicken I've ever had! My family can't get enough of their weekend bucket special.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  comment:
                    "Their spicy chicken sandwich is out of this world. Perfect level of heat and the chicken is always juicy.",
                  rating: 5,
                },
                {
                  name: "Jessica Williams",
                  comment: "Fast delivery and the food was still hot and crispy. Will definitely order again!",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                      ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.comment}"</p>
                  <p className="font-medium">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Crispy Delights started in 2010 with a simple mission: to serve the crispiest, juiciest fried chicken
                  in town. What began as a small family-owned restaurant has grown into multiple locations, but our
                  commitment to quality remains unchanged.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our secret recipe, passed down through generations, combines the perfect blend of herbs and spices to
                  create that distinctive flavor that keeps our customers coming back for more.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-amber-600 hover:bg-amber-700">Learn More</Button>
                  <Button variant="outline">Our Locations</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/restaurant-interior.jpg" alt="Restaurant interior" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-amber-600">
          <div className="container">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Hungry Yet?</h2>
              <p className="text-xl mb-8">
                Order online for pickup or delivery and satisfy your crispy chicken cravings today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-100">
                  Order Online
                </Button>
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                  Download Our App
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section id="locations" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit one of our locations and experience the crispy goodness in person.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Downtown",
                  address: "123 Main Street, Downtown",
                  phone: "(555) 123-4567",
                  hours: "Mon-Sun: 10am - 10pm",
                },
                {
                  name: "Westside",
                  address: "456 West Avenue, Westside",
                  phone: "(555) 987-6543",
                  hours: "Mon-Sun: 11am - 11pm",
                },
                {
                  name: "Northside Mall",
                  address: "789 North Mall, Food Court",
                  phone: "(555) 456-7890",
                  hours: "Mon-Sat: 10am - 9pm, Sun: 11am - 7pm",
                },
              ].map((location, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6 border-amber-600 text-amber-600 hover:bg-amber-50">
                    Get Directions
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.jpg"
                  alt="Crispy Delights Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-amber-500">Crispy Delights</span>
              </div>
              <p className="text-gray-400">Serving the crispiest, juiciest fried chicken since 2010.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-500" />
                  <span className="text-gray-400">(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  <span className="text-gray-400">123 Main Street, Downtown</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Join our mailing list for special offers and updates.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 rounded-md text-white w-full"
                />
                <Button className="bg-amber-600 hover:bg-amber-700">Join</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Crispy Delights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
