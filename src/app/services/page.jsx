"use client"

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { TrendingUp, Globe, Anchor, Users, BarChart } from 'lucide-react'

const services = [
    {
        name: "Trading",
        icon: <TrendingUp className="h-12 w-12" />,
        description: "Our expert trading services leverage global networks and deep market insights to provide you with the best opportunities in commodity trading.",
        details: [
            "Specialization in energy commodities (oil, gas, renewable energy)",
            "Trading in agricultural products and metals",
            "Risk management and hedging strategies",
            "Market analysis and forecasting"
        ],
        color: "bg-blue-500"
    },
    {
        name: "Business Development",
        icon: <Globe className="h-12 w-12" />,
        description: "We offer strategic growth and expansion services to help your business thrive in the competitive global market.",
        details: [
            "Market entry strategies",
            "Partnership and alliance development",
            "Business process optimization",
            "Strategic planning and execution"
        ],
        color: "bg-green-500"
    },
    {
        name: "Fleet Management",
        icon: <Anchor className="h-12 w-12" />,
        description: "Our fleet management services ensure efficient operation and maintenance of shipping assets, optimizing performance and reducing costs.",
        details: [
            "Vessel performance optimization",
            "Crew management and training",
            "Regulatory compliance and safety management",
            "Maintenance scheduling and cost control"
        ],
        color: "bg-purple-500"
    },
    {
        name: "Agent Management",
        icon: <Users className="h-12 w-12" />,
        description: "We provide comprehensive management of intermediaries and agents worldwide, optimizing your global business network.",
        details: [
            "Agent selection and onboarding",
            "Performance monitoring and evaluation",
            "Contract negotiation and management",
            "Communication and relationship management"
        ],
        color: "bg-red-500"
    },
    {
        name: "Shipping Services",
        icon: <BarChart className="h-12 w-12" />,
        description: "Our end-to-end shipping solutions cover all aspects of maritime transportation, ensuring efficient and reliable cargo delivery.",
        details: [
            "Cargo booking and scheduling",
            "Documentation and customs clearance",
            "Port agency services",
            "Logistics and supply chain management"
        ],
        color: "bg-yellow-500"
    }
]

const useInView = (options) => {
    const [ref, setRef] = useState(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting)
        }, options)

        if (ref) {
            observer.observe(ref)
        }

        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref, options])

    return [setRef, inView]
}

const ServiceCard = ({ service, index }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            className={`${service.color} rounded-lg shadow-lg overflow-hidden mb-12`}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                hidden: { opacity: 0, y: 50 }
            }}
        >
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                    className="md:w-1/3 flex items-center justify-center p-8"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                        hidden: { opacity: 0, scale: 0.8 }
                    }}
                >
                    <div className="text-white">
                        {service.icon}
                    </div>
                </motion.div>
                <div className="md:w-2/3 p-8 bg-white">
                    <motion.h3
                        className="text-3xl font-bold mb-4 text-gray-900"
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                            hidden: { opacity: 0, y: 20 }
                        }}
                    >
                        {service.name}
                    </motion.h3>
                    <motion.p
                        className="text-xl mb-6 text-gray-700"
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                            hidden: { opacity: 0, y: 20 }
                        }}
                    >
                        {service.description}
                    </motion.p>
                    <motion.ul
                        className="list-disc list-inside text-gray-700"
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                            hidden: { opacity: 0, y: 20 }
                        }}
                    >
                        {service.details.map((detail, detailIndex) => (
                            <motion.li
                                key={detailIndex}
                                variants={{
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 + detailIndex * 0.1 } },
                                    hidden: { opacity: 0, x: -20 }
                                }}
                            >
                                {detail}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </motion.div>
    )
}

export default function Services() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.h1
                    className="text-4xl font-extrabold text-gray-900 text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Services
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    At Transbangla Commodities, we offer a comprehensive range of services to meet all your global trade and shipping needs. Our expertise spans across various sectors, ensuring that we can provide tailored solutions for your business.
                </motion.p>
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}