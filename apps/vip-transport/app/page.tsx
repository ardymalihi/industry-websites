import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@intent-flow-package/ui';
import { Phone, Mail, MapPin, Clock, Shield, Star, Car, Users, Award, CheckCircle2, Calendar, MapPin as MapPinIcon, ArrowRight, TrendingUp, Globe } from 'lucide-react';
import { Logo } from './components/Logo';
import { HeroImage } from './components/HeroImage';
import { FleetImage } from './components/FleetImage';
import { BookingWidget } from './components/BookingWidget';

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
            <a href="#packages" className="text-gray-400 hover:text-amber-400 transition-colors">Ride Packages</a>
            <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative">
        {/* Shared Background for Hero and Services */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/abstract-bg.png')] bg-cover bg-center opacity-40 mix-blend-screen"></div>
        </div>

        {/* Hero Section with Cadillac Escalade */}
        <section id="home" className="relative pt-24 md:pt-32 pb-20 md:pb-30 flex items-center overflow-hidden group z-10">

          <div className="container mx-auto px-6 relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                <div className="flex flex-col items-center lg:items-start space-y-4">
                  <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">The Pinnacle of Travel</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                    Your <br />
                    <span className="text-amber-400">Ultimate</span> <br />
                    Luxury Drive
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-lg font-light mx-auto lg:mx-0">
                    Redefining the art of travel with a curated selection of world-class vehicles and service that transcends expectations.
                  </p>
                </div>
              </div>

              {/* Right Column - Cadillac Escalade Image */}
              <div className="relative lg:block hidden">
                <div className="absolute -inset-20 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                <HeroImage />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative pt-24 pb-32 px-6 bg-transparent z-10">
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
                <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-gray-800 overflow-hidden group hover:border-amber-500/50 transition-all duration-500 cursor-pointer hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <FleetImage
                      src={service.image}
                      alt={service.title}
                      className="group-hover:scale-110 transition-transform duration-700"
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

        {/* Luxury Ride Packages Section (Transformed from Fleet) */}
        <section id="packages" className="relative pt-22 pb-32 px-6 bg-transparent z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-amber-400">Luxury Packages</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Premium curated travel experiences designed for comfort, luxury, and point-to-point perfection.
              </p>
            </div>
            <div className="w-full">
              <BookingWidget userId="a5b93271-5332-4a30-8974-59c45361fb6d">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Executive VIP Arrival",
                      vehicle: "2025 Cadillac Escalade",
                      image: "/images/escalade-hero.png",
                      price: "From $150",
                      features: ["Airport Meet & Greet", "Curated Refreshments", "Unlimited WiFi"]
                    },
                    {
                      name: "Business Group Jet",
                      vehicle: "Mercedes-Benz V-Class",
                      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop&q=90",
                      price: "From $200",
                      features: ["Up to 6 Passengers", "Table Workstation", "Privacy Glass"]
                    },
                    {
                      name: "First Class Chauffeur",
                      vehicle: "Audi A8 L",
                      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&q=90",
                      price: "From $180",
                      features: ["Heated Massage Seats", "Champagne Service", "Multilingual Driver"]
                    }
                  ].map((pkg, index) => (
                    <Card key={index} className="bg-black/40 backdrop-blur-md border-gray-800 overflow-hidden group hover:border-amber-500 transition-all flex flex-col h-full">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                        <FleetImage
                          src={pkg.image}
                          alt={pkg.name}
                          className="group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="text-amber-400 text-sm font-bold bg-black/80 px-3 py-1 rounded-full border border-amber-500/20">{pkg.price}</span>
                        </div>
                      </div>
                      <CardHeader className="flex-none">
                        <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1">{pkg.vehicle}</div>
                        <CardTitle className="text-white text-2xl">{pkg.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="grow flex flex-col justify-between">
                        <ul className="space-y-3 mb-8">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-400 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-6 group">
                          Book This Ride
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </BookingWidget>
            </div>
          </div>
        </section>
      </div>

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
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500/50 group-hover:bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-amber-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
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
