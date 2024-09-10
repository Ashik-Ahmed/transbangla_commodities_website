"use client"

import { motion } from 'framer-motion'
import { Globe, Users, TrendingUp, Anchor } from 'lucide-react'
import Image from 'next/image'

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            {/* <section className="relative text-black py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Transbangla Commodities Ltd.
                    </motion.h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        Your trusted partner in global trade, business development, and shipping services.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section> */}

            {/* Company Overview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Company Overview</h2>
                    <div className="prose prose-lg mx-auto">
                        <p>
                            Transbangla Commodities Ltd. is a leading player in the global trading and shipping industry. We specialize in business development, intermediary and agent management, and provide comprehensive shipping services to our clients worldwide.
                        </p>
                        <p>
                            With our extensive network and partnerships with globally recognized energy companies, we are well-positioned to meet the diverse needs of our clients in the commodities market. Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeatureCard
                            icon={<Globe className="h-12 w-12 text-blue-600 group-hover:text-white" />}
                            title="Global Network"
                            description="Extensive partnerships with recognized energy companies worldwide."
                        />
                        <FeatureCard
                            icon={<Users className="h-12 w-12 text-blue-600 group-hover:text-white" />}
                            title="Expert Team"
                            description="Highly skilled professionals with deep industry knowledge."
                        />
                        <FeatureCard
                            icon={<TrendingUp className="h-12 w-12 text-blue-600 group-hover:text-white" />}
                            title="Business Growth"
                            description="Focused on business development and strategic expansion."
                        />
                        <FeatureCard
                            icon={<Anchor className="h-12 w-12 text-blue-600 group-hover:text-white" />}
                            title="Shipping Expertise"
                            description="Comprehensive shipping services with our own fleet."
                        />
                    </div>
                </div>
            </section>

            {/* Our Fleet */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Fleet</h2>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-3/5">
                                <img className="w-full object-cover" src="/ship.jpg" alt="MT Precious Eternal" />
                                {/* <Image className="w-full object-cover" src="/ship.jpg" alt="MT Precious Eternal" width={300} height={300} /> */}
                            </div>
                            <div className="p-8 md:w-2/5">
                                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">OT Precious Eternal</div>
                                <p className="mt-2 text-gray-600">Our flagship vessel, MT Precious Eternal, is a state-of-the-art oil tanker designed for efficient and safe transportation of refined oil. Currently, it is carrying refined oil nominated by Bangladesh Petroleum Corporation (BPC).</p>
                                <ul className="mt-4 text-gray-600">
                                    <li>Type: Oil Tanker</li>
                                    <li>Construction: Steel Body</li>
                                    <li>Capacity: 1500 MT</li>
                                    <li>Safety Feature: Double Bottom</li>
                                    <li>Current Charter: Jamuna Oil Company</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-lg">
                                To provide exceptional trading and shipping services that drive growth and success for our clients in the global commodities market.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-lg">
                                To be the leading commodities trading and shipping company, known for our reliability, innovation, and commitment to sustainable business practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white hover:bg-blue-500 hover:scale-105 hover:transition-all  hover:shadow-blue-500 rounded-lg shadow-lg p-6 hover:shadow-lg transition-all duration-900 group">
        <div className="flex items-center justify-center mb-4 group-hover:text-white">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 group-hover:text-white">{title}</h3>
        <p className="text-gray-600 text-center group-hover:text-white">{description}</p>
    </div>
)