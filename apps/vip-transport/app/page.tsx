import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@intent-flow-package/ui';
import { Phone, Mail, MapPin, Clock, Shield, Star, Car, Users, Award, CheckCircle2, Calendar, MapPin as MapPinIcon, ArrowRight, TrendingUp, Globe } from 'lucide-react';
import { Logo } from './components/Logo';
import { HeroImage } from './components/HeroImage';
import { FleetImage } from './components/FleetImage';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-900 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Logo variant="dark" />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-amber-400 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Our Services</a>
            <a href="#fleet" className="text-gray-400 hover:text-amber-400 transition-colors">Our Fleets</a>
            <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-amber-400">Sign In</Button>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Cadillac Escalade */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">Premium VIP Transportation</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Your <span className="text-amber-400">Ultimate</span> Luxury Drive Awaits
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Experience the pinnacle of comfort and elegance with our premium fleet of luxury vehicles.
                  Professional chauffeurs, impeccable service, and unmatched reliability.
                </p>
              </div>

              {/* Booking Form */}
              <Card className="bg-gray-900/90 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 flex items-center space-x-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>Location</span>
                      </label>
                      <input
                        type="text"
                        placeholder="City Or Airport"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Pick Up Date</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Select Date"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Return Date</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Select Date"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold h-[52px]">
                        Search
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Searches */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Popular Search:</span>
                <div className="flex flex-wrap gap-2">
                  {['Cadillac Escalade', 'Mercedes S-Class', 'BMW 7 Series'].map((item) => (
                    <button
                      key={item}
                      className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300 hover:border-amber-500 hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Cadillac Escalade Image */}
            <div className="relative lg:block hidden">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">200+</div>
              <div className="text-gray-400">Luxury Vehicles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">4.9</div>
              <div className="text-gray-400">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-amber-400">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience, trust, and unmatched service crafted over the years
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Intercity Trips",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
                description: "Long-distance luxury travel"
              },
              {
                title: "Business Meeting",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&q=80",
                description: "Professional corporate transportation"
              },
              {
                title: "Airport Transfer",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&q=80",
                description: "Punctual airport pickups and drop-offs"
              },
              {
                title: "Charter Service",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80",
                description: "Exclusive vehicle charter options"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-amber-500/50 transition-all cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <FleetImage
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safety First", desc: "Experienced staff and professionally trained chauffeurs" },
              { icon: TrendingUp, title: "Reasonable Rates", desc: "Right vehicle at the right price for every occasion" },
              { icon: Car, title: "Largest Fleet", desc: "Extensive fleet including sedans, limousines and coach buses" },
              { icon: Globe, title: "Nationwide Service", desc: "Transportation services available nationwide" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-amber-400">Fleet</span>
              </h2>
              <p className="text-gray-400">Hand-selected premium vehicles for the ultimate travel experience</p>
            </div>
            <div className="hidden md:flex gap-2">
              {['All', 'Luxury', 'Business', 'Crossover'].map((filter) => (
                <button
                  key={filter}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${filter === 'All'
                      ? 'bg-amber-500 text-black'
                      : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "2025 Cadillac Escalade",
                image: "/images/escalade-hero.png",
                passengers: 7,
                luggage: 4,
                category: "Luxury SUV"
              },
              {
                name: "Mercedes-Benz V-Class",
                image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop&q=90",
                passengers: 6,
                luggage: 4,
                category: "Luxury Van"
              },
              {
                name: "Audi A8",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&q=90",
                passengers: 4,
                luggage: 2,
                category: "Luxury Sedan"
              }
            ].map((vehicle, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-amber-500/50 transition-all">
                <div className="aspect-video overflow-hidden bg-gray-800">
                  <FleetImage
                    src={vehicle.image}
                    alt={vehicle.name}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{vehicle.name}</CardTitle>
                  <CardDescription className="text-gray-400">{vehicle.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{vehicle.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Car className="w-4 h-4" />
                      <span>{vehicle.luggage} Bags</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg">
              View All Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-amber-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-400">We're here to assist you with all your transportation needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-amber-400" />
                </div>
                <CardTitle className="text-white">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">24/7 Support</p>
                <a href="tel:+1234567890" className="text-amber-400 hover:text-amber-500 font-semibold text-lg">
                  +1 (234) 567-890
                </a>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-amber-400" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">Send us a message</p>
                <a href="mailto:info@eliteride.com" className="text-amber-400 hover:text-amber-500 font-semibold">
                  info@eliteride.com
                </a>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-amber-400" />
                </div>
                <CardTitle className="text-white">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  123 Luxury Avenue<br />
                  Premium District, City 12345
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo variant="dark" size="sm" className="mb-4" />
              <p className="text-sm text-gray-400">
                Premium VIP transportation services with unmatched luxury and reliability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Top Cities</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">New York</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Los Angeles</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Chicago</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Limousine</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Chauffeur</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Airport Transfer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Intercity Rides</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">New York - Washington</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Los Angeles - San Francisco</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-900" />
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} EliteRide. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Social media icons would go here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
