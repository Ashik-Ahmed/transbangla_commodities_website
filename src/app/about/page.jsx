"use client"

import { motion } from 'framer-motion'
import { Globe, Users, TrendingUp, Anchor } from 'lucide-react'
import Image from 'next/image'

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative text-black py-24">
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
                <div className="mt-12 relative h-64 sm:h-80 md:h-96">
                    <Image
                        src="/mission.jpeg"
                        alt="Transbangla Commodities Ltd."
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Company Overview</h2>
                    <div className="prose prose-lg mx-auto">
                        <p>
                            Founded in 2000, Transbangla Commodities Ltd. is engaged in the trading of commodities, with a particular emphasis on energy. The company concentrates on business development, fleet management, shipping services, and the management of intermediaries and agents.
                        </p>
                        <p className='mt-4'>
                            Over the years, Transbangla has built strong relationships with international energy companies and commodities suppliers. By collaborating with top-tier traders, manufacturers, and suppliers, the company is able to source and supply various industrial, commercial, and consumer products to both public and private organizations.
                        </p>
                        <p className='mt-4'>
                            While Transbangla&apos;s early success was built on importing goods such as railway equipment, raw materials, and fertilizers, the company has shifted its focus to petroleum and finished products, other commodities, and shipping services. This diversification has enabled Transbangla to become a comprehensive trader and energy solutions provider in Bangladesh.
                        </p>
                    </div>
                </div>
            </section>


            {/* Our Mission */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="prose prose-lg">
                            <p>
                                Transbangla is committed to delivering exceptional service and value to both suppliers and buyers. The company continuously seeks to optimize processes and enhance efficiency for all parties involved, ensuring a seamless experience. This focus on customer satisfaction is reflected in the expertise of Transbangla&apos;s workforce, which spans agency operations, commercial matters, shipping, and other ancillary services.
                            </p>
                            <p className='mt-4'>
                                Transbangla&apos;   s adaptability and dynamism have been key factors in its ongoing growth and success. The company is well-equipped to tackle new challenges and seize emerging opportunities in the energy sector.
                            </p>
                        </div>
                        <div className="relative h-64 sm:h-80 md:h-96">
                            <Image
                                src="/mission.jpg"
                                alt="Our Mission"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Vision */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Vision</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative h-64 sm:h-80 md:h-96 order-2 md:order-1">
                            <Image
                                src="/vision.jpg"
                                alt="Our Vision"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="prose prose-lg order-1 md:order-2">
                            <p>
                                The vision is to become a leading contributor in trading and shipping services as well as penetrating new markets through strategic partnerships and expansion.
                            </p>
                        </div>
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