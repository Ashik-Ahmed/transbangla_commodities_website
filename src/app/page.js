"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Ship, Globe, Users, Briefcase, Anchor } from 'lucide-react'
import StatisticsSection from './components/Statistics/Statistics'
import ClientReviews from './components/Reviews/Reviews'

export default function Home() {
  const [animatedText, setAnimatedText] = useState('')
  const fullText = 'Your Global Commodities Partner'

  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setAnimatedText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(intervalId)
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-500 text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[80vh] flex items-center md:items-start justify-center text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-12 z-20">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* {animatedText} */}
            Your Global Commodities Partner
          </motion.h1>
          <motion.h1
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transbangla Commodities Ltd. - Your trusted partner in global trade and shipping.
          </motion.h1>
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Your Global Commodities Partner</h1> */}
          {/* <p className="text-xl sm:text-2xl mb-8">Transbangla Commodities Ltd. - Your trusted partner in global trade and shipping.</p> */}
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300">
            Explore More
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-64 sm:h-80 md:h-96 z-10 overflow-hidden">
          <svg className="absolute bottom-0 left-0 right-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              fill="#4299e1"
              fillOpacity="0.3"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,213.3C672,213,768,171,864,144C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </svg>
          <svg className="absolute bottom-0 left-0 right-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              fill="#3182ce"
              fillOpacity="0.7"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </svg>
          <svg className="absolute bottom-0 left-0 right-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              fill="#2b6cb0"
              fillOpacity="0.4"
              d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,224C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div> */}
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Ship className="h-12 w-12 text-blue-600 group-hover:text-white" />}
              title="Trading"
              description="Expert commodity trading services across global markets."
            />
            <ServiceCard
              icon={<Globe className="h-12 w-12 text-blue-600 group-hover:text-white" />}
              title="Business Development"
              description="Strategic growth and expansion services for your business."
            />
            <ServiceCard
              icon={<Users className="h-12 w-12 text-blue-600 group-hover:text-white" />}
              title="Agent Management"
              description="Efficient management of intermediaries and agents worldwide."
            />
            <ServiceCard
              icon={<Anchor className="h-12 w-12 text-blue-600 group-hover:text-white" />}
              title="Shipping Services"
              description="Customized shipping solutions for your business needs."
            />
          </div>
        </div>
      </section>

      {/* Fleet Section
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Fleet</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src="/placeholder.svg?height=300&width=300" alt="MT Precious Eternal" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">OT Precious Eternal</div>
                <p className="mt-2 text-gray-600">Type: Oil Tanker</p>
                <p className="mt-2 text-gray-600">Capacity: 1500 MT</p>
                <p className="mt-2 text-gray-600">Features: Steel Body, Double Bottom</p>
                <p className="mt-2 text-gray-600">Currently chartered to Jamuna Oil Company</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <StatisticsSection />

      <ClientReviews />

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-blue-500 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Contact us today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-900">
            Let's discuss how Transbangla Commodities can help your business thrive in the global market.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
            Contact Us
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white hover:scale-105 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white group">
    <div className="flex items-center justify-center mb-4 group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 group-hover:text-white">{title}</h3>
    <p className="text-gray-600 text-center group-hover:text-white">{description}</p>
  </div>
)