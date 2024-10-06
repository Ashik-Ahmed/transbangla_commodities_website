"use client"

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Anchor, Shield, Droplet, Maximize2, Fuel, Compass, Ruler, ArrowsHorizontal, ArrowDown, Scale, Zap, DollarSign, Ship, Box, ArrowLeftRight } from 'lucide-react'
import Image from 'next/image'

const ships = [
    {
        name: "MT Precious Eternal",
        image: "/mt_precious_eternal.jpeg",
        description: "Our flagship vessel, MT Precious Eternal, is a state-of-the-art oil tanker designed for efficient and safe transportation of refined oil products.",
        longDescription: "MT Precious Eternal boasts a double-hull design that enhances safety and reduces the risk of oil spills. Its advanced navigation systems and fuel-efficient engines make it an environmentally friendly choice for oil transportation.",
        color: "bg-blue-500",
        features: [
            { icon: <Anchor className="h-6 w-6" />, text: "Oil Tanker Type" },
            { icon: <Shield className="h-6 w-6" />, text: "Steel Body Construction" },
            { icon: <Droplet className="h-6 w-6" />, text: "800 MT Capacity" },
            { icon: <Maximize2 className="h-6 w-6" />, text: "Double Bottom for Enhanced Safety" },
            { icon: <Fuel className="h-6 w-6" />, text: "China Diesel (2Nos) Engines" },
            { icon: <Compass className="h-6 w-6" />, text: "Advanced Navigation Systems" },
            { icon: <Ruler className="h-6 w-6" />, text: "55.39 M Length" },
            { icon: <ArrowLeftRight className="h-6 w-6" />, text: "10.36 M Breadth" },
            { icon: <ArrowDown className="h-6 w-6" />, text: "Draft: 3.50 M" },
            { icon: <Scale className="h-6 w-6" />, text: "Gross 601 Ton" },
            { icon: <Zap className="h-6 w-6" />, text: "600 BHP Horse Power" },
            { icon: <DollarSign className="h-6 w-6" />, text: "Value: 7.5 Crore" },
        ],
    },
    // {
    //     name: "SS Global Voyager",
    //     image: "/ship2.jpg",
    //     description: "SS Global Voyager is a versatile container ship capable of handling various types of cargo. Its large capacity and efficient design make it an ideal choice for long-haul international shipping routes.",
    //     longDescription: "Equipped with state-of-the-art container handling systems, SS Global Voyager can efficiently manage a wide range of cargo types. Its optimized hull design and advanced propulsion system ensure fuel efficiency even at high speeds.",
    //     color: "bg-green-500",
    //     features: [
    //         { icon: <Anchor className="h-6 w-6" />, text: "Container Ship Type" },
    //         { icon: <Maximize2 className="h-6 w-6" />, text: "5000 TEU Capacity" },
    //         { icon: <Fuel className="h-6 w-6" />, text: "Fuel-Efficient Design" },
    //         { icon: <Waves className="h-6 w-6" />, text: "Optimized Hull Design" },
    //         { icon: <Zap className="h-6 w-6" />, text: "High-Speed Capability" },
    //         { icon: <Compass className="h-6 w-6" />, text: "Advanced Weather Routing" },
    //     ],
    // },
    // {
    //     name: "MV Coastal Explorer",
    //     image: "/ship3.jpg",
    //     description: "MV Coastal Explorer is a specialized vessel designed for coastal shipping and short sea routes. Its versatile design allows it to access smaller ports and navigate shallow waters with ease.",
    //     longDescription: "The MV Coastal Explorer is built to excel in coastal environments. Its shallow draft and maneuverability make it perfect for navigating intricate coastlines and entering smaller ports.",
    //     color: "bg-purple-500",
    //     features: [
    //         { icon: <Anchor className="h-6 w-6" />, text: "Coastal Vessel Type" },
    //         { icon: <Droplet className="h-6 w-6" />, text: "800 MT Capacity" },
    //         { icon: <Shield className="h-6 w-6" />, text: "Shallow Draft Design" },
    //         { icon: <Maximize2 className="h-6 w-6" />, text: "Versatile Cargo Handling" },
    //         { icon: <Waves className="h-6 w-6" />, text: "High Maneuverability" },
    //         { icon: <Fuel className="h-6 w-6" />, text: "Eco-Friendly Operations" },
    //     ],
    // },
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

const ShipCard = ({ ship, index }) => {
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
            className={`${ship.color} rounded-lg shadow-lg overflow-hidden mb-12`}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                hidden: { opacity: 0, y: 50 }
            }}
        >
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                    className="md:w-1/2"
                    variants={{
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 }
                    }}
                >
                    <Image
                        src={ship.image}
                        alt={ship.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                    />
                </motion.div>
                <div className="md:w-1/2 p-6 text-white">
                    <motion.h3
                        className="text-3xl font-bold mb-2"
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                            hidden: { opacity: 0, y: 20 }
                        }}
                    >
                        {ship.name}
                    </motion.h3>
                    <motion.p
                        className="text-xl mb-4"
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                            hidden: { opacity: 0, y: 20 }
                        }}
                    >
                        {ship.description}
                    </motion.p>
                    <motion.p
                        className="mb-6"
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                            hidden: { opacity: 0, y: 20 }
                        }}
                    >
                        {ship.longDescription}
                    </motion.p>
                    <motion.h4
                        className="text-2xl font-semibold mb-4"
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
                            hidden: { opacity: 0, y: 20 }
                        }}
                    >
                        Key Features:
                    </motion.h4>
                    <ul className="grid grid-cols-2 gap-4">
                        {ship.features.map((feature, featureIndex) => {
                            console.log('Rendering feature:', feature.text);
                            return (
                                <motion.li
                                    key={featureIndex}
                                    className="flex items-center"
                                    variants={{
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 + featureIndex * 0.1 } },
                                        hidden: { opacity: 0, x: -20 }
                                    }}
                                >
                                    <span className="mr-2 text-white">{feature.icon}</span>
                                    {feature.text}
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default function Fleet() {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative text-white bg-blue-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Fleet
                    </motion.h1>

                    <motion.p
                        className="text-xl text-center mb-16 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        The company owns a vessel, the MT Precious Eternal, which is currently transporting refined oil that has been nominated by the Bangladesh Petroleum Corporation.
                    </motion.p>
                </div>
            </section>
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                <div className="space-y-16">
                    {ships.map((ship, index) => (
                        <ShipCard key={index} ship={ship} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}