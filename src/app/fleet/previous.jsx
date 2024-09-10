"use client"

import { motion } from 'framer-motion'
import { Anchor, Shield, Droplet, Maximize2 } from 'lucide-react'

export default function Fleet() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Fleet
                    </motion.h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        Discover our state-of-the-art vessel, designed for efficient and safe transportation of refined oil.
                    </p>
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div> */}
            </section>

            {/* Fleet Overview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">MT Precious Eternal</h2>
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <img src="/placeholder.svg?height=400&width=600" alt="MT Precious Eternal" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vessel Specifications</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <Anchor className="h-6 w-6 text-blue-600 mr-2" />
                                    <span>Type: Oil Tanker</span>
                                </li>
                                <li className="flex items-center">
                                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                                    <span>Construction: Steel Body</span>
                                </li>
                                <li className="flex items-center">
                                    <Droplet className="h-6 w-6 text-blue-600 mr-2" />
                                    <span>Capacity: 1500 MT</span>
                                </li>
                                <li className="flex items-center">
                                    <Maximize2 className="h-6 w-6 text-blue-600 mr-2" />
                                    <span>Safety Feature: Double Bottom</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-gray-600">
                                MT Precious Eternal is our flagship vessel, designed for shallow draft operations. It is currently chartered to Jamuna Oil Company and is carrying refined oil nominated by Bangladesh Petroleum Corporation (BPC).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Droplet className="h-12 w-12 text-blue-600" />}
                            title="Efficient Capacity"
                            description="With a capacity of 1500 MT, MT Precious Eternal is optimized for efficient transportation of refined oil products."
                        />
                        <FeatureCard
                            icon={<Shield className="h-12 w-12 text-blue-600" />}
                            title="Enhanced Safety"
                            description="The double bottom design provides an extra layer of safety, protecting both the cargo and the environment."
                        />
                        <FeatureCard
                            icon={<Anchor className="h-12 w-12 text-blue-600" />}
                            title="Shallow Draft Operations"
                            description="Specially designed for shallow draft operations, allowing access to a wider range of ports and terminals."
                        />
                    </div>
                </div>
            </section>

            {/* Current Operations */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Current Operations</h2>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Charter Details</h3>
                        <p className="text-gray-600 mb-4">
                            MT Precious Eternal is currently chartered to Jamuna Oil Company, a leading oil company in Bangladesh. The vessel is engaged in the transportation of refined oil products nominated by Bangladesh Petroleum Corporation (BPC).
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Operational Highlights</h4>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Efficient loading and unloading processes</li>
                            <li>Strict adherence to safety protocols</li>
                            <li>Regular maintenance to ensure optimal performance</li>
                            <li>Compliance with all relevant maritime regulations</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Fleet Expansion Plans */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center mb-8">Future Fleet Expansion</h2>
                    <p className="text-lg text-center max-w-3xl mx-auto">
                        At Transbangla Commodities Ltd., we are committed to growing our fleet to meet the evolving needs of our clients and the global energy market. Stay tuned for updates on our fleet expansion plans and new vessel acquisitions.
                    </p>
                </div>
            </section>
        </div>
    )
}

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
    </div>
)