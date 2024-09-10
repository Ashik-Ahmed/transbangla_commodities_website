import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { Globe, Anchor, TrendingUp, Users } from 'lucide-react'

const useCountAnimation = (end, duration = 15000, inView) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    const startTimeRef = useRef(0)

    useEffect(() => {
        if (!inView) return

        const animate = (timestamp) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp
            }

            const progress = timestamp - startTimeRef.current
            const percentage = Math.min(progress / duration, 1)
            const currentCount = Math.floor(end * percentage)

            if (currentCount !== countRef.current) {
                countRef.current = currentCount
                setCount(currentCount)
            }

            if (percentage < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)

        return () => {
            startTimeRef.current = 0
            countRef.current = 0
        }
    }, [end, duration, inView])

    return count
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren"
        }
    }
}

const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }
}

const numberVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
}

const StatCard = ({ icon, title, value, suffix = '', inView }) => {
    const count = useCountAnimation(value, 2000, inView)
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white group"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
        >
            <motion.div
                className="text-blue-600 mb-4 group-hover:text-white"
                variants={iconVariants}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 group-hover:text-white" >{title}</h3>
            <motion.p
                className="text-4xl font-bold text-blue-600 group-hover:text-white"
                variants={numberVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {count}
                {suffix}
            </motion.p>
        </motion.div>
    )
}

const StatisticsSection = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <section ref={ref} className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Impact in Numbers</h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        },
                        hidden: {}
                    }}
                >
                    <StatCard
                        icon={<Globe className="h-12 w-12" />}
                        title="Countries Served"
                        value={25}
                        suffix="+"
                        inView={inView}
                    />
                    <StatCard
                        icon={<Anchor className="h-12 w-12" />}
                        title="Shipments Completed"
                        value={1000}
                        suffix="+"
                        inView={inView}
                    />
                    <StatCard
                        icon={<TrendingUp className="h-12 w-12" />}
                        title="Annual Revenue (USD)"
                        value={50}
                        suffix="M+"
                        inView={inView}
                    />
                    <StatCard
                        icon={<Users className="h-12 w-12" />}
                        title="Satisfied Clients"
                        value={500}
                        suffix="+"
                        inView={inView}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default StatisticsSection

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