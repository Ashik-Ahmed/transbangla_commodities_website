"use client"

import { motion } from 'framer-motion'
import { Globe, Users, TrendingUp, Anchor, Lightbulb, Award } from 'lucide-react'
import Image from 'next/image'

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative text-white bg-blue-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Transbangla Commodities Ltd.
                    </motion.h1>
                    <motion.p
                        className="text-xl text-center mb-16 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Your trusted partner in global trade, business development, and shipping services.
                    </motion.p>
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


            {/* Our Mission */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="prose prose-lg">
                            <p>
                                Transbangla is committed to delivering exceptional service and value to both suppliers and buyers. The company continuously seeks to optimize processes and enhance efficiency for all parties involved, ensuring a seamless experience. This focus on customer satisfaction is reflected in the expertise of Transbangla&apos;s workforce, which spans agency operations, commercial matters, shipping, and other ancillary services.
                            </p>
                            <p className='mt-4'>
                                Transbangla&apos;s adaptability and dynamism have been key factors in its ongoing growth and success. The company is well-equipped to tackle new challenges and seize emerging opportunities in the energy sector.
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
            <section className="py-16 bg-gray-100">
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
                                At Transbangla Commodities Ltd., our vision is to become a leading global force in trading and shipping services, setting new standards of excellence in the industry. We aspire to:
                            </p>
                            <ul className="space-y-2 list-none pl-0 my-4">
                                <li className="flex items-start">
                                    <Globe className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                                    <span>Expand our reach into new markets, forging strategic partnerships that drive mutual growth and success.</span>
                                </li>
                                <li className="flex items-start">
                                    <Lightbulb className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                                    <span>Innovate continuously in our services and operations, embracing cutting-edge technologies and sustainable practices.</span>
                                </li>
                                <li className="flex items-start">
                                    <Award className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                                    <span>Be recognized as the preferred partner for energy solutions, known for our reliability, efficiency, and customer-centric approach.</span>
                                </li>
                                <li className="flex items-start">
                                    <TrendingUp className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                                    <span>Contribute significantly to the economic development of Bangladesh and beyond, creating value for all our stakeholders.</span>
                                </li>
                                <li className="flex items-start">
                                    <Users className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                                    <span>Foster a culture of excellence, nurturing talent and leadership that will shape the future of the commodities and shipping industries.</span>
                                </li>
                            </ul>
                            <p>
                                We envision a future where Transbangla Commodities Ltd. is synonymous with trust, innovation, and global trade leadership, playing a pivotal role in connecting resources with needs across the world.
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